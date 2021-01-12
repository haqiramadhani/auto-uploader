const publishToGroup = async (page, groupUrl, text) => {
    await page.waitForNavigation();
    await page.goto(groupUrl);
    await page.waitForSelector("[data-pagelet=\"GroupInlineComposer\"] > div > div > div > div > div > div");
    await page.click("[data-pagelet=\"GroupInlineComposer\"] > div > div > div > div > div > div");
    await page.waitForSelector("[role=\"presentation\"] > div > div > div > div > div > div > [role=\"textbox\"] > div");
    await page.type("[role=\"presentation\"] > div > div > div > div > div > div > [role=\"textbox\"] > div", text);
    await page.click("[aria-label=\"Post\"]");
}

module.exports = publishToGroup;