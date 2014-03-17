;(function(){

var init = function(){
  if (location.href.length >= 21 && location.href.substring(0,21) == "http://localhost:3000")
    return;
var images = document.getElementsByTagName('img');
  if (images.length == 0)
    alert("No images here");
  else
    setupSnagger(images);
  // location.href = "http://localhost:3000/?x=5"
}
var setupSnagger = function(images){
  if ( !document.getElementById('imageSnagger') ) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'imageSnagger');
    newDiv.style.position = 'fixed';
    newDiv.style.bottom = '0';
    newDiv.style.right = '0';
    newDiv.style.top = '0';
    newDiv.style.backgroundColor = "#eee";
    newDiv.style.padding = '0.4em 1em';
    newDiv.style.height = "100%";
    newDiv.style.width = "100%";
    newDiv.style.fontFamily = 'monospace';
    newDiv.style.zIndex = '100000000';
    newDiv.innerHTML = "hello world";
    document.body.appendChild(newDiv);
    //     numImages = images.length;
        window.rachelIggyNewDiv = newDiv;
    window.rachelIggyAllImages = [];
    for (var i=0;i<images.length;i++){
  // Capture just the images that are large enough
      if(images[i].width > 80 && images[i].height > 40)
      {
        var imgButton = document.createElement('input');
        imgButton.setAttribute('type', 'button');
        imgButton.setAttribute('onclick', 'rachelIggyMigrateImage('+rachelIggyAllImages.length+');');
        imgButton.style.position="absolute";
        imgButton.style.zIndex=2147483640;
        images[i].parentNode.insertBefore(imgButton, images[i].nextSibling)
  rachelIggyAllImages.push(images[i]);
          newDiv.appendChild(images[i]);

      }
    }

window.rachelIggyMigrateImage = function(id){
      var newImage = document.createElement('img');
      newImage.setAttribute('src', rachelIggyAllImages[id].src);
      newDiv.appendChild(document.createElement('br'));
      newDiv.appendChild(newImage);
}
  

  }

};


init();

})(window);


  // for (var i=0;i<numImages;i++){
    //   var newImage = document.createElement('img');
    //   newImage.setAttribute('src', images[i].src);
    //   newDiv.appendChild(newImage);
    // }

    //     for (var i=0;i<images.length;i++){
    //     var newImage = document.createElement('img');
    //     newImage.setAttribute('src', images[i].src);
    //     newDiv.appendChild(newImage);
    //   if(!confirm("Dude!!! " + images.length))
    //      break;
    // }
    // newImage.setAttribute('src', images[0].src);
    // for (var i=0;i<images.length;i++){
    //   var newImage = document.createElement('img');
    //   newImage.setAttribute('src', images[0].src);
    //   newDiv.appendChild(newImage);
    // }
