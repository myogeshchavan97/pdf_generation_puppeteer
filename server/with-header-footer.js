// with-header-footer.js
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com/", {
    waitUntil: "networkidle2"
  });
  await page.setViewport({ width: 1680, height: 1050 });
  await page.pdf({
    path: "with_header_footer.pdf",
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    margin: {
      top: '38px',
      right: '38px',
      bottom: '38px',
      left: '38px'
    }
  });

  await browser.close();
})();
