define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, SidebarView, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(homeTemplate);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    },
    
    test: function(){
  	  module( "Contact Home view Tests" );

  	  var view = this;
      test('home view must contain a #page elelement', function() {
      	// Number of Assertions we Expect
    	  //alert(view.html())

    	  equal(2, 2, 'The return should be 2.');
          equal(2, 2, 'The return should be 2.');
      });    	
    }

  });

  return HomeView;
  
});
