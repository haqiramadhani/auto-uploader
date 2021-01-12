const publishToPersonalFeed = async (page, text, medias) => {
    await page.waitForNavigation();
    await page.waitForSelector("[aria-label=\"Create\"]");
    await page.click("[aria-label=\"Create\"]");
    await page.waitForSelector("[aria-label=\"Create\"][role=\"dialog\"] > div > div > div > div > div > [data-visualcompletion=\"ignore-dynamic\"]");
    await page.click("[aria-label=\"Create\"][role=\"dialog\"] > div > div > div > div > div > [data-visualcompletion=\"ignore-dynamic\"]");
    await page.waitForSelector("div[role=\"presentation\"] > div > div > div > div > div > div > [contenteditable=\"true\"]");
    if (medias) {
        const inputUploadHandle = await page.$('form > div > div > div > div > div > div > div > div > div > input');
        for (const media of medias) {
            await inputUploadHandle.uploadFile(media);
        }
        await page.waitForSelector("[aria-label=\"Remove post attachment\"]");
        await page.waitForTimeout(3000);
    }
    await page.type("div[role=\"presentation\"] > div > div > div > div > div > div > [contenteditable=\"true\"]", text);
    await page.click("[aria-label=\"Post\"]");
}

module.exports = publishToPersonalFeed