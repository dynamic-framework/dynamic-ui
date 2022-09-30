# Design system and widget factory

## Setup

+ `git clone --recurse-submodules git@github.com:modyolabs/modyo-design-system.git` use `--recurse-submodules` to clone the widgets submodules to
+ `cd modyo-design-system` to move to the cloned repository
+ `pnpm install` to install dependencies
+ `pnpm exec lerna run build --no-private` to build all the no private packages.

## Packages
| Project                         | Package                            | Version                                                                            | Links                                                        |
|---------------------------------|------------------------------------|------------------------------------------------------------------------------------|--------------------------------------------------------------|
| **Modyo Design System**         | @modyo/modyo-design-system         | ![npm](https://img.shields.io/npm/v/modyo-design-system?style=flat-square)         | [`README.md`](libraries/modyo-design-system/README.md) |
| **Modyo Design System Angular** | @modyo/modyo-design-system-angular | ![npm](https://img.shields.io/npm/v/modyo-design-system-angular?style=flat-square) | [`README.md`](libraries/modyo-design-system-angular/README.md) |
| **Modyo Design System Vue**     | @modyo/modyo-design-system-vue     | ![npm](https://img.shields.io/npm/v/modyo-design-system-vue?style=flat-square)     | [`README.md`](libraries/modyo-design-system-vue/README.md)   |
| **Modyo Design System React**   | @modyo/modyo-design-system-react   | ![npm](https://img.shields.io/npm/v/modyo-design-system-react?style=flat-square)   | [`README.md`](libraries/modyo-design-system-react/README.md) |

## How to run a widget

+ Move to a widget folder, e.g. `cd widgets/react-profile`
+ `pnpm start` to run the widget

## How to add a new widget

+ Use the recommended tool for the selected framework for convenience
  + [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
  + [angular cli](https://angular.io/cli)
  + [vue cli](https://cli.vuejs.org/guide/installation.html)
> If you are going to use a builder or cli, create the widget in an external folder to the repo to avoid conflicts.

> You can use any tool to create a widget, you can even configure it from scratch by creating your own webpack configuration for example.

+ Use `pnpm import` to generate a pnpm-lock.yaml from another package manager's lockfile (ignore peer dependencies problem)
+ Delete all another lockfile and the node_modules folder
+ Move the new widget folder to the `widgets` folder in the repo
+ Run `pnpm install` to install the widget dependencies.

## Working in a widget with design-system changes

1. commit in widget.
2. commit in the design-system adding the widget.
3. PR design-system (branch→develop) widget (branch→master)
4. merge PR of design-system. (branch→develop)
5. publish design-system. (develop→master)
6. update the design-system version in the widget (commit with version)
7. merge PR of widget. (branch→master)
8. add submodule change (new hash of widget) and commit in the design-system on develop.

## caveats

- temporarily unmanaged packages must carry `*` in the workspace dependencies.
- after publish a design-system version we need to change the dependency version in the widget in the corresponding PR.
- after update the dependency version in the widget we need to commit and push the new commit hash of widget to develop in the workspace.
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
