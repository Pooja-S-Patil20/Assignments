
import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#username');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }
    
    public get entryad () {
        return $("//a[@href='/entry_ad']");

    }
    public get Close () {
        return $("//p[contains(text(),'Close')]")
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        //await (await this.OpenEntryAdd).click();
    }

    public async entryadd (){
        await this.entryad.click();
    }

    public async close() {
        await this.Close.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
    public openmain () {
        return super.open('');
    }

}

export default new LoginPage();
