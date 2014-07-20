/*global todoCustomElement, Backbone, JST*/

TodoCustomElement.Views = TodoCustomElement.Views || {};

(function () {
    'use strict';

    TodoCustomElement.Views.Todo = Backbone.View.extend({

        tagName: 'todo-item',

        id: '',

        className: '',

        events: {
            'click .delete': 'delete',
            'itemchange todo-item': 'done'
        },

        delete: function() {
            console.log('delete');
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this, 'itemchange', this.done);
        },

        done: function () {
            console.log('done from view');
        },

        render: function () {
            this.$el.html(this.model.get('todo'));
            this.$el.prop('done', this.model.get('done'));
            return this;
        }

    });

})();
