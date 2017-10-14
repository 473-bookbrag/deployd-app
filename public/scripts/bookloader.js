/*global dpd moment */
(function(window) {
    var App = window.App || {};
    var $ = window.jQuery;

    function BookLoader(){

    }

    BookLoader.prototype.loadBooks = function(selector) {
        dpd.books.get(function(result, err) {
            if (err) return console.log(err);
            console.log(result);
            result.forEach(function(i) {
                var comment = i.comment;
                var author = i.author;
                var msint = Number(i.time);
                //var modTime = new Date(msint).toUTCString().split(' ');
                //var time = modTime[2] + ' ' + modTime[1] + ' ' + modTime[4] + ' ' + modTime[3];
                var time = moment(msint).fromNow();
                var $div = $('<div></div>', {
                    'class': 'book-add'
                });
                var $comment = $('<label></label>', {
                    'class': 'feed-comment'
                });
                $comment.append('Brag: ' + comment + ',');

                var $author = $('<label></label>', {
                    'class': 'feed-author'
                });
                $author.append('User: ' + author + ',');

                var $time = $('<label></label>', {
                    'class': 'feed-time'
                });
                $time.append(time);

                $div.append($comment);
                $div.append($author);
                $div.append($time);
                var feed = $(selector);
                feed.append($div);
            });
        });
    };
    App.BookLoader = BookLoader;
    window.App = App;
})(window);
