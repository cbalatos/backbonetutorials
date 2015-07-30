// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'QUnit',
  'router', // Request router.js
  'views/home/HomeView',
  'views/contributors/ContributorsView',
  'collections/contributors/ContributorsCollection',
  'qunitTests/AboutModels',
  'qunitTests/AboutViews'
], function($, _, Backbone, QUnit, Router, HomeView, ContributorsView, ContributorsCollection, AboutModels, AboutViews){
  var initialize = function(){
	  
	//Initial Qunit and sinon tests  
    // Pass in our Router module and call it's initialize function

    Router.test();

    var homeView = new HomeView();
    homeView.render();
    homeView.test();
    
    var contributorsView = new ContributorsView()
    contributorsView.test()
    
    var contributorsCollection  = new ContributorsCollection();
    contributorsCollection.test();
    
    
    /* The correct Qunit Test Pattern for Backbone Starts Here */
    
    AboutModels.contributorModelTest();
    AboutViews.contributorViewTest();
    
    QUnit.load();
    QUnit.start();
    
  };

  return { 
    initialize: initialize
  };
});
