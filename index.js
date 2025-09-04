// Side Nav
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var close=document.getElementById("close-nav")
menuicon.addEventListener("click",function()
{
    sidenav.style.left=0
})
close.addEventListener("click",function()
{
    sidenav.style.left="-50%"
})
// Offer
var offer=document.getElementById("offer")
var offerclose=document.getElementById("offerClose")
offerclose.addEventListener("click",function()
{
    offer.style.display="none"
})

// Banner
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

prev.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});

next.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});

// Show first slide
showSlide(slideIndex);
const slider = document.getElementById('slider');
function slideLeft() {
slider.scrollBy({
left: -slider.clientWidth,
behavior: 'smooth'
});
}
function slideRight() {
slider.scrollBy({
left: slider.clientWidth,
behavior: 'smooth'
});
}
