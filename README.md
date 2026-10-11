# SleekFlow Test Automation

Playwright test automation for sleekflow.io

## How to initialize a Playwright project for testing the sleekflow.io website?

1. Create folder for the project
2. Create folder pages, utils, fixture, and tests for the POM
3. Install Playwright: `npm init playwright@latest`
4. Install dotenv for storing sensitive information
5. Create `.env` in folder root
6. Import `dotenv` and `path` in `playwright.config.ts`
7. Uncomment `dotenv.config({ path: path.resolve(__dirname, '.env') });` in `playwright.config.ts`

## Test Case Planning

### What are the key elements you would identify and test in the Signup flow?

- Page load with all element
- User successfully signing up
- Password rule
- Input field validation
- Email format validation

### What validation steps would you include in the Login test case?

- Validate all elements shown
- Validate the form input
- Validate the login success and verify it with the URL

#### Follow-up: How would you handle testing with both valid and invalid credentials?

For valid and invalid credential, I keep it separate and save the credential in ENV

## Locator Strategy

### How would you locate elements such as input fields, buttons, and error messages on the signup or login page?

We can use `--debug` to look for the locator or using MCP to explore the site under test, we will prioritize using `getByRole` and store the locator in `pages/`

## Waits and Timing

### How do you handle asynchronous events, such as waiting for a confirmation message or a redirect after login?

Playwright already have auto-waits for actionability on every action, and web-first assertions:

```typescript
await expect(loginPage.page).toHaveURL(
    /app\.sleekflow\.io\/en\/(inbox\/?screen_hint=login|onboarding\/shared-inbox-checklist)/
);

await expect(loginPage.emailOrUsernameField).toBeHidden();
```

## Test Data Management

### How would you handle creating new test users for the Signup tests without cluttering the system with dummy data?

- Each run generates a unique email via plus-addressing on an inbox we own, so no collisions and no shared state
- Every test account is tagged `${prefix}+${stamp}${rand}@gmail.com`, so it can be found and bulk-deleted
- We can clean up via an API endpoint (if available) in an `afterAll`/global teardown

## Reusability

### How would you structure your code to reuse components like login steps across multiple test cases?

We use POM to separate locators and action, Custom Playwright fixtures handle setup (page instantiation + navigation) so tests only declare what they need. Common config like credentials lives in a shared utils module (email generator). If we have more testcase, we can use storageState, so every test doesn't need to follow the login step.

## CI Integration

### How would you integrate your Playwright test suite into a CI/CD pipeline?

We can configure the test running when PR happens (we can run smoke test on PR), and running full regression using manual trigger, if we run full regression on PR when we have a lot of tests, it will use a lot of time on 1 PR only. We can differentiate using tags on the Playwright testcase.

## Error Handling & Reporting

### How would you capture screenshots, videos, or logs when a test fails, and what would you do with that information?

```typescript
trace: 'on-first-retry',
screenshot: 'only-on-failure',
video: 'retain-on-failure',
```

Also we make the test result and the playwright report uploaded as an artifact, so when the test is complete we can check the report from there and do debugging for the failed one.
