'use strict';
import Backbone from 'backbone';
import Marionette from 'marionette';

var App = new Marionette.Application();

/* Add application regions here */
App.addRegions({
	body: '#main'
});

App.on('start', function(){
    Backbone.history.start({
        pushState: false,
        root: require.toUrl('').replace('scripts/', '')
    });
});

export default App;
