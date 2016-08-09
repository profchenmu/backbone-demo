define([
    'lodash',
    'backbone',
    'marionette',
    'backbone.radio',

    'application',
    'core/views/root-view/root-view',
    'modules/manage/router',
    'modules/devide/router',
    'modules/home/router',
    'modules/distribute/router',

    'modules/disinfos/router',
    'modules/devinfos/router',
    'modules/auth/router',
    'modules/empinfos/router',
    'modules/disabled/disabled',
    'core/views/root-view/no-logged',
    

    // 'backbone-query-parameters'
], function(_, Backbone, Marionette, Radio, App, RootView, 
    ManageRouter, DevideRouter, HomeRouter, DistributeRouter, 
    DisinfosRouter, DevinfosRouter, AuthRouter, EmpinfosRouter, Disabled, NoLogged) {
    'use strict';

    var Router = Marionette.AppRouter.extend({
        routes: {
            // 'index': 'index'
            // 'login': 'login',
            '*path': 'index',

        },

        execute: function() {
            this.configureEventsBeforeRoute();
            Marionette.AppRouter.prototype.execute.apply(this, arguments);
        },

        configureEventsBeforeRoute: function() {
            // var fragment, name, mainRouteNames, mainRouteName, subRouteName;

            // init head title
            // Radio.trigger('head', 'change:title');

            var fragment = Backbone.history.fragment;



            // var groups = App.menuGroups;


            // if (fragment) {
            //     mainRouteName = fragment.split('/')[0].split('?')[0];

            //     if (_.indexOf(mainRouteNames, mainRouteName) > -1) {
            //         subRouteName = (fragment.split('/')[1] || '').split('?')[0];
            //     } else {
            //         subRouteName = '';
            //     }

            //     name = {
            //         main: mainRouteName,
            //         sub: subRouteName
            //     };

            //     // this._addBodyClass(name);
            //     // this._focusNav(name);
            // }

            // Radio.trigger('globalBar', 'collapse');
            // Radio.trigger('modal', 'hide');

            // fix bug: the reminder point will disappear a moment when switch to report tab

            // if (mainRouteName === 'report') {
            //     App.reminder.start();
            // }
        },

        // _addBodyClass: function(name) {
        //     $('body').attr('class', name.main);
        // },

        // _focusNav: function(name) {
        //     Radio.channel('subNav').trigger('render', name.main, name.sub);
        //     Radio.channel('globalBar').trigger('focus', name.main);
        // },

        login: function() {
            
        },

        index: function() {
            if(App.logged){
                this.navigate('index', {
                    trigger: true
                });
                Radio.channel('subNav').trigger('focus', 'index'); 
            }else{
                this.navigate('login', {
                    trigger: true
                });
            }
            
        }
    });

    // store sub routers
    App.subRouters = [
        ManageRouter,
        DevideRouter,
        HomeRouter,
        Disabled,
        DistributeRouter,
        DisinfosRouter,
        DevinfosRouter,
        AuthRouter,
        NoLogged,
        EmpinfosRouter
    ];
    App.addInitializer(function() {
        var rootView = new RootView(),
       		router = new Router();

	    _.each(App.subRouters, function(subRouter) {
	        router.processAppRoutes(subRouter.controller, subRouter.router);
	    });
        
        App.Router = router;
        // App.Layout = rootView;

        App.getRegion('body').show(rootView);
    

	    $('body').on('click', 'a[data-href]', function(e){
	        var url = $(e.currentTarget).attr('data-href');


	        router.navigate(url, {
	            trigger: true
	        });
	        e.preventDefault();
	    });
    });

    return Router;
});