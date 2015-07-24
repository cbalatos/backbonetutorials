define([
  'jquery',
  'underscore',
  'backbone',
  'QUnit',
  'sinon',
  'collections/contributors/ContributorsCollection',
  'views/contributors/ContributorsListView',
  'text!templates/contributors/contributorsTemplate.html'
], function($, _, Backbone, QUnit, sinon, ContributorsCollection, ContributorsListView, contributorsTemplate){

  //var contributorsListView;

  var ContributorsView = Backbone.View.extend({
    
    el: $("#page"),

    initialize:function() {

      var that = this;

      var onDataHandler = function(collection) {
          that.render();
      }

      that.collection = new ContributorsCollection([]); 
      that.collection.fetch({ success : onDataHandler, dataType: "jsonp" });

    },

    render: function(){

      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');

      var total_contributions = this.getTotalContributions(this.collection.models);
      var total_contributors = this.collection.models.length;  
    
      var data = { total_contributions : total_contributions, 
                  total_contributors : total_contributors}; 

      // main view  
      var compiledTemplate = _.template( contributorsTemplate, data );
      this.$el.html( compiledTemplate ); 

      // sub view 
      var contributorsListView = new ContributorsListView({ collection: this.collection}); 
      contributorsListView.render();

    },

    getTotalContributions:function( aModels ){

      var total = 0;
      
      _.each(aModels, function(contributorModel) { 
         var contributorContributions = Number ( contributorModel.get("contributions") );
         total += contributorContributions; 
      });

      return total; 
    },

    clearListView: function() {
      console.log("clearing sub view");
      contributorsListView.clearListView();
    },
    
    test: function(){
  	  var that = this;
      var contributors = new ContributorsCollection([]);
  	  module( "Contact Backbone Contibutors Tests");
  	  
  	  QUnit.test('Backbone Contibutors Fetch Async', function(assert) {
          	// Number of Assertions we Expect
              expect( 1 );
              
              var done = assert.async();
              contributors.fetch({ success : that.onDataHandler, dataType: "jsonp" });
              setTimeout(function() {
              	
            	assert.ok( (contributors.length), "Contributors Loaded" );
            	assert.equal(contributors.length,30, "Contributors Loaded" );
                done();
              });
              
            });
                      
    }



  });
  return ContributorsView;
});
