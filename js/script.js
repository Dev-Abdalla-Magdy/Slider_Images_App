// Get Slider items | Array.from() [ES6]
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// get number of slides
let slidesCount = sliderImages.length;

// initial current slide
let currentSlide = 1;

// handle slide number element
let slideNumberEl = document.getElementById('slide-number');

// handle previous and next button
let previousButton = document.getElementById('previous-btn');
let nextButton = document.getElementById('next-btn');

// create ul element and his children li
let paginationEl = document.createElement('ul');

// handle indicators which contain ul
let indicators = document.getElementById('indicators');

// set id to ul element 
paginationEl.setAttribute('id', 'pagination-ul');

for(let i = 1; i <= slidesCount; i++){
  // create every li
  let paginationItem = document.createElement('li');

  // set data-index attribute to li
  paginationItem.setAttribute('data-index', i);

  // set content to li
  paginationItem.appendChild(document.createTextNode(i));

  // append li to main ul
  paginationEl.appendChild(paginationItem);
}

// append main ul to page content
indicators.appendChild(paginationEl);

// handle ul element
let paginationCreatedUl = document.getElementById('pagination-ul');

// Get pagination items | Array.from() [ES6]
let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop through lis
for (let i = 0; i < paginationBullets.length; i++){
  // handle every li
  paginationBullets[i].onclick = function () {
    // set current slide from data-index id
    currentSlide = parseInt(this.getAttribute('data-index'));
    // trigger main function
    checkSlides();
  }
}

// handle on clicks events
previousButton.onclick = previousSlide;
nextButton.onclick = nextSlide;

// trigger main function
checkSlides();

// set previous & next slide function
function previousSlide(){
  // check if previous button contains disabled class
  if (previousButton.classList.contains('disabled')){
    // don nothing
    return false;
  } else {
    // decrement current slide
    currentSlide--;
    // trigger main function
    checkSlides();
  }
}
function nextSlide(){
  // check if next button contains disabled class
  if (nextButton.classList.contains('disabled')){
    // don nothing
    return false;
  } else {
    // decrement current slide
    currentSlide++;
    // trigger main function
    checkSlides();
  }
}

// set the checker (main) function
function checkSlides() {
  // set number of slides on top corner
  slideNumberEl.textContent = '# Slide ' + (currentSlide) + ' of ' + (slidesCount);

  // Remove active class from images & pagination
  removeAllActive();
  
  // set active class on current slide
  sliderImages[currentSlide - 1].classList.add('active');
  
  // set active class ul children (bullets) on current slide
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

  // Check if current slide is the first
  if(currentSlide == 1) {
    // add disabled class to previous button
    previousButton.classList.add('disabled');
  } else {
    // remove disabled class from previous button
    previousButton.classList.remove('disabled');
  }

  // Check if current slide is the last
  if(currentSlide == slidesCount) {
    // add disabled class to next button
    nextButton.classList.add('disabled');
  } else {
    // remove disabled class from next button
    nextButton.classList.remove('disabled');
  }
}

// Remove active class from images & pagination
function removeAllActive() {
  // remove all active class from array images 
  sliderImages.forEach(function (img) {
    img.classList.remove('active');
  })

  // remove all active class from array pagination bullets
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove('active');
  })
}