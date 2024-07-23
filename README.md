![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fwomeninsoftwareengineeringjp.github.io%2Fhome%2F&style=for-the-badge)
![Languages](https://img.shields.io/github/languages/count/WomenInSoftwareEngineeringJP/home?style=for-the-badge)
![GitHub Org's stars](https://img.shields.io/github/stars/WomenInSoftwareEngineeringJP?style=for-the-badge)



# WiSE JP Homepage


## Prerequisites

1. Review the [CONTRIBUTING](https://github.com/WomenInSoftwareEngineeringJP/home/blob/main/CONTRIBUTING.md) guidelines
2. NodeJS to match the version [here](https://github.com/WomenInSoftwareEngineeringJP/home/blob/main/.nvmrc)

## Running the app locally

Install dependencies
```sh
npm i
```

Run for dev mode
```sh
npm run dev
```

Build for prod
```sh
npm run build
```


# Quality Strategy

## Unit tests 📦️
We are using [Vitest](https://vitest.dev/guide/) 
and [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for our unit tests.

Please aim for about 80% or greater test coverage. Perfection on metrics can often be the wrong target, so we aim for "good enough"

Automated tests are incorporated into GitHub Actions so we can easily see if our application is safe to deploy.

You can run the unit tests like so:

Command lines
```sh
npm run test
```

[UI Mode](https://vitest.dev/guide/ui)
```sh
npm run test:ui 
```

When writing new tests, please follow the [Testing Library Guiding Principles](https://testing-library.com/docs/guiding-principles)


## End-to-end (E2E) tests ↔️

We use [Playwright](https://playwright.dev/) for end-to-end testing. 

You can run it in terminal mode with:
```sh
npm run test:e2e
```

or in UI mode with:
```sh
npm run test:e2e:ui
```

### Playwright & CI/CD

Playwright runs against the main branch automatically via GitHub Actions. Since we only have a production environment, it does not run on branches. 
If you notice a failed run, here's how to troubleshoot it:


1. Go to the "Actions" tab and select the failing run
2. Examine the logs, and download the artifact
<img width="1587" alt="Screenshot 2024-07-22 at 11 34 57 PM" src="https://github.com/user-attachments/assets/7eb09a4f-8581-4968-84fb-e1c3e765b17a">

3. Unzip the artifact to find one or more folders with the name of the test. Each folder should contain a file called `trace.zip`.
4. Open up the [Trace Viewer](http://trace.playwright.dev), which is a Progressive Web App (basically a special site that runs locally on your machine, not on a server).
5. Drag the `trace.zip` file into the Trace Viewer and you can see the screenshots from the test run

<img width="1587" alt="Screenshot 2024-07-22 at 11 35 14 PM" src="https://github.com/user-attachments/assets/0273ff9e-67a1-48ef-984a-5d7d5554d190">

