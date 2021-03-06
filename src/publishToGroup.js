const publishToGroup = async (page, groupUrl, text, medias) => {
    await page.waitForNavigation();
    await page.goto(groupUrl);
    await page.waitForSelector("[data-pagelet=\"GroupInlineComposer\"] > div > div > div > div > div > div");
    await page.click("[data-pagelet=\"GroupInlineComposer\"] > div > div > div > div > div > div");
    await page.waitForSelector("[role=\"presentation\"] > div > div > div > div > div > div > [role=\"textbox\"] > div");
    if (medias) {
        const inputUploadHandle = await page.$('form > div > div > div > div > div > div > div > div > div > input');
        for (const media of medias) {
            await inputUploadHandle.uploadFile(media);
        }
        await page.waitForSelector("[aria-label=\"Remove post attachment\"]");
        await page.waitForTimeout(3000);
    }
    await page.type("[role=\"presentation\"] > div > div > div > div > div > div > [role=\"textbox\"] > div", text);
    await page.click("[aria-label=\"Post\"]");
}

module.exports = publishToGroup;