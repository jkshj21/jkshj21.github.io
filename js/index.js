var obj = { 
  "1": ["Simon Game", "#front-end Project #jquery #javascript #html #css", "https://codepen.io/jkshj21/full/pwGxwG/"],
  "2": ["Tic Tac Toe", "#front-end Project #jquery #javascript #html #css", "https://codepen.io/jkshj21/pen/mwaejd"], 
  "3": ["Pomodoro Clock", "#front-end Project #jquery #javascript #html #css", "https://codepen.io/jkshj21/details/XgyaPW"], 
  "4": ["Javascript Calculator", "#front-end Project #jquery #javascript #html #css", "https://codepen.io/jkshj21/pen/pwOqwm"], 
  "5": ["Twitch TV", "#front-end Project #jquery #javascript #html #css #ajax #twitchapi", "https://codepen.io/jkshj21/details/RgyRxy" ], 
  "6": ["Wikipedia", "#front-end Project #jquery #javascript #html #css #json #wikipediaapi", "https://codepen.io/jkshj21/pen/gRvmgP"], 
  "7": ["Local Weather", "#front-end Project #jquery #javascript #html #css #json #darkskyapi", "https://codepen.io/jkshj21/pen/RgjOMK"],
  "8": ["Random Quote Generator", "#front-end Project #jquery #javascript #html #css #json #wikipediaapi", "https://codepen.io/jkshj21/pen/wePyZw"],
  "9": ["Tribute", "#front-end Project #jquery #javascript #html #css","https://codepen.io/jkshj21/pen/weJXQP?editors=1100"],
}


$(document).ready(function(){ 

   var imp = impress();

    $('#arrowLeft').click(function(e){
        imp.prev();
        e.preventDefault();
    });

    $('#arrowRight').click(function(e){
        imp.next();
        e.preventDefault();
    });
  
  $("input").on(function(){ 
    var input = $(this); 
    if (input.length === 0){ 
      input.addClass("empty");
    }else { 
      input.removeClass("empty");
    }
  });
  
  $("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});
 
  
});

function scrollDown(id){ 
  if (id === "heart"){ 
    $('html,body').animate({
        scrollTop:$(".font").offset().top},
        'slow');
  }
  else{ 
    $('html,body').animate({
        scrollTop:$(".ti").offset().top},
        'slow');
  }

}

window.onclick = function(event) {
   var modal = document.getElementById("myModal"); 
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById("myModal"); 
var currId;

 function popUp(id){
    currId = id; 
    var modal = document.getElementById("myModal"); 
    var img = document.getElementById(id);
    modal.style.display = "block";
    var modalImg = document.getElementById("imgModal")
    modalImg.src = img.src;
   $("#t").text(obj[id][0]);
   $("#modalDes").text(obj[id][1]);
  }

function openNewWindow(){ 
  window.open(obj[currId][2]);
}

function closeModal() { 
  var modal = document.getElementById("myModal"); 
  modal.style.display = "none";
}

(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();