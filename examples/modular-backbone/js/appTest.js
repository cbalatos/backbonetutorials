// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'QUnit',
  'router', // Request router.js
], function($, _, Backbone, QUnit, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function

    Router.test();

    QUnit.load();
    QUnit.start();
    
  };

  return { 
    initialize: initialize
  };
});
