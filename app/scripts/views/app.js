/*global TodoCustomElement, Backbone*/

TodoCustomElement.Views = TodoCustomElement.Views || {};

(function () {
    'use strict';

    TodoCustomElement.Views.App = Backbone.View.extend({

        tagName: 'todo-app',

        events: {
            'keypress input': 'createOnEnter',
        },

        initialize: function () {
            this.listenTo(TodoCustomElement.todos, 'add', this.add);
        },

        add: function(todo){
            var view = new TodoCustomElement.Views.Todo({model: todo});
            this.$el.append(view.render().el);
        },

        createOnEnter: function (e) {
            console.log('keypress');
            this.$input = $(e.target);
            if (e.which === 13 && this.$input.val().trim()) {
                TodoCustomElement.todos.create({todo: this.$input.val(), done: false});
                this.$input.val('');
            }
        },

    });

})();
