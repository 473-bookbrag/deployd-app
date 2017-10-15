var BOOKFEED_SELECTOR = '#book-feed';
var BOOKSHELFFEED_SELECTOR = '#bookshelf-feed';
var App = window.App;
var BookLoader = App.BookLoader;
var BookshelfLoader = App.BookshelfLoader;
var bookL = new BookLoader();
var bookshelfL = new BookshelfLoader();
bookL.loadBooks(BOOKFEED_SELECTOR);
bookshelfL.loadBookshelves(BOOKSHELFFEED_SELECTOR);
