define([
   'jquery',        
  'underscore',
  'backbone',
  'QUnit',
  'sinon',  
  'models/contributor/ContributorModel',
  'collections/contributors/ContributorsCollection'
], function($, _, Backbone, QUnit, sinon, ContributorModel, ContributorsCollection) {

	// a pragma that instructs browser to use ECMA 262-5 strict mode for js syntax
	'use strict'; 
	var contributorsCollectionTest = function(){	 

		var cons, server;
		QUnit.module('About Contributors Collection', {
      		  beforeEach: function() {
      			 cons = new ContributorsCollection();
       			 server = sinon.fakeServer.create();
      		  },
      		  afterEach: function() {
      			cons = null;
      			server.restore();
      		  }
      	  });

		QUnit.test('Can add Model instances as objects and arrays.', function(assert) {
		    expect( 3 );
		    assert.equal( cons.length, 0 );
		    cons.add( { text: "Clean the kitchen" } );
		    assert.equal( cons.length, 1 );
		    cons.add([
		        { text: "Do the laundry", done: true },
		        { text: "Go to the gym" }
		    ]);
		    assert.equal( cons.length, 3 );


		});
		QUnit.test('Can have a url property to define the basic url structure.', function(assert) {
			 expect( 2 );
			 assert.ok(cons.url )
			 assert.equal(cons.url(), "https://api.github.com/repos/cbalatos/backbonetutorials/contributors" )
		});
		QUnit.test('Have a model property to define the items data type', function(assert) {
			 expect( 2 );
			 assert.ok(cons.model );
			 //Create a new object based on collections model attribute
			 var model = new cons.model();
			 //Check new objects datatype
			 assert.ok((model instanceof ContributorModel) )
		});		
		QUnit.test('Fires custom named events when the models change.', function(assert) {
		    expect(2);
		    var addModelCallback = sinon.spy();
		    var removeModelCallback = sinon.spy();
		    cons.bind( "add", addModelCallback );
		    cons.bind( "remove", removeModelCallback );
		    // How would you get the "add" event to trigger?
		    cons.add( {text:"New todo"} );
		    assert.ok( addModelCallback.called );
		    // How would you get the "remove" callback to trigger?
		    cons.remove( cons.last() );
		    assert.ok( removeModelCallback.called );
		});		
		QUnit.test('Test custom model functions', function(assert) {
			expect(2);
  			var contributor = new ContributorModel({ "login": "cbalatos",
			      "id": 416305,
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
  			
  			var contributor1 = new ContributorModel({ "login": "thomasdavis",
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
  			var contributor2 = new ContributorModel({ "login": "thomasdavis",
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
  			cons.add(contributor);
  			cons.add(contributor1);
  			
  			assert.equal(cons.length, 2);
  			//addind an identical object should not affect the arrays length
  			cons.add(contributor2);
  			
  			assert.equal(cons.length, 2); 			
  			
		});
		   	  
  	  
  	  QUnit.test("About Contributors Collection Checking the server integration", function (assert) {
  		  
		  	expect (1);

		  	//var response = jQuery.getJSON( "https://api.github.com/repos/cbalatos/backbonetutorials/contributors" );
		    // This is part of the FakeXMLHttpRequest API
		  	//Be carefull the respond is defined after the ajax call

		    server.respondWith(
		        [200,
		        { "Content-Type": "application/json" },
		        JSON.stringify({"data": [
		            { "login": "cbalatos",
				      "id": 416305,
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
				      "contributions": 346 }
		            ]}) 
		            ]
		    );   	
		  	cons.fetch();
		  	alert(server.requests.length)
		    alert(cons.length)
		    

		    
  	  }); 
		
	};
	
	return { 
		contributorsCollectionTest: contributorsCollectionTest
	};
});