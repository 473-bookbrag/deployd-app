
var App = window.App;
var UploadHandler = App.UploadHandler;
var uploadHandler = new UploadHandler("#book-upload", "#book-image-upload", "http://localhost:2403/books");
uploadHandler.addUploadHandler(function(fn){});
