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

    validate: function(attrs) {
        if (attrs.hasOwnProperty('done') && !_.isBoolean(attrs.done)) {
            return 'ContributorModel.done must be a boolean value.';
        }
    },

  });

  return ContributorModel;

});
