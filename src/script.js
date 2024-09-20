// Массив возможных расширений изображений
const possibleExtensions = ["jpg", "jpeg", "png", "gif", "webp"];

// Функция для загрузки всех изображений из папки
function loadImages() {
  const imageCount = 8; // Допустим, у нас 12 изображений
  const imageContainer = document.getElementById("gallery-container");

  for (let i = 1; i <= imageCount; i++) {
    let imgAdded = false; // Флаг для отслеживания успешного добавления изображения

    // Проходим по всем возможным расширениям и пытаемся загрузить изображение
    for (let ext of possibleExtensions) {
      const img = new Image();
      img.src = `images/${i}.webp`; // Пробуем разные расширения
      //    img.src = `images/${i}.${ext}`;
      img.alt = `Image ${i}`;

      // Когда изображение успешно загружено, добавляем его в контейнер
      img.onload = function () {
        if (!imgAdded) {
          imageContainer.appendChild(img);
          imgAdded = true; // Устанавливаем флаг, что изображение добавлено
        }
      };
    }
  }
}

// Вызываем функцию после загрузки страницы
window.onload = loadImages;
