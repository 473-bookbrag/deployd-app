(function(window){
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;



  function UploadHandler(formSelector, imageInputSelector, collectionUrl) {

    this.collectionUrl = collectionUrl;
    this.imageInputSelector = imageInputSelector;
    console.log("selected");
    if (!formSelector) {
      throw new Error('No formSelector provdied');
    }

    this.$formElement = $(formSelector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with formSelector: ' + formSelector);
    }
  }

  UploadHandler.prototype.sendRemainder = function(formData){
    'use strict';
    console.log(formData);
    $.post({
      url: this.collectionUrl,
      contentType: "application/json",
      data: JSON.stringify(formData),
    });
  }

  UploadHandler.prototype.sendData = function(formData, file) {
    'use strict';
    var imageData = new FormData();

    imageData.append('uploadedFile', file);
    if(file){
      $.post({
        url: "http://localhost:2403/imageupload",
        processData: false,
        contentType: false,
        data: imageData,
        success: (function(val){
            formData["imagename"] = val[0].filename;
            console.log(formData.imagename);
            this.sendRemainder(formData);
        }).bind(this)
      });
    }
    else{
      this.sendRemainder(formData);
    }
  }

  UploadHandler.prototype.addUploadHandler = function(fn) {
    console.log('Setting upload handler for form');
    this.$formElement.on('submit', (function(event) {
      event.preventDefault();

      var formData = {};
      $(this).serializeArray().forEach(function(item) {
       formData[item.name] = item.value;
       console.log(item.name + ' is ' + item.value);
      });

      console.log("does it get here");



      var file = this.$formElement.find(this.imageInputSelector)[0].files[0];

      this.sendData(formData, file);


    }).bind(this));
  };

  App.UploadHandler = UploadHandler;
  window.App = App;

})(window);
