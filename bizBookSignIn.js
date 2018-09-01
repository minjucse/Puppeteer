var puppeteer = require('puppeteer');

async function search() {
    var width = 1600;
    var height = 1040;

    var options = {
        headless: false,
        slowMo: true,
        args: ['--window-size=${width},${height}']
    };

    var browser = await puppeteer.launch(options);
    var page = await browser.newPage();
    var vp = { width: width, height: height };
    await page.setViewport(vp);

    await page.goto('http://web.bizbook365.com/#/signin');

    await page.waitFor(2000);
    await page.click('#btn-login');
    await page.waitForNavigation();

}

search();