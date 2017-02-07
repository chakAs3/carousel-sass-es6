var styles = require("../sass/app.scss");

const WHO = 'JS';
let greeter = (who) => 'Hello from ' + who + '!';

let loadJSON = () => {  getJSON('json/brokers.json');    };

let playing = true;
let duration = 10000 ;
let currentSlide = 0;
let pauseButton ;// document.getElementById('pause');
let nextButton ;
let prevButton ;

let slides ;





document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    document.getElementById('app').appendChild(
      document.createTextNode(greeter(WHO))  // add greating Message
    );
    // load brokers Json Data first
   loadJSON();
  }
};

function initCarousel(){

  slides = document.querySelectorAll('#slides .slide-item');
  // init UI .

  pauseButton = document.getElementById('pause');
  nextButton = document.getElementById('next');
  prevButton = document.getElementById('prev');

  let slideInterval = setInterval(nextSlide,duration); // start carousel autoplay




  nextButton.addEventListener("click" ,  ()=> {
       pauseSlideshow();
       nextSlide();
  });
  prevButton.addEventListener("click" ,  ()=> {
       pauseSlideshow();
       previousSlide();
  });
  pauseButton.addEventListener("click" ,  ()=> {
      if(playing) {
      pauseSlideshow();
    } else {
      playSlideshow();
    }
  });

  //pause the carousel
  function pauseSlideshow() {
      pauseButton.innerHTML = 'Play';
      playing = false;
      clearInterval(slideInterval);
  }
   // play the carousel
  function playSlideshow() {
      pauseButton.innerHTML = 'Pause';
      playing = true;
      slideInterval = setInterval(nextSlide,duration);
  }



}

// go to the next slide
function nextSlide() {
    goToSlide(currentSlide+1);
}
// go to the previous slide
function previousSlide() {
    goToSlide(currentSlide-1);
}
// go to slide n
function goToSlide(n) {
    console.log(" N:"+n);
    slides[currentSlide].className = 'slide-item';
    let o =  document.getElementById("o"+currentSlide) //.className ="";
    console.log(" slides.length  "+ slides.length+"  "+(n%slides.length) );
    o.className = "";
    currentSlide = (n%slides.length) ;// (n + slides.length ) % slides.length;
    console.log( " currentSlide "+currentSlide);
    slides[currentSlide].className = 'slide-item fade';
      console.log( " currentSlide "+currentSlide);
    o = document.getElementById("o"+n);
    o.className = "active";
    //update indicator
  //  document.getElementById("o"+currentSlide) //.className ="active";
}


// create carousel items
function createCarouselItem(list){
   for(let item in list){
     addItem( list[item],item==0 ?"fade":"",item )
   }
}
// add Item to carousel
function addItem(data,active="",index){

 let item = document.createElement('div') // create DOM element
     item.className = "slide-item "+active;

 let image = document.createElement('img');
 image.src = data.links.logo2x;
 image.alt = data.name ;
 //image.width = "460" ;
 //image.height = "345";

 let caption =   document.createElement('div');
 caption.className = "carousel-caption";
 caption.innerHTML ="<h3>"+data.name+"</h3><p>"+data.location+".</p><p class='label label-default'>"+data.phone+".</p>";


 item.appendChild(image);
 item.appendChild(caption);

 document.getElementById('slides').appendChild(
   item // add item to DOM Message
 );
 let indicator = document.createElement('li');
 indicator.setAttribute("data-target","#myCarousel");
 indicator.setAttribute("data-slide-to",index);
 indicator.setAttribute("id","o"+index);
 indicator.className ="btn-info "+ (active=="fade"?"active":"") ;
 let i = index;
 indicator.addEventListener("click",() => {
    //goToSlide(this.getAttribute("data-slide-to")) ;
      console.log( i );
      goToSlide(i);
  }  );
 document.getElementById('carousel-indicators').appendChild(indicator);
}

// get data from JSON FILE
function getJSON(url) {
   'use strict';
   let xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
       if (xhr.status === 200) {
     let  brokerList =  JSON.parse(xhr.responseText) ;
         console.log( brokerList );
       createCarouselItem(brokerList.data);
       initCarousel();
       } else {
         console.log(xhr.responseText);
       }
     }
   };
   xhr.open('GET', url);
   xhr.send();
}
