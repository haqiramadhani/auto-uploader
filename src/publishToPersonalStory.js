const publishToPersonalStory = async (page, text) => {
    await page.waitForNavigation();
    await page.goto("https://www.facebook.com/stories/create");

}