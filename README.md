# Dynamic Framework

## Storybook

+ [react](https://react.dynamicframework.dev/)

## Setup

+ `git clone --recurse-submodules git@github.com:dynamic-framework/dynamic-ui.git` use `--recurse-submodules` to clone the submodules to
+ `cd dynamic-ui` to move to the cloned repository
+ `pnpm install` to install dependencies
+ `pnpm exec lerna run build --no-private` to build all the no private packages.

## Packages
| Project                       | Package                       | Version                                                                                                                             | Links                                               |
|-------------------------------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **Dynamic Framework**         | @dynamic-framework/ui         | [![npm](https://img.shields.io/npm/v/@dynamic-framework/ui?style=flat-square)](https://www.npmjs.com/package/@dynamic-framework/ui) | [`README.md`](libraries/dynamic-ui/README.md)               |
| **Dynamic Framework Angular** | @dynamic-framework/ui-angular | ![npm](https://img.shields.io/npm/v/@dynamic-framework/ui-angular?style=flat-square)                                                | [`README.md`](libraries/ui-angular/README.md)       |
| **Dynamic Framework Vue**     | @dynamic-framework/ui-vue     | ![npm](https://img.shields.io/npm/v/@dynamic-framework/ui-vue?style=flat-square)                                                    | [`README.md`](libraries/ui-vue/README.md)           |
| **Dynamic Framework React**   | @dynamic-framework/ui-react   | [![npm](https://img.shields.io/npm/v/@dynamic-framework/ui-react?style=flat-square)](https://www.npmjs.com/package/@dynamic-framework/ui-react)                                              | [`README.md`](libraries/dynamic-ui-react/README.md) |

## How to run a template

+ Move to a template folder, e.g. `cd templates/dynamic-detail-dashboard-template`
+ `pnpm start` to run the template

## How to add a new template

+ Use the recommended tool for the selected framework for convenience
  + [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
  + [angular cli](https://angular.io/cli)
  + [vue cli](https://cli.vuejs.org/guide/installation.html)
> If you are going to use a builder or cli, create the template in an external folder to the repo to avoid conflicts.

> You can use any tool to create a template, you can even configure it from scratch by creating your own webpack configuration for example.

+ Use `pnpm import` to generate a pnpm-lock.yaml from another package manager's lockfile (ignore peer dependencies problem)
+ Delete all another lockfile and the node_modules folder
+ Move the new template folder to the `templates` folder in the repo
+ Run `pnpm install` to install the template dependencies.

## Working in a template with dynamic-framework changes

1. commit in template.
2. commit in the dynamic-framework adding the template.
3. PR dynamic-framework (branch → develop) template (branch → master)
4. merge PR of dynamic-framework. (branch → develop)
5. publish dynamic-framework. (develop → master)
6. update the dynamic-framework version in the template (commit with version)
7. merge PR of template. (branch → master)
8. add submodule change (new hash of template) and commit in the dynamic-framework on develop.

## caveats

- temporarily unmanaged packages must carry `*` in the workspace dependencies.
- after publish a dynamic-framework version we need to change the dependency version in the template in the corresponding PR.
- after update the dependency version in the template we need to commit and push the new commit hash of template to develop in the workspace.
- temporarily unmaintained packages must have `private: true` in the `package.json` to not be included in the ci.
- lerna can run scripts on all packages, lint-staged example: `npx lerna run lint-staged`, it will only run lint-staged on packages that have the script defined.

## Other links

+ [POC](POC.md)
+ Lerna [documentation](https://lerna.js.org/)
+ Stencil [documentation](https://stenciljs.com/docs/overview)
+ Stencil GitHub [repository](https://github.com/ionic-team/stencil)
+ Stencil output target GitHub [repository](https://github.com/ionic-team/stencil-ds-output-targets)
+ (reference) Ionic Framework GitHub [repository](https://github.com/ionic-team/ionic-framework)
+ (reference) Baloise design system GitHub [repository](https://github.com/baloise/design-system)
+ (reference) Bulmil design system GitHub [repository](https://github.com/Gomah/bulmil)
