/*global todoCustomElement, Backbone*/

TodoCustomElement.Collections = TodoCustomElement.Collections || {};

(function () {
    'use strict';

    TodoCustomElement.Collections.Todos = Backbone.Collection.extend({

        model: TodoCustomElement.Models.Todo,
        localStorage: new Store('todos-backbone'),

    });

})();
