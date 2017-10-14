var POST_SELECTOR = '[data-book-add="form"]';
var FEED_SELECTOR = '[data-book-add="feed"]';
var App = window.App;
var FormHandler = App.FormHandler;
var formH = new FormHandler(POST_SELECTOR);
formH.addSubmitHandler('#book-image-upload');
var BookLoader = App.BookLoader;
var bookL = new BookLoader();
bookL.loadBooks(FEED_SELECTOR);
