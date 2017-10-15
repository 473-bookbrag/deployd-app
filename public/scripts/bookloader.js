/*global dpd moment */
(function(window) {
  var App = window.App || {};
  var $ = window.jQuery;

  function BookLoader() {

  }

  BookLoader.prototype.loadBooks = function(selector) {

    dpd.books.get(function(result, err) {
      if (err) return console.log(err);
      console.log(result);
      result.reverse().forEach(function(i) {
        var owner = i.owner;
        var bookshelf = i.bookshelf;
        var title = i.title;
        var author = i.author;
        var description = i.description;
        var date = i.date;

        var $div = $('<div></div>', {
          'class': 'book-add-div'
        });

        var $img;
        if (i.imagename) {
          $img = $('<img src="upload/' + i.imagename + '"></img>', {});
        } else {
          $img = $('<img src="upload/default-book.png"></img>', {});
        }

        $img.addClass('feed-img');

        var $owner = $('<label></label>', {
          'class': 'feed-owner'
        });
        $owner.append('Owner: ' + owner + ',');

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
          'class': 'feed-description'
        });
        $description.append('Brag: ' + description + ',');

        var $date = $('<label></label>', {
          'class': 'feed-date'
        });
        $date.append('Date: ' + date);

        $div.append($img);
        $div.append($owner);
        $div.append('<br>');
        $div.append($bookshelf);
        $div.append('<br>');
        $div.append($title);
        $div.append('<br>');
        $div.append($author);
        $div.append('<br>');
        $div.append($description);
        $div.append('<br>');
        $div.append($date);

        var feed = $(selector);
        feed.append($div);
        feed.append('<br>');

      }.bind(this));
    }.bind(this));
  };
  App.BookLoader = BookLoader;
  window.App = App;
})(window);
