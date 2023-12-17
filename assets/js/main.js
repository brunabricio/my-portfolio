/*==================== TITLE ANIMATION ====================*/
function typeWriter (element) {
  const textoArray = element.innerHTML.split('');
  element.innerHTML = '';
  textoArray.forEach((letter, i) => {
    setTimeout(() => element.innerHTML += letter, 75 * i)
  });
}

const title = document.querySelector('h1');
typeWriter(title);



/*==================== ACCORDION ====================*/

const accordionContent = document.getElementsByClassName('accordion__content'),
  accordionHeader = document.querySelectorAll('.accordion__header');

function toggleAccordion() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < accordionContent.length; i++) {
    accordionContent[i].className = 'accordion__content accordion__close';
  }

  if (itemClass === 'accordion__content accordion__close') {
    this.parentNode.className = 'accordion__content accordion__open';
  }
}

accordionHeader.forEach((el) => {
el.addEventListener('click', toggleAccordion)

})

/*==================== OPEN NAV MENU ====================*/

function openNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*==================== CARROUSEL ====================*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
