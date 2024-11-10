'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
// Apply parallax effect on side images with flair animation
document.querySelectorAll('.side-image').forEach((image) => {
  image.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = image.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    image.style.transform = `scale(1.05) translate(${x * 10}px, ${y * 10}px)`;
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});
// Parallax effect on side images with flair animation (already present)
document.querySelectorAll('.side-image').forEach((image) => {
  image.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = image.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    image.style.transform = `scale(1.05) translate(${x * 10}px, ${y * 10}px)`;
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});

// New effect for flipping/bending animations on certification images during scroll
const certificationsList = document.querySelector('.certifications-list');
if (certificationsList) {
  certificationsList.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.certification-item img');
    items.forEach((img, index) => {
      const position = img.getBoundingClientRect().left - certificationsList.getBoundingClientRect().left;
      img.style.transform = `rotateY(${position / 20}deg) scale(1.1)`;
      img.style.transition = `transform 0.3s ease-out`;
    });
  });
}
// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.left >= 0 && rect.left <= window.innerWidth;
}

// Scroll event listener to apply the wave effect
const certificationItems = document.querySelectorAll('.certification-item');
const certificationsList = document.querySelector('.certifications-list');

// Check visibility on load
certificationItems.forEach((item, index) => {
  if (isInViewport(item)) {
    item.classList.add('visible');
  }
});

// Scroll event listener for the certifications list
if (certificationsList) {
  certificationsList.addEventListener('scroll', () => {
    certificationItems.forEach((item, index) => {
      if (isInViewport(item)) {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 100); // Adjust the delay for the wave effect
      } else {
        item.classList.remove('visible'); // Remove class if item goes out of view
      }
    });
  });
}
// Select all navigation links and page sections
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add click event to each navigation link
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetPage = this.innerText.toLowerCase();

    // Hide all pages and remove 'active' class from nav links
    pages.forEach(page => page.classList.remove("active"));
    navigationLinks.forEach(nav => nav.classList.remove("active"));

    // Show target page and add 'active' class to clicked link
    document.querySelector(`[data-page="${targetPage}"]`).classList.add("active");
    this.classList.add("active");

    // Scroll to top when navigating to a new section
    window.scrollTo(0, 0);
  });
});

