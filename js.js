
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("dropdown").classList.toggle("show");
}
function menuMobile() {
  document.getElementById("dropdown_mob").classList.toggle("show_menu");
  document.getElementById("burger_btn").classList.toggle("change");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropdown")) {
    var dropdowns = document.getElementsByClassName("dropdown_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/*
Function to smooth scroll
const target = document.querySelectorAll('a[href^="#"]');
for (const item of target) {
  item.onclick = function (e) {
    const hash = this.getAttribute("href");
    const elem = document.getElementById(hash.replace("#", ""));
    //history.pushState (null, null, hash);
    elem.scrollIntoView({ left: 0, block: "start", behavior: "smooth" });
    e.preventDefault();
  };
};
*/

let slideIndex = 2;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider_main_img");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot_active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dot_active";
};


