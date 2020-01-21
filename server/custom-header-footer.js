// custom-header-footer.js
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com/", {
    waitUntil: "networkidle2"
  });
  await page.setViewport({ width: 1680, height: 1050 });
  await page.pdf({
    path: `with_header_footer.pdf`,
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: `<div style="font-size:7px;white-space:nowrap;margin-left:38px;">
                        ${new Date().toDateString()}
                        <span style="margin-left: 10px;">Generated PDF</span>
                    </div>`,
    footerTemplate: `<div style="font-size:7px;white-space:nowrap;margin-left:38px;width:100%;">
                        Generated PDF
                        <span style="display:inline-block;float:right;margin-right:10px;">
                            <span class="pageNumber"></span> / <span class="totalPages"></span>
                        </span>
                    </div>`,
    margin: {
      top: '38px',
      right: '38px',
      bottom: '38px',
      left: '38px'
    }
  });

  await browser.close();
})();
