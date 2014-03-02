define([
  'jquery',
  'underscore',
  'backbone'
  ,'indexView'
  ], function($, _, Backbone, IndexView) {
  "use strict";

  // External dependencies.
  // var Backbone = require("backbone");

  // // Defining the application router.
  // module.exports = Backbone.Router.extend({
  //   routes: {
  //     "": "index"
  //   },

  //   index: function() {
  //     console.log("Welcome to your / route.");
  //   }
  // });
  console.log('router');
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      console.log('this is router');
      // indexView.render();
    }

  });
  var AppRouter = new Router();
  return AppRouter;

});
