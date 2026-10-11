import { Page, Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page
    }
    async goto(): Promise<void> {
        await this.page.goto('/en')
    }
    //identifier login page
    get heading(): Locator {
        return this.page.getByRole('heading', { name: 'Welcome Back' });
    }
    get emailOrUsernameField(): Locator {
        return this.page.getByRole('textbox', { name: 'Email or username' });
    }
    get continueButton(): Locator {
        return this.page.getByRole('button', { name: 'Continue', exact: true });
    }
    get emptyEmailError(): Locator {
        return this.page.getByText('Email address or username is required').first();
    }
    get signUpLink(): Locator {
        return this.page.getByRole('link', { name: 'Sign up' });
    }
    get googleSignInButton(): Locator {
        return this.page.getByRole('button', { name: 'Continue with Google' });
    }
    get appleSignInButton(): Locator {
        return this.page.getByRole('button', { name: 'Continue with Apple' });
    }
    get orDivider(): Locator {
        return this.page.getByText('OR', { exact: true });
    }

    //password login page

    get passwordField(): Locator {
        return this.page.getByRole('textbox', { name: 'Password' });
    }
    get passwordInput(): Locator {
        return this.page.locator('#password');
    }
    get signInButton(): Locator {
        return this.page.getByRole('button', { name: 'Sign in', exact: true });
    }
    get wrongCredentialsError(): Locator {
        return this.page.getByText('Wrong username or password').first();
    }
    get emptyPasswordError(): Locator {
        // .first() is the screen-reader-only announcer (clipped, not visible);
        // .last() is the visible inline error next to the field.
        return this.page.getByText('Password is required').last();
    }
    get showPasswordSwitch(): Locator {
        return this.page.getByRole('switch', { name: 'Show password' });
    }
    get keepMeSignedInCheckbox(): Locator {
        return this.page.getByRole('checkbox', { name: 'Keep me signed in' });
    }
    get resetPasswordLink(): Locator {
        return this.page.getByRole('link', { name: 'Reset password' });
    }
    get editEmailLink(): Locator {
        return this.page.getByRole('link', { name: 'Edit email address' });
    }

    async enterEmailOrUsername(text: string): Promise<void> {
        await this.emailOrUsernameField.fill(text);
    }

    async clickContinue(): Promise<void> {
        await this.continueButton.click();
    }

    async clickSignIn(): Promise<void> {
        await this.signInButton.click();
    }

    async login(email: string, password: string): Promise<void> {
        await this.enterEmailOrUsername(email);
        await this.clickContinue();
        await this.passwordField.fill(password);
        await this.clickSignIn();
    }

}
