function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

var dropdown = document.getElementsByClassName("dropdown-btn");

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("iactive");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}





// slideshow container-1 fade slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" cactive", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " cactive";
}





// experties section


var sectIndex = 1;
showsection(sectIndex);

function currentexperties(n) {
  showsection(sectIndex = n);
}

function showsection(n) {
  var i;
  var section = document.getElementsByClassName("section");
  for (i = 0; i < section.length; i++) {
    section[i].style.display = "none";
  }
  section[sectIndex - 1].style.display = "block";
}




// why choose us section

const wammy = document.querySelector('.whybuisenessitem');
const rightwhy = document.querySelector('.whyright');
const leftwhy = document.querySelector('.whyleft');
var owl2index = 0;

leftwhy.addEventListener('click', function () {
  owl2index = (owl2index > 0) ? owl2index - 1 : 0;
  wammy.style.transform = 'translate(' + (owl2index) * -25 + '%)';
});

rightwhy.addEventListener('click', function () {
  owl2index = (owl2index < 2) ? owl2index + 1 : 2;
  wammy.style.transform = 'translate(' + (owl2index) * -25 + '%)';
});



// our portfolio section

var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function showSlides1(n) {
  var i;
  var port = document.getElementsByClassName("mySlides1");
  if (n > port.length) { slideIndex1 = 1 }
  if (n < 1) { slideIndex1 = port.length }
  for (i = 0; i < port.length; i++) {
    port[i].style.display = "none";
  }

  port[slideIndex1 - 1].style.display = "block";
}

