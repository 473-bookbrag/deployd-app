(function(window){
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function UploadHandler(selector) {

    console.log("selected");
    if (!selector) {
      throw new Error('No selector provdied');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  function sendFile(file) {
    var formData = new FormData();
    formData.append('uploadedFile', file);
    $.post({
      url: "http://localhost:2403/imageupload",
      contentType: false,
      processData: false,
      data: formData,
    });
  }

  UploadHandler.prototype.addUploadHandler = function(fn) {
    console.log('Setting upload handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();

      console.log("does it get here");



      var file = document.querySelector('#image-input').files[0];

      sendFile(file);


    });
  };

  App.UploadHandler = UploadHandler;
  window.App = App;

})(window);
