require("dotenv").config();
const puppeteer = require("puppeteer-core");
const path = require("path");
const loginToFacebook = require(path.join(__dirname, "src", "loginFacebook"));
const {
    textToPersonalFeed,
    imageToPersonalFeed
} = require(path.join(__dirname, "src", "publishToPersonalFeed"));

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
    await imageToPersonalFeed(page, "C:\\Users\\hakir\\Downloads\\Logo Robot Digital Square.png", "Robot Digital!")
})()