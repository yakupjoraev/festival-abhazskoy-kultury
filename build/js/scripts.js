// Custom Scripts
// Custom scripts


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".how__arrow--next",
    prevEl: ".how__arrow--prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const membersItems = document.querySelectorAll(".members__item");

  membersItems.forEach(item => {
    const toggleButton = item.querySelector(".toggle-button");
    const textBlock = item.querySelector(".members__item-text");

    item.addEventListener("click", function () {
      this.classList.toggle("more");
      textBlock.classList.toggle("more");

      if (textBlock) {
        if (textBlock.classList.contains("more")) {
          toggleButton.textContent = "Свернуть";
        } else {
          toggleButton.textContent = "Подробнее";
        }
      }
    });

  });
});


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
