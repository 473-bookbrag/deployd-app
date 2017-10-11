var POST_SELECTOR = '[data-book-add="form"]';
var App = window.App;
var FormHandler = App.FormHandler;
var formH = new FormHandler(POST_SELECTOR);
formH.addSubmitHandler(function(data) {
    console.log(data);
});

var $ = window.jQuery
dpd.books.get(function(result, err) {
    if (err) return console.log(err);
    result.forEach(function(i) {
        var comment = i.comment;
        var $div = $('<div></div>', {
            'data-book-add': 'feed',
            'class': 'book-feed'
        });
        var $comment = $('<label></label>', {
            'class': 'feed-comment'
        });
        $comment.append('comment: ' + comment + ', ');

        var $author = $('<label></label>', {
            'class': 'feed-author'
        });

        dpd.users.me(function(me) {
            $author.append(' author: ' + me.username);
        });

        $div.append($comment)
        $div.append($author);
        var bookfeed = $('[data-book-add="feed"]');
        bookfeed.append($div);
    });
});
