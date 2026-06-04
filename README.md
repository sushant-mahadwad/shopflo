This repository contains an automated testing suite for SauceDemo using Playwright and TypeScript.

Framework Choice + Why?
I chose Playwright over Selenium for the following reasons:

Auto-waiting: Playwright automatically waits for elements to be actionable, reducing "flaky" tests.

Speed: It executes tests in parallel by default, significantly reducing execution time.

Rich Tooling: Built-in trace viewer and HTML reporting make debugging much easier.

Native CI/CD Integration: Playwright provides a ready-to-use GitHub Action configuration.

Extension Plan
To scale this automation extensively, I plan to implement:

Parallelisation: Currently, tests run in parallel locally. For the extension, I would implement Sharding in GitHub Actions to split tests across multiple machines, reducing CI time from minutes to seconds.

Reporting & Observability: - Integrate Allure Report for historical data and visual dashboards.

Attach Video recordings and Network traces only on failure to save storage while providing full debugging context.

Page Object Model (POM): Refactor the current scripts into a POM structure to decouple the selectors from the test logic, making the suite easier to maintain.

How to Run
Clone the repo.

Run npm install.

Run npx playwright test