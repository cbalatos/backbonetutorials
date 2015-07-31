    /* According to http://addyosmani.com/blog/unit-testing-backbone-js-apps-with-qunit-and-sinonjs/
     * For our models we want to at minimum test that:
     * 	   New instances can be created with the expected default values
     *     Attributes can be set and retrieved correctly
     *     Changes to state correctly fire off custom events where needed
     *     Validation rules are correctly enforced
     * For Collections
     *     New model instances can be added as both objects and arrays
     *     Changes to models result in any necessary custom events being fired
     *     A url property for defining the URL structure for models is correctly defined
     * For our views we want to ensure:
     *     They are being correctly tied to a DOM element when created
     *     They can render, after which the DOM representation of the view should be visible
     *     They support wiring up view methods to DOM elements    
     *     One could also take this further and test that user interactions with the view correctly result in 
     *     any models that need to be changed being updated correctly.
     *     
     * For events we may want to test different use casesd:
     *     Extending plain objects to support custom events
     *     Binding and triggering custom events on objects
     *     Passing along arguments to callbacks when events are triggered
     *     Binding a passed context to an event callback
     *     Removing custom events
     */

define([
   'jquery',        
  'underscore',
  'backbone',
  'QUnit',
  'sinon',  
  'models/contributor/ContributorModel'
], function($, _, Backbone, QUnit, sinon, ContributorModel) {

	// a pragma that instructs browser to use ECMA 262-5 strict mode for js syntax
	'use strict'; 
	var test = function(){	 

		QUnit.module('', {
      		  beforeEach: function() {

      		  },
      		  afterEach: function() {

      		  }
      	  });

		QUnit.test('', function(assert) {
		    expect(0);


		});
			
	};
	
	return { 
		test: test
	};
	
	
});