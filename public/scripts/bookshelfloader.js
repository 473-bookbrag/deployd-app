(function(window) {
    var App = window.App || {};
    var $ = window.jQuery;

    function BookshelfLoader(){

    }

    BookshelfLoader.prototype.loadBookshelves = function(selector) {

        dpd.bookshelves.get(function(result, err) {
            if (err) return console.log(err);
            console.log(result);
            result.reverse().forEach(function(i) {
                var owner = i.owner;
                var name = i.name;
                var imagename = i.imagename;
                var description = i.description;
                var date = i.date;

                var $div = $('<div></div>', {
                    'class': 'book-add-div'
                });

                var $img;
                if (i.imagename) {
                  $img = $('<img src="upload/' + i.imagename + '"></img>', {});
                } else {
                  $img = $('<img src="defaultimages/default-bookshelf.png"></img>', {});
                }

                $img.addClass('feed-img');

                var $owner = $('<label></label>', {
                    'class': 'feed-owner'
                });
                $owner.append('Owner: ' + owner + ',');

                var $name = $('<label></label>', {
                    'class': 'feed-name'
                });
                $name.append('Name: ' + name + ',');

                var $description = $('<label></label>', {
                    'class' : 'feed-description'
                });
                $description.append('Brag: ' + description + ',');

                var $date = $('<label></label>', {
                    'class': 'feed-date'
                });
                $date.append('Date: ' + date);

                $div.append($img);
                $div.append($owner);
                $div.append($name);
                $div.append($description);
                $div.append($date);

                var feed = $(selector);
                feed.append($div);
            }.bind(this));
        }.bind(this));
    };
    App.BookshelfLoader = BookshelfLoader;
    window.App = App;
})(window);
