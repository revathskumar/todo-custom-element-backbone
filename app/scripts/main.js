/*global TodoCustomElement, $*/


window.TodoCustomElement = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        window.TodoCustomElement.todos = new TodoCustomElement.Collections.Todos();
        var index = new TodoCustomElement.Views.App({el: $('todo-app')});
        TodoCustomElement.todos.fetch();
    }
};

$(document).ready(function () {
    'use strict';
    TodoCustomElement.init();
});
