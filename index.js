require("dotenv").config();
const puppeteer = require("puppeteer-core");
const path = require("path");
const loginToFacebook = require(path.join(__dirname, "src", "loginFacebook"));
const publishToGroup = require(path.join(__dirname, "src", "publishToGroup"));

const {FB_EMAIL, FB_PASSWORD} = process.env;

(async () => {
    const name = "Robot Digital"
    const browser = await puppeteer.launch({
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        headless: false,
        slowMo: true,
        defaultViewport: null,
    })
    const [page] = await browser.pages();
    await loginToFacebook(page, name, FB_EMAIL, FB_PASSWORD);
    await publishToGroup(
        page,
        "https://www.facebook.com/groups/1105593376220841",
        "Robot Digital!"
    );
})()