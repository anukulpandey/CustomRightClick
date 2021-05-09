let customMenu = document.getElementById('customMenu');
console.log(customMenu)
document.oncontextmenu = function(e){
    e.preventDefault();
    e.stopPropagation();

    let x = e.clientX;
    let y = e.clientY;

    customMenu.style.left=x + 'px';
    customMenu.style.top=y+ 'px';
    customMenu.style.display='block';
    customMenu.style.animation='menuOpen 0.2s';
}

document.onclick =  function(e){
    customMenu.style.animation='menuClose 0.2s';
    function none(){
        customMenu.style.display='none';
    }
    setTimeout(none,190)
}
let reloadPage = document.getElementById('reloadPage');
reloadPage.addEventListener('click',()=>{
    location.reload()
    console.log('Event Fired')
})
let viewSource = document.getElementById('viewSource');
viewSource.addEventListener('click',()=>{
   let typingAnimation = document.getElementById('typingAnimation');
   typingAnimation.style.display="none";
   let pageSource = document.getElementById('pageSource');
   pageSource.innerText=`<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Right Click Menu</title>
       <link rel="stylesheet" href="style.css">
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   </head>
   <body style="color: azure;">
       <nav class="navbar">
           <span class="navbar-brand mb-0 h1">customClickEngine</span>
         </nav>
         <div class="typingAnimation" id="typingAnimation"><p class="line-1 anim-typewriter">This code is purely written in HTML,CSS and Javascript.....</p></div>
        <div id="pageSource"></div>
       <div id="customMenu">
           <div class="item">
               <a id="reloadPage">Reload Page</a>
           </div>
           <div class="item">
               <a id="viewSource">View Source</a>
           </div>
           <div class="item">
               <a href="" download="index.html">Save Page</a>
           </div>
           <div class="item">
               <a id="exit">Exit</a>
           </div>
       </div>
       
       <script src="./script.js"></script>
   </body>
   </html>`
   pageSource.style.margin="auto"
})