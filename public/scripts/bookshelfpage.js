var App = window.App;
var UploadHandler = App.UploadHandler;
var uploadHandler = new UploadHandler("#bookshelf-upload", "#bookshelf-image-upload", "http://localhost:2403/bookshelves");
uploadHandler.addUploadHandler(function(fn){});
