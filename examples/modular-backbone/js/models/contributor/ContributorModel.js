define([
  'underscore',
  'backbone',
  'QUnit',
  'sinon',  
], function(_, Backbone, QUnit, sinon) {

  var ContributorModel = Backbone.Model.extend({

  	defaults : {
  		medalHex : '#A67D3D',
  		picWidth : '100px',
  		githubPath : 'concat github and login'
  	},
    initialize: function() {
	      
       // this.on('change', this.updateDerivedAttributes, this);
    },
    test: function(){
    	
    }

  });

  return ContributorModel;

});
