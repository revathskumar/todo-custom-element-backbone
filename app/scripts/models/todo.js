/*global todoCustomElement, Backbone*/

TodoCustomElement.Models = TodoCustomElement.Models || {};

(function () {
    'use strict';

    TodoCustomElement.Models.Todo = Backbone.Model.extend({

        localStorage: new Store('todos-backbone'),

        defaults: {
            todo: '',
            done: false
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options) {
            return response;
        }
    });

})();
