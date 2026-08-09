class Maidlog{

    constructor(page){
        this.page=page;
        this.username="//input[@id='email']";
        this.password="//input[@id='password']";
        this.button="//button[@type='submit']";
        this.prof="//div[@title='User Options']";
        this.logout="//button[contains(text(),'🚪 Logout')]"

    }

    async loginToMaid(){
        await this.page.fill(this.username,'pooja@example.com');
        await this.page.fill(this.password,'password123');
        await this.page.click(this.button);
        await this.page.click(this.prof);
        await this.page.click(this.logout);

    }
}
module.exports=Maidlog;