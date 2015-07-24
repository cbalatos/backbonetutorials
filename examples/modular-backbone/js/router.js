// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'QUnit',
  'views/home/HomeView',
  'views/projects/ProjectsView',
  'views/contributors/ContributorsView',
  'views/footer/FooterView'
], function($, _, Backbone, QUnit, HomeView, ProjectsView, ContributorsView, FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'users': 'showContributors',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showProjects', function(){
   
        // Call render on the module we loaded in via the dependency array
        var projectsView = new ProjectsView();
        projectsView.render();

    });

    app_router.on('route:showContributors', function () {
    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
        var contributorsView = new ContributorsView();
    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var footerView = new FooterView();

    Backbone.history.start();
  };
  
  //The Qunit Testing Function
  
  var firstTest =function(){
	  var myString;
	  module( "Contact Backbone Model Tests" ,{
		    setup: function() {
		        // run before
		    	myString = "compare";
		    }, 
		    teardown: function() {
		        // run after
		    	myString = "";
		    }
	  });


	  var myRouterObject = this;
      test('dummyLib should return the sum of the two supplied numbers.', function() {
      	// Number of Assertions we Expect
          expect( 8 );
          
    	  equal(2, "2", 'The return should be ignoring type 2.');
    	  notEqual (32, 2, 'The return should not be 2.');
      
          strictEqual(2, 2, 'The return should be  numeric 2.');
          deepEqual(myString, "compare", 'The return should be 2.'); // ===, works on objects, arrays and primitives
      	 
          
    	  ok ( true, "A true arguemnt" ); // passes if the first argument is truthy
    	  
    	  ok (myRouterObject.initialize, "Initialize var function exists");
    	  ok (!myRouterObject.nothing, "nothing function ");
    	  
    	  throws(function() {
    		    throw new Error( "Oh no! It's an error!" );
    		  }, "passes - an error was thrown inside our callback");
    	  
      });	  
  }
  return { 
    initialize: initialize,
    test: firstTest
  };
});
