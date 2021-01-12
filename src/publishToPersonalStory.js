const publishToPersonalStory = async (page, textOrMedia) => {
    await page.waitForNavigation();
    await page.goto("https://www.facebook.com/stories/create");
    await page.waitForSelector("[aria-label=\"Stories Creation Preview\"] > div > div > div > div > div:nth-child(3) > div");
    try {
        const inputUploadHandle = await page.$("[aria-label=\"Stories Creation Preview\"] > div > div > div > div > input");
        await inputUploadHandle.uploadFile(textOrMedia);
    } catch (e) {
        await page.click("[aria-label=\"Stories Creation Preview\"] > div > div > div > div > div:nth-child(3) > div");
        await page.waitForSelector("textarea");
        await page.type("textarea", textOrMedia);
    }
    await page.waitForTimeout(3000);
    await page.click("[aria-label=\"Share to Story\"]");
}

module.exports = publishToPersonalStory;