const publishToPersonalStory = async (page, text) => {
    await page.waitForNavigation();
    await page.goto("https://www.facebook.com/stories/create");
    await page.waitForSelector("[aria-label=\"Stories Creation Preview\"] > div > div > div > div > div:nth-child(3) > div");
    await page.click("[aria-label=\"Stories Creation Preview\"] > div > div > div > div > div:nth-child(3) > div");
    await page.waitForSelector("textarea");
    await page.type("textarea", text);
    await page.click("[aria-label=\"Share to Story\"]");
}

module.exports = publishToPersonalStory;