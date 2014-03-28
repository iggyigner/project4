(function(){

var init = function(){
  if (location.href.length >= 30 && location.href.substring(0,29) == "http://grappple.herokuapp.com")
  {
    return;
  }
  // alert(location.href);
  var images = document.getElementsByTagName('img', 'div');
  if (images.length == 0)
    alert("No images here");
  else
    setupSnagger(images);
}

var setupSnagger = function(images){

  // Set up the wrapper at the left
  var body_contents = document.getElementsByTagName('body')[0].innerHTML;
  var wrap = "<div id = 'rachelwrapper'>" + body_contents + "</div>";
  document.getElementsByTagName('body')[0].innerHTML = wrap;
  var rachelwrapper = document.getElementById('rachelwrapper');
    rachelwrapper.style.float = 'left';
    rachelwrapper.style.width = "70%";

  // Do we have the imageSnagger part at the right yet?
  if ( !document.getElementById('imageSnagger') ) {
    // Nope, let's build it!
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'imageSnagger');
    newDiv.style.float = 'right';
    newDiv.style.backgroundColor = "#eee";
    newDiv.style.height = "100%";
    newDiv.style.width = "30%";
    newDiv.style.overflow= "scroll";
    newDiv.style.fontFamily = 'monospace';
    newDiv.style.zIndex = '100000000';
    // newDiv.innerHTML = "hello world";

  if (document.body.firstChild)
    document.body.insertBefore(newDiv, document.nextSibling);
  else
    document.body.appendChild(newDiv);


    //  window.rachelIggyNewDiv = newDiv;
    window.rachelIggyAllImages = [];

    // appends <style> to page, sets opacity of class 'picture' to 0.75

    var sheet = document.createElement('style');
    sheet.innerHTML = ".rachelpicture:hover { opacity: 0.50; } .rachelpicture {width: 404px} ";
    document.body.appendChild(sheet);

    var img_count = images.length;
    for (var i=0;i<img_count;i++)
    {
      // Capture just the images that are large enough
      if(images[i].width > 80 && images[i].height > 40)
      {
        // newImage.setAttribute('onclick', 'rachelIggyMigrateImage('+i+');');
         
        // images[i].parentNode.insertBefore(imgButton, images[i].nextSibling)
        // Set newImage variable for images in bookmarklet
        var newImage = document.createElement('img');
        newImage.setAttribute('src', images[i].src);
        newImage.setAttribute('id', "image" +i);
        newImage.classList.add("rachelpicture");

        // Call the click on the newImage
        newImage.setAttribute('onclick', 'rachelIggyMigrateImage('+i+');');

        var containerDiv = document.createElement('div');
        // containerDiv.style.border = "2px solid lime";
        containerDiv.style.margin = "5px";
        containerDiv.appendChild(newImage);
        containerDiv.appendChild(document.createElement('br'));


        newDiv.appendChild(containerDiv);
        // newDiv.appendChild(document.createElement('br'));
        rachelIggyAllImages.push(images[i]);
        // newDiv.appendChild(images[i]);
      }
    }

window.rachelIggyMigrateImage = function(id){

      var xhr = new XMLHttpRequest();
      // alert(1);
      // alert(rachelIggyAllImages[id].src);
      xhr.open("POST", "http://grappple.herokuapp.com/?url=" + rachelIggyAllImages[id].src, true);
      xhr.withCredentials = true;
      xhr.onreadystatechange = function(yaItsAwesome, xyz) {
        console.log('hello world' + this.readyState);
        if(this.readyState == 4) {
        // window.alert("works");
        console.log(yaItsAwesome, xyz);
        containerDiv = document.getElementById("image" + id).parentNode;
        containerDiv.parentNode.removeChild(containerDiv);
      }
    }

    xhr.send();
  
    }


  }

};


init();

})(window);