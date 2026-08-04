class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = '#email1';
        this.password = "//input[@id='password1']";
        this.loginbutton = "//button[normalize-space()='Sign in']";
    }

    async loginToApplication(){

        await this.page.fill(this.username, "aniketshinde12457@gmail.com");
        await this.page.fill(this.password, "@Aniket2003");
        await this.page.click(this.loginbutton);
        // await this.page.waitForTimeout(2000)
        // await this.page.pause()
    }


}
module.exports = LoginPage;