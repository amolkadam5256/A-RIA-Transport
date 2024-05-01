function myFunction(x) {
    x.classList.toggle("change");
    
    
    // mobile manu bar?
    var x = document.getElementById("mobile-manu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    
  }
  
  

// form js code

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

function fun(){
document.getElementById('fname').value='';
document.getElementById('email-id').value='';
document.getElementById('phone-no').value='';
document.getElementById('subject').value='';
}






// scroll up customise javascript

// Get the button
let mybutton = document.getElementById("myBtn-fly");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

