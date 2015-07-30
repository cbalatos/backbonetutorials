    /* According to http://addyosmani.com/blog/unit-testing-backbone-js-apps-with-qunit-and-sinonjs/
     * For our models we want to at minimum test that:
     * 	   New instances can be created with the expected default values
     *     Attributes can be set and retrieved correctly
     *     Changes to state correctly fire off custom events where needed
     *     Validation rules are correctly enforced
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