import  LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        
       await LoginPage.openmain();
        await browser.pause(4000);
        await LoginPage.entryadd();
        await browser.pause(3000);
        await LoginPage.close();
        await browser.pause(3000);
        //await LoginPage.screenshot();
        await browser.saveScreenshot('./test/pageobjects/ss.png');
        await browser.pause(3000);

        });
});


