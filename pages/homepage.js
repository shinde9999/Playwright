class HomePage{

    constructor (page){

        this.page = page;
        this.menu="//img[@alt='menu']";
        this.logoutoption="//button[normalize-space()='Sign out']";

    }
    async logoutFromApplication(){

        await this.page.click(this.menu);
        await this.page.click(this.logoutoption);
    }

}
module.exports = HomePage;
