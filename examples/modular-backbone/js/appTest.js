// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'QUnit',
  'router', // Request router.js
  'views/home/HomeView'
], function($, _, Backbone, QUnit, Router, HomeView){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function

    Router.test();

    var homeView = new HomeView();
    homeView.render();
    homeView.test();
    
    QUnit.load();
    QUnit.start();
    
  };

  return { 
    initialize: initialize
  };
});
