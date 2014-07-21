/*global todoCustomElement, Backbone, JST*/

TodoCustomElement.Views = TodoCustomElement.Views || {};

(function () {
    'use strict';

    TodoCustomElement.Views.Todo = Backbone.View.extend({

        tagName: 'todo-item',

        delete: function() {
            this.model.destroy();
        },

        initialize: function (){
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'change', this.render);
            this.el.addEventListener('itemchange', this.itemchange.bind(this));
            this.el.addEventListener('remove', this.delete.bind(this));
        },

        itemchange: function (e) {
            this.model.set('done', e.detail.done);
            this.model.save();
        },

        render: function () {
            this.$el.html(this.model.get('todo'));
            if(this.model.get('done')){
                this.$el.attr('done', '');
            }
            return this;
        }

    });

})();
