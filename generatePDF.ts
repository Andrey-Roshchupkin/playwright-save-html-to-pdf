import { chromium } from "playwright";
import path from "path"; // Используем для работы с путями

(async () => {
  // Запускаем браузер
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Загружаем локальный HTML файл с абсолютным путем
  const filePath = path.resolve(__dirname, "src/index.html"); // Формируем абсолютный путь
  await page.goto(`file://${filePath}`);

  // Дожидаемся полной загрузки всех изображений
  await page.evaluate(() => {
    return new Promise<void>((resolve) => {
      const imgs = Array.from(document.images);
      let loaded = 0;
      imgs.forEach((img) => {
        if (img.complete) {
          loaded++;
        } else {
          img.onload = () => {
            loaded++;
            if (loaded === imgs.length) resolve();
          };
          img.onerror = () => resolve();
        }
      });
      if (loaded === imgs.length) resolve();
    });
  });

  // Получаем размеры родительского контейнера
  const boundingBox = await page.$eval(".gallery-container", (el) => {
    const { width, height } = el.getBoundingClientRect();
    return { width, height };
  });

  // Сохраняем страницу в PDF с размерами родительского контейнера
  await page.pdf({
    path: "output.pdf",
    width: `${boundingBox.width}px`,
    height: `${boundingBox.height}px`,
    printBackground: true,
  });

  // Закрываем браузер
  await browser.close();
})();
