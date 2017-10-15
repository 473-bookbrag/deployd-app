/*global dpd moment */
(function(window) {
    var App = window.App || {};
    var $ = window.jQuery;

    function BookLoader(){

    }

    BookLoader.prototype.loadBooks = function(selector) {
        this.imageresult = {};

        dpd.imageupload.get(function(result, err) {
            console.log(result);
            this.imageresult = result;
        }.bind(this));

        dpd.books.get(function(result, err) {
            if (err) return console.log(err);
            console.log(result);
            result.forEach(function(i, index) {
                var bookshelf = i.bookshelf;
                var title = i.title;
                var author = i.author;
                var description = i.description;
                var date = i.date;

                var $div = $('<div></div>', {
                    'class': 'book-add-div'
                });

                var $img = $('<img src="upload/' + this.imageresult[index].filename + '"></img>', {
                    'class' : 'feed-img'
                });
                $img.append(this.imageresult[index]);

                var $bookshelf = $('<label></label>', {
                    'class': 'feed-bookshelf'
                });
                $bookshelf.append('Bookshelf: ' + bookshelf + ',');

                var $title = $('<label></label>', {
                    'class': 'feed-title'
                });
                $title.append('Title: ' + title + ',');

                var $author = $('<label></label>', {
                    'class': 'feed-author'
                });
                $author.append('Author: ' + author + ',');

                var $description = $('<label></label>', {
                    'class' : 'feed-description'
                });
                $description.append('Brag: ' + description + ',');

                var $date = $('<label></label>', {
                    'class': 'feed-date'
                });
                $date.append('Date: ' + date);

                $div.append($img[0]);
                $div.append($bookshelf);
                $div.append($title);
                $div.append($author);
                $div.append($description);
                $div.append($date);

                var feed = $(selector);
                feed.append($div);
            }.bind(this));
        }.bind(this));
    };
    App.BookLoader = BookLoader;
    window.App = App;
})(window);
