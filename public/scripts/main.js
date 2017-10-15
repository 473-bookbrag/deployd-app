var POST_SELECTOR = '[data-book-add="form"]';
var FEED_SELECTOR = '[data-book-add="feed"]';
var App = window.App;
var UploadHandler = App.UploadHandler;
var bookUploader = new UploadHandler('#book-upload', '#book-image-upload', 'http://localhost:2403/books');
bookUploader.addUploadHandler(function(fn){});
var BookLoader = App.BookLoader;
var bookL = new BookLoader();
bookL.loadBooks(FEED_SELECTOR);
