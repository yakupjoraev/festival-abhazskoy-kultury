// Custom Scripts
// Custom scripts

// Функция для обновления таймера
function updateTimer() {
  // Задаем дату окончания таймера
  const endDate = new Date("2023-09-25T00:00:00"); // Замените на вашу дату окончания
  // Получаем текущую дату и время
  const currentDate = new Date();
  // Вычисляем разницу между датами в миллисекундах
  const timeDifference = endDate - currentDate;

  // Если таймер истек, останавливаем интервал и выходим из функции
  if (timeDifference <= 0) {
    clearInterval(timerInterval);
    return;
  }

  // Вычисляем количество дней, часов, минут и секунд
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Обновляем элементы HTML с отображением времени
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Сохраняем данные в localStorage для избежания сброса при обновлении страницы
  localStorage.setItem("timerData", JSON.stringify({ days, hours, minutes, seconds }));
}

// Обновляем таймер сразу и устанавливаем интервал для обновления каждую секунду
updateTimer();
const timerInterval = setInterval(updateTimer, 1000);




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
