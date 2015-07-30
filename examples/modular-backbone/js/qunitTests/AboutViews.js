define([
   'jquery',        
  'underscore',
  'backbone',
  'QUnit',
  'sinon',  
  'models/contributor/ContributorModel',
  'views/contributors/contributor/ContributorView'
], function($, _, Backbone, QUnit, sinon, ContributorModel, ContributorView) {

	// a pragma that instructs browser to use ECMA 262-5 strict mode for js syntax
	'use strict'; 
	var contributorViewTest = function(){	 
		var contributorView;

		module('About Backbone.View ContributorView', {
      		  beforeEach: function() {
      			this.contributor = new ContributorModel({ "login": "thomasdavis",
      			      "id": 416209,
      			      "avatar_url": "https://avatars.githubusercontent.com/u/416209?v=3",
      			      "gravatar_id": "",
      			      "url": "https://api.github.com/users/thomasdavis",
      			      "html_url": "https://github.com/thomasdavis",
      			      "followers_url": "https://api.github.com/users/thomasdavis/followers",
      			      "following_url": "https://api.github.com/users/thomasdavis/following{/other_user}",
      			      "gists_url": "https://api.github.com/users/thomasdavis/gists{/gist_id}",
      			      "starred_url": "https://api.github.com/users/thomasdavis/starred{/owner}{/repo}",
      			      "subscriptions_url": "https://api.github.com/users/thomasdavis/subscriptions",
      			      "organizations_url": "https://api.github.com/users/thomasdavis/orgs",
      			      "repos_url": "https://api.github.com/users/thomasdavis/repos",
      			      "events_url": "https://api.github.com/users/thomasdavis/events{/privacy}",
      			      "received_events_url": "https://api.github.com/users/thomasdavis/received_events",
      			      "type": "User",
      			      "site_admin": false,
      			      "contributions": 346 });
      			contributorView = new ContributorView({model: this.contributor});
      			  
      		  },
      		  afterEach: function() {
      			contributorView.remove();
      		  }
      	  });

		QUnit.test('Should be tied to a DOM element when created, based off the property provided.', function(assert) {
		    expect(1);
		    assert.equal( contributorView.el.tagName.toLowerCase(), "li" );


		});
		QUnit.test("Is backed by a model instance, which provides the data.", function(assert) {
		    expect( 3 );
		    assert.notEqual( contributorView.model, undefined );
		    assert.equal( contributorView.model.get("login"), "thomasdavis" );
		    assert.equal( contributorView.model.get("id"), 416209 );
		});		
			
	};
	
	return { 
		contributorViewTest: contributorViewTest
	};
	
	
});