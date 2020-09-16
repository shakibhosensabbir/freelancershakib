//service js
const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns = filterContainer.children;
const totalFilterBtns = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalportfolioItems = portfolioItems.length;
for (let i = 0; i < totalFilterBtns; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    var filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalportfolioItems; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.add("show");
        portfolioItems[k].classList.remove("hide");
      }
    }
  })
}
// header active js
const navber = document.querySelector(".navber");
const a = navber.querySelectorAll("a");
const all = a.length;
a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < all; i++) {
      a[i].classList.remove("active");
    } {
      this.classList.add("active");
      document.querySelector(".navber").classList.toggle("show");
    }
  })
})
//header navber toggle js
var btn = document.querySelector(".ber");
btn.addEventListener("click", function () {
  document.querySelector(".navber").classList.toggle("show");
})
// text type 
const typed = new Typed('.text', {

  strings: ['Shakib Hosen', 'A Web Designer', 'A Web Developer', '19 Year Old'],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1500,
  loop: true,


});

// text type

///count js
$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 3000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});
///coutn js

//up to 
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
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


// login form 


$(document).ready(function(){
  $('#btn').click(function(e){
    e.preventDefault();
    var username = $("#username").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();


    if(username=="" && email=="" && subject=="" && message==""){
      $('#username,#email,#subject,#message').css('border','1px solid red');
    }else{
      if(username,email,subject,message){
        $('#username,#email,#subject,#message').css('border','1px solid green');
        $('#msgform').text('SMS Sending Successfull!').css('color','green');
      }
    }
    
  });
});
