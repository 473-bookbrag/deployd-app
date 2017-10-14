(function(window){
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provded');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function(ImageId) {
        this.$formElement.on('submit', function(event) {
            event.preventDefault();
            var file = this.$formElement.find(ImageId)[0].files[0];
            if(file){
                var imageData = new FormData();
                imageData.append('uploadedFile', file);
                $.post({
                    url: 'http://localhost:2403/imageupload',
                    processData: false,
                    contentType: false,
                    data: imageData,
                    success: (function(val){
                        console.log(val);
                    })
                });
            }
            var newBook = new Book();
            var feed = $('[data-book-add="feed"]');
            $(feed).append(newBook.$element);
            this.reset;
        }.bind(this));
    };

    function Book(){
        var comment = document.getElementById('comment-input').value;
        var image = document.querySelector('#book-image-upload').files[0];
        var $div = $('<div></div>', {
            'class': 'book-add'
        });
        var $image = $('<img></img>, {class: image-tag}');
        var $label = $('<label></label>', {'class' : 'feed-label'});
        $image.append(image);
        $label.append(comment);
        $div.append($image);
        $div.append('Brag: ');
        $div.append($label);
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
