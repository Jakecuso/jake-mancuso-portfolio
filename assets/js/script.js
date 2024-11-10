'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar toggle functionality for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Testimonials modal functionality
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterItems = document.querySelectorAll("[data-filter-item]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

selectItems.forEach(item => {
  item.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    formBtn.disabled = !form.checkValidity();
  });
});

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetPage = this.innerText.toLowerCase();

    pages.forEach(page => page.classList.remove("active"));
    navigationLinks.forEach(nav => nav.classList.remove("active"));

    document.querySelector(`[data-page="${targetPage}"]`).classList.add("active");
    this.classList.add("active");
    window.scrollTo(0, 0);
  });
});

// Parallax effect on images
document.querySelectorAll('.side-image').forEach(image => {
  image.addEventListener('mousemove', e => {
    const { width, height, left, top } = image.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    image.style.transform = `scale(1.05) translate(${x * 10}px, ${y * 10}px)`;
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});

// Certifications animation effect
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
