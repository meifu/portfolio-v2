define([
  'jquery'
  ,'underscore'
  ,'backbone'
  ,'indexView'
  ,'worksView'
  ], function($, _, Backbone, IndexView, WorksView) {
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
  var Router = Backbone.Router.extend({
    routes: {
      ""      : "index",
      "works" : "works"
    },

    index: function() {
      var indexObj = new IndexView();
    },

    works: function() {
      // console.log('this is works');
      var worksObj = new WorksView();
    }

  });
  var AppRouter = new Router();
  return AppRouter;
  
});
