/*global TodoCustomElement, Backbone*/

TodoCustomElement.Views = TodoCustomElement.Views || {};

(function () {
    'use strict';

    TodoCustomElement.Views.App = Backbone.View.extend({

        tagName: 'todo-app',

        id: '',

        className: '',

        events: {
            'keypress input': 'createOnEnter',
            'itemchange todo-item': 'done'
        },

        initialize: function () {
            this.listenTo(TodoCustomElement.todos, 'add', this.add);
        },

        add: function(todo){
            var view = new TodoCustomElement.Views.Todo({model: todo});
            this.$el.append(view.render().el);
        },

        done: function (e){
            console.log(e.currentTarget)
            if ($(e.target).attr('done') !== undefined) {
                $(e.target).removeAttr('done');
            }
            else{
                $(e.target).attr('done', '');
            }
        },

        createOnEnter: function (e) {
            console.log('keypress');
            this.$input = $(e.target);
            if (e.which === 13 && this.$input.val().trim()) {
                TodoCustomElement.todos.create({todo: this.$input.val()});
                this.$input.val('');
            }
        },

    });

})();
