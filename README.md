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


## Quality Strategy

### Unit tests 📦️
We are using [Vitest](https://vitest.dev/guide/) 
and [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for our unit tests.

Please aim for about 80% or greater test coverage. Perfection on metrics can often be the wrong target, so we aim for "good enough"

Automated tests are incorporated into GitHub Actions so we can easily see if our application is safe to deploy.

You can run the unit tests like so:

Command lines
```sh
npm run test
```

UI Mode
```sh
npm run test:ui 
```

When writing new tests, please follow the [Testing Library Guiding Principles](https://testing-library.com/docs/guiding-principles)


### End-to-end (E2E) tests ↔️

We will use [Playwright](https://playwright.dev/) (to be installed after #4) for testing. 
