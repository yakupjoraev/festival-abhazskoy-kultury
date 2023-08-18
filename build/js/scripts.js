// Custom Scripts
// Custom scripts


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".how__arrow--next",
    prevEl: ".how__arrow--prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach(button => {
    button.addEventListener("click", function () {
      const textBlock = this.previousElementSibling;
      textBlock.classList.toggle("more");

      if (textBlock.classList.contains("more")) {
        this.textContent = "Свернуть";
      } else {
        this.textContent = "Подробнее";
      }
    });
  });
});

