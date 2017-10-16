
var App = window.App;
var UploadHandler = App.UploadHandler;
var uploadHandler = new UploadHandler('#book-upload', '#book-image-upload', 'http://localhost:2403/books');
uploadHandler.addUploadHandler(function(fn){});

var $dropdown = $('#book-dropdown');

dpd.users.me(function(user) {
    if(user) {
        dpd.bookshelves.get({owner: user.id}, function(results, error){
            results.forEach(function(i){
                console.log(i.id);
                console.log(i.name);
                var $bookshelfOption = $('<option></option>');
                $bookshelfOption.attr('value', i.id);
                $bookshelfOption.append(i.name);
                $dropdown.append($bookshelfOption);
            }).bind(this);
        });
    }
});
