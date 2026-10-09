# Dynamic UI

<!-- Badges -->
[![npm version](https://img.shields.io/npm/v/@dynamic-framework/ui-react?style=flat-square)](https://www.npmjs.com/package/@dynamic-framework/ui-react)
[![Build & Publish](https://img.shields.io/github/actions/workflow/status/dynamic-framework/dynamic-ui/release-please.yml?style=flat-square)](https://github.com/dynamic-framework/dynamic-ui/actions/workflows/release-please.yml)
[![npm downloads](https://img.shields.io/npm/dm/@dynamic-framework/ui-react?style=flat-square)](https://www.npmjs.com/package/@dynamic-framework/ui-react)
[![License](https://img.shields.io/badge/License-DynamicFramework-blue?style=flat-square)](https://raw.githubusercontent.com/dynamic-framework/dynamic-ui/refs/heads/master/LICENSE.md)


Quickly create feature-rich financial applications through a robust micro frontend architecture of React-based components with customizable templates built for integration.


## Getting Started

### Requirements

- Node.js `>= 22.0.0`

### Browser Support

`.browserslistrc` declares the minimum supported browsers for both the JavaScript and the CSS of the library:

| Browser | Minimum |
| --- | --- |
| Chrome / Edge | 105 |
| Firefox | 121 (and the current ESR) |
| Safari / iOS Safari | 15.4 |

The floor comes from features the library already relies on: `:has()` in form validation and input group styles (Chrome 105, Firefox 121), and `Array.prototype.at()` and `:focus-visible` (Safari 15.4).

- The library ships modern JavaScript as is: `tsc` targets ES2017 syntax, but there is no API transpilation or polyfills (`core-js`). Dependencies such as React or framer-motion have their own minimums.
- `npm run eslint` checks `src` with `eslint-plugin-compat` against `.browserslistrc`. It detects global APIs (`queueMicrotask`, `Object.fromEntries`, …) but not instance methods (`.at()`, `.flatMap()`, `MediaQueryList.addEventListener`), so review those by hand.
- `npm run stylelint:compat` checks the compiled `dist/css/dynamic-ui.min.css` (run `npm run build` first). It ignores features no version of a target browser supports, such as `cursor` on iOS or `scrollbar-width` styling, because they only degrade the experience.
- `autoprefixer` reads the same file when building the CSS.

Supporting older browsers requires refactoring that code and adding polyfills; open an issue first.

### Installation

```bash
npm install @dynamic-framework/ui-react
```

For more details, visit the [npm package page](https://www.npmjs.com/package/@dynamic-framework/ui-react).

### CSS Distribution Change

> **Important:** Starting from version 2.3.0, only `dynamic-ui.css` and `dynamic-ui.min.css` are distributed. The previous variants `dynamic-ui-root.css` and `dynamic-ui-non-root.css` have been removed to simplify upgrades and avoid desynchronization issues.

- To customize design tokens or variables, include `dynamic-ui.css` and override the variables you need in your own stylesheet or snippet.
- All default variables are included in the main bundle, ensuring safe upgrades and consistent behavior.
- For advanced customization, refer to the [Storybook design tokens documentation](https://react.dynamicframework.dev/) and [docs.modyo.com](https://docs.modyo.com/en/dynamic/).

### Development Commands

For local development and testing, you can use the following commands after clone the project:

-   **Install deps:** Install required deps for development
    ```bash
    npm install
    ```

-   **Build:** Compiles the project for distribution.
    ```bash
    npm run build
    ```
-   **Test:** Runs all unit tests.
    ```bash
    npm test
    ```
-   **Test with Coverage:** Runs unit tests and generates a coverage report.
    ```bash
    npm run test:coverage
    ```
-   **Storybook:** Starts the Storybook development server to browse components.
    ```bash
    npm run storybook
    ```

### Documentation and Useful Links
- **Official Documentation:** Find guides and in-depth documentation at [docs.modyo.com/en/dynamic](https://docs.modyo.com/en/dynamic/).
- **Framework Website:** Visit our main site at [dynamicframework.dev](https://dynamicframework.dev).
- **Component Library:** Explore our components in Storybook at [react.dynamicframework.dev](https://react.dynamicframework.dev/).

<br />
<br />

**Made with 💚 by Modyo**