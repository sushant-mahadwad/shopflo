# 🛒 SauceDemo Automation Testing Suite

This repository contains an automated testing suite for **SauceDemo** using **Playwright** and **JavaScript**.

---

## 🚀 Framework Choice + Why?

I chose **Playwright** over Selenium for the following reasons:

### ✅ Auto-Waiting

Playwright automatically waits for elements to be actionable, reducing flaky tests and eliminating the need for most explicit waits.

### ⚡ Speed

It executes tests in parallel by default, significantly reducing execution time.

### 🔍 Rich Tooling

Built-in **Trace Viewer**, **Screenshots**, and **HTML Reporting** make debugging much easier.

### 🔄 Native CI/CD Integration

Playwright provides a ready-to-use GitHub Actions configuration, making CI/CD setup straightforward.

---

## 📈 Extension Plan

To scale this automation extensively, I plan to implement the following enhancements:

### ⚡ Parallelisation

Currently, tests run in parallel locally.

As an extension, I would implement **Sharding in GitHub Actions** to split tests across multiple machines, reducing CI execution time from minutes to seconds.

### 📊 Reporting & Observability

* Integrate **Allure Reports** for historical execution data and visual dashboards.
* Capture **Video Recordings** only on failures.
* Capture **Network Traces** only on failures.
* Attach failure artifacts automatically for faster debugging while minimizing storage usage.

### 🏗️ Page Object Model (POM)

Refactor the current scripts into a **Page Object Model (POM)** structure to separate selectors from test logic.

Benefits include:

* Better maintainability
* Improved readability
* Reduced code duplication
* Easier framework scalability

---

## ▶️ How to Run

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install --with-deps
```

### 4. Execute the Test Suite

```bash
npx playwright test
```

---

## 🛠️ Tech Stack

* Playwright
* TypeScript
* GitHub Actions
* Node.js

---

## 📋 Future Enhancements

* Allure Reporting
* Cross-Browser Execution
* GitHub Actions Sharding
* Docker Support
* POM Architecture
* Failure Video & Trace Attachments
