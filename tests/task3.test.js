const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto('http://127.0.0.1:5500/index.html'); // Замініть 'path-to-your-html-file.html' на шлях до вашого HTML-файлу

  // Вибираємо елементи DOM за їх id
  const dropdown = await page.$('#dropdown');
  const deleteButton = await page.$('#deleteButton');

  // Перевірка наявності елементів
  if (dropdown && deleteButton) {
    // Вибираємо перший елемент випадаючого списку
    await page.select('#dropdown', 'option1');

    // Клікаємо на кнопку "Видалити вибраний елемент"
    await deleteButton.click();

    const option1 = await page.$('option[value="option1"]');
    if (!option1) {
      console.log('Перший елемент був успішно видалений.');
    } else {
      console.log('Виникла помилка. Перший елемент не був видалений.');
    }
  } else {
    console.log('Елементи DOM не знайдені.');
  }

  await browser.close();
})();
