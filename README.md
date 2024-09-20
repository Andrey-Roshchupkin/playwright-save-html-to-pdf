Обновлённый файл `README.md` с учётом папки `images`:

---

# Проект: Сохранение HTML в PDF с использованием Playwright и TypeScript

Этот проект использует **Playwright** и **TypeScript** для рендеринга локальной HTML-страницы и сохранения её в PDF формате. Программа динамически загружает HTML-страницу, дожидается полной загрузки всех изображений и сохраняет результат в PDF, учитывая размеры контейнера изображений.

## Структура проекта

```bash
├── src
│   ├── images         # Папка с изображениями, пронумерованными начиная с 1 (например, 1.jpg)
│   └── index.html     # HTML-страница с изображениями
├── generatePDF.ts      # TypeScript скрипт для генерации PDF
├── package.json        # Файл с зависимостями проекта
├── tsconfig.json       # Конфигурация TypeScript
└── README.md           # Документация проекта
```

## Предварительные требования

1. Node.js установлен (версия 14 и выше).
2. Установлен TypeScript и Playwright.

## Установка

1. Склонируйте репозиторий проекта:

   ```bash
   git clone <URL вашего репозитория>
   ```

2. Перейдите в директорию проекта:

   ```bash
   cd playwright-save-html-to-pdf
   ```

3. Установите зависимости проекта:

   ```bash
   npm install
   ```

4. Установите необходимые браузеры для Playwright:

   ```bash
   npx playwright install
   ```

## Описание файлов

- **`src/index.html`** — HTML-файл с галереей изображений, который будет преобразован в PDF.
- **`src/images`** — Папка, содержащая изображения, пронумерованные начиная с 1 (например, 1.jpg, 2.jpg и т.д.).
- **`generatePDF.ts`** — скрипт на TypeScript, который:
  - Запускает браузер Playwright.
  - Загружает локальный HTML-файл.
  - Дожидается загрузки всех изображений.
  - Измеряет размер контейнера с изображениями.
  - Генерирует PDF файл с использованием этих размеров.

## Как запустить проект

1. Убедитесь, что изображения находятся в папке `src/images`, и они пронумерованы начиная с 1 (например, 1.jpg, 2.jpg и т.д.).
2. Запустите скрипт для генерации PDF:

   ```bash
   npx ts-node generatePDF.ts
   ```

3. После выполнения скрипта будет создан файл `output.pdf` в корневой директории проекта с содержимым из HTML-файла.

## Примечания

- Путь к файлу `index.html` должен быть корректным и расположен в папке `src`.
- В скрипте используется динамическое измерение размеров контейнера с изображениями, чтобы сохранить PDF с правильными пропорциями.

## Возможные улучшения

- Добавить обработку ошибок при отсутствии изображений.
- Возможность кастомизации настроек PDF, таких как ориентация страницы или добавление заголовков и колонтитулов.

## Лицензия

Этот проект находится под лицензией MIT.

---
