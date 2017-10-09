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

  function sendBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
     var data = {};
     data['imageString'] = reader.result;
     $.post("http://localhost:2403/images", data, function(serverResponse){
       data['id'] = serverResponse['id'];
       var image = new Image();
       $.get("http://localhost:2403/images/" + data['id'], function(serverResponse){
         image.src = serverResponse['imageString'];
         document.body.appendChild(image);
       });
     });




   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}


  UploadHandler.prototype.addUploadHandler = function(fn) {
    console.log('Setting upload handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();

      console.log("does it get here");



      var file = document.querySelector('#image-input').files[0];

      sendBase64(file);


    });
  };

  App.UploadHandler = UploadHandler;
  window.App = App;

})(window);
