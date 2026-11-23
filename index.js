// HERO SLIDER

let titles = [
    "AWESOME WEBSITE TEMPLATE",
    "CREATE YOUR OWN WEBSITE",
    "BUILD YOUR DREAM WEBSITE"
];

let descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    "Create beautiful websites with modern designs and amazing features.",
    "Discover creative ideas and build your own web masterpiece."
];

let images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",

    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600",

    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600"
];

let currentSlide = 0;

let heroTitle = document.getElementById("heroTitle");

let heroDescription = document.getElementById("heroDescription");

let heroImage = document.getElementById("heroImage");

let dots = document.querySelectorAll(".dot");


function showSlide() {

    heroTitle.innerText = titles[currentSlide];

    heroDescription.innerText = descriptions[currentSlide];

    heroImage.src = images[currentSlide];

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");

}


function changeSlide(direction) {

    currentSlide += direction;

    if (currentSlide >= titles.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = titles.length - 1;
    }

    showSlide();

}


function goToSlide(index) {

    currentSlide = index;

    showSlide();

}


// AUTOMATIC SLIDER

setInterval(function() {

    changeSlide(1);

}, 4000);


// VIDEO BUTTON

function playVideo() {

    alert("Welcome to our website video tour!");

}


// TESTIMONIAL SLIDER

let currentReview = 0;

let reviewTrack = document.getElementById("reviewTrack");

let totalReviews = 2;


function changeReview(direction) {

    currentReview += direction;

    if (currentReview >= totalReviews) {
        currentReview = 0;
    }

    if (currentReview < 0) {
        currentReview = totalReviews - 1;
    }

    reviewTrack.style.transform =
        "translateX(-" + (currentReview * 50) + "%)";

}
