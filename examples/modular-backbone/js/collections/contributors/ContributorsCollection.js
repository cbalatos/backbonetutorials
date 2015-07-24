define([
  'underscore',
  'backbone',
  'QUnit',
  'sinon',
  'models/contributor/ContributorModel'
], function(_, Backbone, QUnit, sinon, ContributorModel){

  var ContributorsCollection = Backbone.Collection.extend({
      
      model: ContributorModel,

      initialize : function(models, options) {},
      
      url : function() {
        return 'https://api.github.com/repos/cbalatos/backbonetutorials/contributors';
      },
    
      parse : function(data) {
          var uniqueArray = this.removeDuplicates(data.data);

          return uniqueArray;
      },
      
      removeDuplicates: function(myArray) {

          //credit: http://newcodeandroll.blogspot.ca/2012/01/how-to-find-duplicates-in-array-in.html  
          // I was hoping underscore's _uniq would work here but it only seems to work for single values not objects               
          var length = myArray.length;
          var ArrayWithUniqueValues = [];
          
          var objectCounter = {};
          
          for (i = 0; i < length; i++) {
          
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
      
      test: function(){
      	  var that = this;
      	  module( "Contact Backbone Contibutors Sinon Tests");
      	  
      	  expect(1);

      	  QUnit.test("should call all subscribers for a message exactly once", function (assert) {
          	    var message = getUniqueString();
          	    var spy = this.spy();
          	    PubSub.subscribe( message, spy );
          	    PubSub.publishSync( message, "Hello World" );
          	    assert.ok( spy1.calledOnce, "the subscriber was called once" );
          }); 
                       
        }
  
  });

  
  return ContributorsCollection;

});