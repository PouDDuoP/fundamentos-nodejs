// Web scraping es una tecnica utilizada mediante software para extraer informacion de sitios web, usualmente se utiliza para simular la navegacion de un humano
const { default: puppeteer } = require("puppeteer");

(async () => {
  console.log('Iniciamos el navegador!');
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js')

  var titleOne = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(h1.innerHTML)
    return h1.innerHTML
  });

  console.log(titleOne);

  console.log('Cerramos el navegador...');
  browser.close();
  console.log('Navegador cerrado');

})();
