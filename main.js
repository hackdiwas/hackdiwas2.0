const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-line");
  if (isOpen) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("open");
        navLinks.classList.remove("close");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 50) { 
      navbar.style.backgroundColor = 'rgba(49, 54, 63, 1)'; 
  } else {
      navbar.style.backgroundColor = 'rgba(4,9,10,0.3)';
  }
});




const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .title__discription", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .time", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .countdown", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .scroll__btn", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .header__socials", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1000,
});

ScrollReveal().reveal(".intro__container .intro__border", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".schedule__intro .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".schedule__intro .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".schedule__timeline .schedule__icons", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".timeline .content", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".register__container .register__border", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__image-1, .about__image-3", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__image-2", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".slider__container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".slider__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".slider__container .slider-wrapper", {
  ...scrollRevealOption,
  delay: 1000,
});



// intro animation
var section = document.querySelector('#intro');
var images = [
  "./assets/back1.jpg",
  "./assets/back2.png",
  "./assets/back3.png"
];

// Preload images
var imageObjects = [];
var loadedCount = 0;
images.forEach(function(imageUrl) {
  var img = new Image();
  img.onload = function() {
    loadedCount++;
    if (loadedCount === images.length) {
      // Start the interval once all images are loaded
      startInterval();
    }
  };
  img.src = imageUrl;
  imageObjects.push(img);
});

function startInterval() {
  var index = 0;
  setInterval(function() {
    index = (index + 1) % images.length;
    var bg = "url('" + images[index] + "')";
    section.style.transition = "background 0.7s ease"; // Smooth transition effect
    section.style.background = bg;
    section.style.backgroundSize = "cover"; // Make the background image cover the section
  }, 5000); // Change image every 3 seconds
}



document.addEventListener("DOMContentLoaded", function() {
  // Set the date we're counting down to
  const countDownDate = new Date("May 1, 2025 00:00:00").getTime();

  // Update the countdown every 1 second
  const countdownTimer = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with respective IDs
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, write some text 
    if (distance < 0) {
      clearInterval(countdownTimer);
      document.getElementById("days").innerHTML = '0';
      document.getElementById("hours").innerHTML = '0';
      document.getElementById("minutes").innerHTML = '0';
      document.getElementById("seconds").innerHTML = '0';
    }
  }, 1000);
});



const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("problem");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("ri-add-line", "ri-subtract-line");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("ri-subtract-line", "ri-add-line");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("ri-subtract-line", "ri-add-line");
        }
    })
}




const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".slider__container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


