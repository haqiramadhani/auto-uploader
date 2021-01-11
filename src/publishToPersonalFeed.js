const textToPersonalFeed = async (page, textPost) => {
    await page.waitForNavigation();
    await page.waitForSelector("[aria-label=\"Create\"]");
    await page.click("[aria-label=\"Create\"]");
    await page.waitForSelector("[aria-label=\"Create\"][role=\"dialog\"] > div > div > div > div > div > [data-visualcompletion=\"ignore-dynamic\"]");
    await page.click("[aria-label=\"Create\"][role=\"dialog\"] > div > div > div > div > div > [data-visualcompletion=\"ignore-dynamic\"]");
    await page.waitForSelector("div[role=\"presentation\"] > div > div > div > div > div > div > [contenteditable=\"true\"]");
    await page.type("div[role=\"presentation\"] > div > div > div > div > div > div > [contenteditable=\"true\"]", textPost);
    await page.click("[aria-label=\"Post\"]");
}

const imageToPersonalFeed = async (page, image, caption) => {
    await page.waitForNavigation();
    await page.waitForSelector("[aria-label=\"Create\"]");
    await page.click("[aria-label=\"Create\"]");
    await page.waitForSelector("[aria-label=\"Create\"][role=\"dialog\"] > div > div > div > div > div > [data-visualcompletion=\"ignore-dynamic\"]");
    await page.click("[aria-label=\"Create\"][role=\"dialog\"] > div > div > div > div > div > [data-visualcompletion=\"ignore-dynamic\"]");
    await page.waitForSelector("div[role=\"presentation\"] > div > div > div > div > div > div > [contenteditable=\"true\"]");
    const inputUploadHandle = await page.$('form > div > div > div > div > div > div > div > div > div > input');
    await inputUploadHandle.uploadFile(image);
    // await page.click("[aria-label=\"Photo/Video\"]");
    await page.type("div[role=\"presentation\"] > div > div > div > div > div > div > [contenteditable=\"true\"]", caption);
    await page.waitForSelector("[aria-label=\"Remove post attachment\"]");
    await page.waitForTimeout(3000);
    await page.click("[aria-label=\"Post\"]");
}

module.exports = {
    textToPersonalFeed,
    imageToPersonalFeed,
}