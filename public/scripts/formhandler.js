(function(window){
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provdied');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function(fn) {
        this.$formElement.on('submit', function(event) {
            event.preventDefault();
            var newBook = new Book();
            var feed = $('[data-book-add="feed"]');
            $(feed).append(newBook.$element);
        });
    };

    function Book(){
        var comment= document.getElementById('comment-input').value;
        var $div = $('<div></div>', {
            'data-book-add': 'feed',
            'class': 'book-feed'
        });
        var $label = $('<label></label>', {'class' : 'feed-label'});
        $label.append(comment);
        $div.append('comment: ');
        $div.append($label)
        dpd.users.me(function(me) {
            $div.append(' author: ' + me.username);
            postBook(me.username, comment);
        });
        this.$element = $div;
    }

    function postBook(me, comment) {
        dpd.books.post({
            'comment' : comment,
            'author' : me,
            'time' : Date.now()
        }, function(result, err) {
            if (err) return console.log(err);
            console.log(result, result.id);
        });
    }

    App.FormHandler = FormHandler;
    window.App = App;
})(window);