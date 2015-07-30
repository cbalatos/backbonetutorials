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
	var contributorModelTest = function(){	 

		QUnit.module('About Backbone.Model', {
      		  beforeEach: function() {

      		  },
      		  afterEach: function() {

      		  }
      	  });

		QUnit.test('A Contributor Can be created with default values for its attributes.', function(assert) {
		    expect(3);
		    var contributor = new ContributorModel();
		    assert.equal(contributor.get('medalHex'), "#A67D3D");
		    assert.equal(contributor.get('picWidth'), "100px");
		    assert.equal(contributor.get('githubPath'), "concat github and login");

		});
		QUnit.test("Will call a custom initialize function on the model instance when created.", function(assert) {
		    expect( 2 );
		    var contributor = new ContributorModel({ login: "cbalatos", url: "https://www" });
		    equal( contributor.get("login"), "cbalatos" );
		    equal( contributor.get("url"), "https://www" );
		});
		QUnit.test("Fires a custom event when the state changes.", function(assert) {
		    expect( 1 );
		    var spy = sinon.spy();
		    var contributor = new ContributorModel();
		    contributor.bind( "change", spy );

		    contributor.set( { login: "cbalatos" } );
		    assert.ok( spy.calledOnce, "A change event callback was correctly triggered" );
		});		
		QUnit.test("Can contain custom validation rules, and will trigger an error event on failed validation.", function(assert) {
		    expect( 4 );
		    var errorCallback = sinon.spy();
		    var contributor = new ContributorModel();
		    contributor.bind("error", errorCallback);
		    // What would you need to set on the todo properties to cause validation to fail?
		    contributor.set( { done: "not a boolean" } );
		    assert.ok( errorCallback.calledOnce, "A failed validation correctly triggered an error" );
		    assert.notEqual( errorCallback.getCall(0), undefined );
		    assert.equal( errorCallback.getCall(0).args[1], "ContributorModel.done must be a boolean value." );
		    
		    //This time validation will not fail
		    contributor.set( { done: true } );
		    assert.ok( !errorCallback.calledTwice, "A failed validation triggered by error " );    
		});
			
	};
	
	return { 
		contributorModelTest: contributorModelTest
	};
	
	
});