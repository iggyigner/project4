(function(){

var init = function(){
  if (location.href.length >= 21 && location.href.substring(0,21) == "http://localhost:3000")
    return;
var images = document.getElementsByTagName('img', 'div');
  if (images.length == 0)
    alert("No images here");
  else
    setupSnagger(images);
}


var body_contents = document.getElementsByTagName('body')[0].innerHTML;
var wrap = "<div id = 'rachelwrapper'>" + body_contents + "</div>";
document.getElementsByTagName('body')[0].innerHTML = wrap;
var rachelwrapper = document.getElementById('rachelwrapper');
rachelwrapper.style.float = 'left';
rachelwrapper.style.width = "70%";



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
    newDiv.style.height = "100%";
    newDiv.style.width = "30%";
    newDiv.style.overflow= "scroll";
    newDiv.style.fontFamily = 'monospace';
    newDiv.style.zIndex = '100000000';
    newDiv.innerHTML = "hello world";
    newDiv.setAttribute('class', "second");



    if (document.body.firstChild)
      // document.body.insertBefore(newDiv, document.body.firstChild);
    document.body.insertBefore(newDiv, document.nextSibling);
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
        var newFrame = document.createElement('div');
        newFrame.setAttribute('class', 'frame');
        newFrame.innerHTML = images[i].setAttribute('onclick', 'rachelIggyMigrateImage('+rachelIggyAllImages.length+');');
        // images[i].appendChild('<div class="frame"></div>');
        // var frameHolder = document.getElementsByTagName('img').appendChild('<div class="frame"></div>');
        // frameHolder.style.width = '200px';
        // frameHolder.style.height = '200px';
        // frameHolder.style.overflow = 'none';
        // var imgButton = document.createElement('input');
        // imgButton.setAttribute('type', 'button');
        // imgButton.setAttribute('onclick', 'rachelIggyMigrateImage('+rachelIggyAllImages.length+');');
        // imgButton.style.position="absolute";
        // imgButton.style.zIndex=2147483640;
        // images[i].parentNode.insertBefore(imgButton, images[i].nextSibling)
        var containerDiv = document.createElement('div');
        rachelIggyAllImages.push(images[i]);
          containerDiv.style.border = "2px solid lime";
          containerDiv.style.margin = "5px";
          containerDiv.onmouseover = function(){this.style.border="5px solid blue";}
          containerDiv.onmouseout = function(){this.style.border="2px solid lime";}
          containerDiv.appendChild(images[i]);
          newDiv.appendChild(containerDiv);

      }
    }

window.rachelIggyMigrateImage = function(id){
      var newImage = document.createElement('img');
      newImage.setAttribute('src', rachelIggyAllImages[id].src);
      newDiv.appendChild(document.createElement('br'));
      newDiv.appendChild(newImage);



// var http = new XMLHttpRequest();
// var url = "http://localhost:3000/photos";
// // var params = "yoyoyo";
// http.open("POST", "http://localhost:3000/photos", true);

// // //Send the proper header information along with the request
// // http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// // http.setRequestHeader("Content-length", params.length);
// // http.setRequestHeader("Connection", "close");

// http.onreadystatechange = function() {//Call a function when the state changes.
//     if(http.readyState == 4 && http.status == 200) {
//         console.log(http.responseText);
//     }
// }
// http.send("photo=" + rachelIggyAllImages[id].src);


      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/photos/?url=" + rachelIggyAllImages[id].src, true);
      xhr.withCredentials = "true";
      xhr.onreadystatechange = function(yaItsAwesome, xyz) {
        console.log('hello world' + this.readyState);
        if(this.readyState == 4) {
        window.alert("works");
        console.log(yaItsAwesome, xyz);
      }
    }

    xhr.send();
   
    }


  }

};


init();

})(window);




// $(function(){
//     // ADD EXTERNAL STYLESHEET bookmark.css    
//     $('head').append("<link rel='stylesheet', type='text/css', href='http://cinegrain.com/wp-content/uploads/2014/02/bookmark.css'>");

//     $(function(){
//         // ADD GUI ELEMENTS TO HOST PAGE
//         $( 'body' ).prepend( "<div class='Catchframe123'></div>" );
//         $( '.Catchframe123' ).prepend( "<div class='CatchframeHeader123'><p>Catchframe</p></div>" );
//         $( 'body' ).prepend( "<div class='CatchframeDark123'></div>" );

//         // CLONE ALL IMAGES (bigger than height:75px) INTO GUI
//         $( 'img' ).each(function() {

//             if ( $( this ).height() >= 75 ) {
//                 $( this ).clone().appendTo( '.Catchframe123' );
//             }

//         });

//         // SLIDE IN FROM RIGHT
//         $( '.Catchframe123' ).delay( .01 ).animate({ opacity:'1.0', width:'200px' }, 400);
//         $( '.CatchframeDark123' ).delay( .01 ).animate({ opacity:'1.0' }, 400);



//         // FINISHED ADDING ELEMENTS TO DOM ******************************************************************

//         // IMG CLICKED - POST
//         $( 'img' ).click(function() {

//           //   $.post( "http://catchframe.herokuapp.com/bookmarks", { url:  window.location.href, src: this.src, name: this.alt }).done(function( data ) {
//           //   $( 'body' ).prepend( "<div class='lookmarked'></div>" );
//           //   $( '.lookmarked' ).animate({ opacity:'0.0' }, 600, function() {
//           //       $( '.lookmarked' ).remove(); 
//           //   });
//           // });

//           $.ajax({ 
//                url: "http://catchframe.herokuapp.com/bookmarks", 
//                data: { url:  window.location.href, src: this.src, name: this.alt },
//                crossDomain: true
//                })
//                .done(function( data ) {
//                     $( 'body' ).prepend( "<div class='lookmarked'></div>" );
//                     $( '.lookmarked' ).animate({ opacity:'0.0' }, 600, function() {
//                          $( '.lookmarked' ).remove(); 
//                     });
//                });
//           });

//         // LARGER IMAGE TO LEFT ON HOVER
//         // Hover over size change
//             $('.Catchframe123 img').on('mouseenter',function () {
//                 $( 'body' ).prepend( "<div class='CatchframeLargerImage123'></div>" );
//                 $( this ).clone().appendTo( '.CatchframeLargerImage123' );

//                 $( this ).on('mouseleave',function () {
//                     $( '.CatchframeLargerImage123' ).delay( 1 ).remove();
//                 });
//             });

//         // CLEAR ALL WHEN CLICKED OUTSIDE OF FOCUS
//         $( ".CatchframeDark123" ).click(function() { 

//             $( '.CatchframeDark123' ).animate({ opacity:'0.0' }, 400, function() {
//                 $( '.CatchframeDark123' ).remove();
//             });
//             $( '.CatchframeLargerImage123' ).remove();
//             $( '.Catchframe123' ).remove();
//             $( "<link rel='stylesheet', type='text/css', href='bookmark.css'>" ).remove();

//         });
//     });
// });





// var params="v=66b12127";
// xhr.onreadystatechange = function() {
//     if(this.readyState == 4) {
//         window.alert("works");
//     }
// }
// xhr.send(params);
