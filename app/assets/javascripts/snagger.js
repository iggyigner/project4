;(function(){

var init = function(){
  if (location.href.length >= 21 && location.href.substring(0,21) == "http://localhost:3000")
    return;
var images = document.getElementsByTagName('img', 'div');
  if (images.length == 0)
    alert("No images here");
  else
    setupSnagger(images);
  // location.href = "http://localhost:3000/?x=5"
}

    // var website = document.getElementsByTagName('body');
    // var wrapper = document.createElement('div');
    // website.append('')


var setupSnagger = function(images){
  if ( !document.getElementById('imageSnagger') ) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'imageSnagger');
    // newDiv.style.position = 'fixed';
    newDiv.style.float = 'right';
    // newDiv.style.bottom = '0';
    // newDiv.style.right = '0';
    // newDiv.style.top = '0';
    newDiv.style.backgroundColor = "#eee";
    newDiv.style.padding = '0.4em 1em';
    newDiv.style.height = "100%";
    newDiv.style.width = "20%";
    newDiv.style.overflow= "scroll";
    newDiv.style.fontFamily = 'monospace';
    newDiv.style.zIndex = '100000000';
    newDiv.innerHTML = "hello world";
    newDiv.setAttribute('class', "second");


    if (document.body.firstChild)
      document.body.insertBefore(newDiv, document.body.firstChild);
    else
      document.body.appendChild(newDiv);

    // document.body.appendChild(newDiv);
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
          // newDiv.appendChild(images[i]);

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

    // var largeDiv = document.createElement('div');
    // largeDiv.setAttribute('id', 'currentWindow');
    // document.body.appendChild(largeDiv);
    // largeDiv.innerHTML = "hello world";
    // $('#largeDiv').load('var pathname = window.location.pathname;');


init();

})(window);
