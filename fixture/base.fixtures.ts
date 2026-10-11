import { expect, test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';

type SleekFlowFixtures = {
  loginPage: LoginPage;
  signupPage: SignupPage;
};

export const test = base.extend<SleekFlowFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
  signupPage: async ({ page }, use) => {
    const signupPage = new SignupPage(page);
    await signupPage.goto();
    await use(signupPage);
  },
});

export { expect };
