// Get references to HTML elements
const sliderContainer = document.querySelector(".slider-container");
const slidesLeft = document.querySelector(".left-slide");
const slidesRight = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button1");
const downButton = document.querySelector(".down-button");
const mapOfNiger = document.querySelector(".tour-button");
mapOfNiger.onclick = () => (window.location.href = "map.html");

// Calculate the total number of slides
const slidesLength = slidesRight.querySelectorAll("div").length;

// Initialize the active slide index
let activeSlidesIndex = 0;

// Set initial position for left slides
slidesLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Add click event listeners to up and down buttons
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));
// console.log(mapOfNiger);

// Function to change the active slide
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlidesIndex++;
    if (activeSlidesIndex > slidesLength - 1) {
      activeSlidesIndex = 0;
      console.log("yes boss");
      showMap();
    }
    if (activeSlidesIndex > slidesLength - 2) {
      upButton.style.display = "none";
      slidesRight.style.zIndex = -1;
    }
  } else if (direction === "down") {
    activeSlidesIndex--;
    if (activeSlidesIndex < 0) {
      activeSlidesIndex = slidesLength - 1;
    }
  }

  // Update the transform property to change the slide position
  slidesRight.style.transform = `translateY(-${
    activeSlidesIndex * sliderHeight
  }px)`;
  slidesLeft.style.transform = `translateY(${
    activeSlidesIndex * sliderHeight
  }px)`;
};

function showMap() {
  sliderContainer.style.display = "none";
  upButton.style.display = "none";
  // window.location.href = "map.html";
  // mapOfNiger.style.display = "block";
}
