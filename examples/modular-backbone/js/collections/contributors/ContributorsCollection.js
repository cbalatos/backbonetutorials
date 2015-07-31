define([
  'underscore',
  'backbone',
  'QUnit',
  'sinon',
  'models/contributor/ContributorModel'
], function(_, Backbone, QUnit, sinon, ContributorModel){

	// a pragma that instructs browser to use ECMA 262-5 strict mode for js syntax
  'use strict';

  var ContributorsCollection = Backbone.Collection.extend({
      
      model: ContributorModel,

      initialize : function(models, options) {},
      
      url : function() {
        return 'https://api.github.com/repos/cbalatos/backbonetutorials/contributors';
      },
    
      parse : function(data) {
    	  alert(JSON.stringify(data.data))
          var uniqueArray = this.removeDuplicates(data.data);

          return uniqueArray;
      },
      
      removeDuplicates: function(myArray) {

          //credit: http://newcodeandroll.blogspot.ca/2012/01/how-to-find-duplicates-in-array-in.html  
          // I was hoping underscore's _uniq would work here but it only seems to work for single values not objects               
          var length = myArray.length;
          var ArrayWithUniqueValues = [];
          var objectCounter = {};
          
          for (var i = 0; i < length; i++) {
          
              var currentMemboerOfArrayKey = JSON.stringify(myArray[i]);
              var currentMemboerOfArrayValue = myArray[i];
            
              if (objectCounter[currentMemboerOfArrayKey] === undefined){
                  ArrayWithUniqueValues.push(currentMemboerOfArrayValue);
                 objectCounter[currentMemboerOfArrayKey] = 1;
              }else{
                 objectCounter[currentMemboerOfArrayKey]++;
              }
          }
      
          return ArrayWithUniqueValues;
      },     
      printMessage: function(message){
    	console.log("message :"+message);
    	return "altered "+message;
      },
      
      test: function(){
      	  var view = this;
      	  
      	  module( "Shinon Tests"   );
      	  
      	  QUnit.test("spying on a function", function (assert) {

      		  
      		  	var message = "how about that";
      		  	var secondMessage = "second message";
      		  	sinon.spy(view, "printMessage");
        	    var returnMessage = view.printMessage(message);
        	    var secondReturnMessage = view.printMessage(secondMessage);
        	    expect (6);
        	    assert.ok( view.printMessage.calledTwice, "the printMessage was called once" );
        	    assert.ok( view.printMessage.calledWith( "how about that"  ));
        	    assert.equal( view.printMessage.getCall(0).args[0], "how about that" );
        	    assert.equal( view.printMessage.getCall(0).returnValue, "altered how about that" );
        	    //Check the second run of printMessage
        	    
        	    assert.equal( view.printMessage.getCall(1).args[0], secondMessage );
        	    assert.equal( view.printMessage.getCall(1).returnValue, "altered "+ secondMessage);

      	  }); 
      	  
      	  QUnit.test('When spying on a function which already exists, the function behaves normally but we get access to data about its calls', function(assert) {
      		  expect (3);
      		  sinon.spy( jQuery, "ajax" );
      		  jQuery.getJSON( "https://api.github.com/repos/cbalatos/backbonetutorials/contributors" );
      		  assert.ok( jQuery.ajax.calledOnce );
      		  assert.equal( jQuery.ajax.getCall(0).args[0].url, "https://api.github.com/repos/cbalatos/backbonetutorials/contributors" );
      		  assert.equal( jQuery.ajax.getCall(0).args[0].dataType, "json" );


          });    	
      	  module( "Shinon Stub Tests" , {
      		  beforeEach: function() {

      		  },
      		  afterEach: function() {
      			  //restore the initial getJSON functionality if it is overriden
      			if (jQuery.getJSON.restore) 
      				jQuery.getJSON.restore();
      		  }
      	  }
      	  );     	  
      	  
      	  QUnit.test("checking stubs", function (assert) {
      		  	// stub the jquery getJSON function
      		    //another great possibility is the fake XMLHttpRequest  
			  	view.ajaxStubReturnValue = [{title:"This is a stub"}];
    		  	view.ajaxStub = sinon.stub(jQuery, "getJSON");
      		  	view.ajaxStub.returns(view.ajaxStubReturnValue);
  		  		expect (1);   		  	

          		  var response = jQuery.getJSON( "https://api.github.com/repos/cbalatos/backbonetutorials/contributors" );
          		  assert.deepEqual( response,  view.ajaxStubReturnValue , " Ajax call must return the stubbed return value" );
          		  
      		  	
 
    	  }); 
      	  
      	  var server, clock;
      	  module( "Shinon Faking the Server Tests" , {
      		  beforeEach: function() {
      			server = sinon.fakeServer.create();
      			
      			//fake timer 
      			clock = sinon.useFakeTimers();
      		  },
      		  afterEach: function() {
      			server.restore();
      			clock.restore()
      		  }
      	  }
      	  );        	  
      	  
      	  QUnit.test("faking the server", function (assert) {
      		  
  		  	expect (0);
  		  	var response = jQuery.getJSON( "https://api.github.com/repos/cbalatos/backbonetutorials/contributors" );
  		    // This is part of the FakeXMLHttpRequest API
  		  	//Be carefull the respond is defined after the ajax call
  		    server.requests[0].respond(
  		        200,
  		        { "Content-Type": "application/json" },
  		        JSON.stringify([{ id: 1, text: "Provide examples", done: true }])
  		    );   		    
  		    
  		    clock.tick(1000000); // Tick the clock ahead ms milliseconds
  		    var response2 = jQuery.getJSON( "https://api.github.com/repos/cbalatos/backbonetutorials/coddd" );
  		    server.requests[1].respond(
  	  		        200,
  	  		        { "Content-Type": "application/json" },
  	  		        JSON.stringify([{ id: 1, text: "The second  examples", done: true }])
  	  		    ); 

  		    
      	  }); 
        }
  
  });

  
  return ContributorsCollection;

});