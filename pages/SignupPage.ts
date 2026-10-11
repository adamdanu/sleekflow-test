import { Locator, Page } from '@playwright/test';

export class SignupPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(): Promise<void> {

        await this.page.goto('/en?screen_hint=signup');
    }

    //identifier signup page
    get heading(): Locator {
        return this.page.getByRole('heading', { name: 'Create your account' });
    }
    get emailField(): Locator {
        return this.page.getByRole('textbox', { name: 'Email address' });
    }
    get termsCheckbox(): Locator {
        return this.page.getByRole('checkbox', { name: /Terms of Service/ });
    }
    get signUpButton(): Locator {
        return this.page.getByRole('button', { name: 'Sign up', exact: true });
    }
    get emptyEmailError(): Locator {
        return this.page.getByText('Please enter an email address').first();
    }
    get invalidEmailError(): Locator {
        return this.page.getByText('Email is not valid').first();
    }
    get googleSignUpButton(): Locator {
        return this.page.getByRole('button', { name: 'Continue with Google' });
    }
    get appleSignUpButton(): Locator {
        return this.page.getByRole('button', { name: 'Continue with Apple' });
    }
    get signInLink(): Locator {
        return this.page.getByRole('link', { name: 'Sign in' });
    }

    // password signup page
    get passwordField(): Locator {
        return this.page.getByRole('textbox', { name: 'Password' });
    }
    get passwordInput(): Locator {
        return this.page.locator('#password');
    }
    get showPasswordSwitch(): Locator {
        return this.page.getByRole('switch', { name: 'Show password' });
    }
    get passwordRequiredError(): Locator {
        return this.page.getByText('Password is required').first();
    }
    get weakPasswordError(): Locator {
        return this.page.getByText('The password is too weak.').first();
    }
    get passwordRequirementsPanel(): Locator {
        return this.page.getByText('Your password must contain').first();
    }
    get editEmailLink(): Locator {
        return this.page.getByRole('link', { name: 'Edit email address' });
    }

    async fillEmail(email: string): Promise<void> {
        await this.emailField.fill(email);
    }

    async acceptTerms(): Promise<void> {
        // The checkbox input is covered by its label and a footer overlay,
        // so check it with force to bypass the pointer-interception checks.
        await this.termsCheckbox.check({ force: true });
    }

    async fillEmailAndAcceptTerms(email: string): Promise<void> {
        await this.fillEmail(email);
        await this.acceptTerms();
    }

    async clickSignUp(): Promise<void> {
        await this.signUpButton.click();
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordField.fill(password);
    }

    async signUp(email: string, password: string): Promise<void> {
        await this.fillEmailAndAcceptTerms(email);
        await this.clickSignUp();
        await this.fillPassword(password);
        await this.clickSignUp();
    }
}
