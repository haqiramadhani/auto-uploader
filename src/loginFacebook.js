const fs = require("fs");
const path = require("path");
const userDataPath = path.join(__dirname, "..", "userData")

const loginToFacebook = async (page, name, email, password) => {
    const files = await fs.readdirSync(userDataPath);
    const fileData = files.find(file => file.replace(".data.json", "") === "fb-" + name);
    if (fileData) {
        const cookies = await fs.readFileSync(path.join(userDataPath, fileData));
        await page.setCookie(...JSON.parse(cookies));
        await page.goto("https://facebook.com");
        await page.click("#u_0_b");
        await page.type("#pass", password + "\n");
    } else {
        await page.goto("https://facebook.com");
        await page.type("#email", email);
        await page.type("#pass", password + "\n");
        const cookies = await page.cookies("https://www.facebook.com");
        fs.writeFileSync(path.join(userDataPath, `fb-${name}.data.json`), JSON.stringify(cookies));
    }
}

module.exports = loginToFacebook