// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'QUnit',
  'router', // Request router.js
  'views/home/HomeView',
  'views/contributors/ContributorsView',
  'collections/contributors/ContributorsCollection'
], function($, _, Backbone, QUnit, Router, HomeView, ContributorsView, ContributorsCollection){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function

    Router.test();

    var homeView = new HomeView();
    homeView.render();
    homeView.test();
    
    var contributorsView = new ContributorsView()
    contributorsView.test()
    
    QUnit.load();
    QUnit.start();
    
  };

  return { 
    initialize: initialize
  };
});
