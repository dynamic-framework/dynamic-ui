# Stencil widget factory

## Setup

+ `clone`
+ `cd ds-poc` to move to a cloned repo
+ `rush update` to install dependencies
+ `rush build` to build all packages

## Packages
| Project                   | Package                      | Version  | Links                                                    |
|---------------------------|------------------------------|----------|----------------------------------------------------------|
| **Design System**         | @modyo/design-system         | --       | [`README.md`](design-system/README.md)                   |
| **Angular Design System** | @modyo/angular-design-system | --       | [`README.md`](libraries/angular-design-system/README.md) |
| **Vue Design System**     | @modyo/vue-design-system     | --       | [`README.md`](libraries/vue-design-system/README.md)     |
| **React Design System**   | @modyo/react-design-system   | --       | [`README.md`](libraries/react-design-system/README.md)   |

## How to run a widget

+ Move to a widget folder, e.g. `cd widgets/react-profile`
+ `rushx` to see the available commands
+ `rushx start` or `rushx serve` to run the widget

> You can also use `npm run`, but only `npm run` and no other `npm` commands. [Rush caveats](https://rushjs.io/pages/developer/new_developer/#a-couple-caveats)

## How to add a new widget

+ Use the recommended tool for the selected framework for convenience
  + [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
  + [angular cli](https://angular.io/cli)
  + [vue cli](https://cli.vuejs.org/guide/installation.html)
> If you are going to use a builder or cli, create the widget in a folder external to the repo to avoid conflicts with rush.

> You can use any tool to create a widget, you can even configure it from scratch by creating your own webpack configuration for example.

+ Delete the local shrinkwrap file, since it's superseded by Rush's common shrinkwrap file
+ Consider deleting the project's `.npmrc` file, since Rush operations always use `common/config/rush/.npmrc`
+ Consider deleting the project's Git config files unless they contain rules that are really specific to that project

´´´shell
rm -f shrinkwrap.yaml npm-shrinkwrap.json package-lock.json yarn.lock
rm -f .npmrc          # (if it makes sense)
rm -f .gitattributes  # (if it makes sense)
rm -f .gitignore      # (if it makes sense)
´´´

+ Move the new widget folder to the `widgets` folder in the repo
+ Add the widget to the project array in the `rush.json` file
+ Run `rush update` to install dependencies
+ Run `rush build` to verify that the widget builds

> These steps can be found in the [rush documentation](https://rushjs.io/pages/maintainer/add_to_repo/#step-4-add-your-first-project)

## How to build a rush tag

+ `rush build --to tag:angular` to build all the packages with angular tag
+ `rush build --to tag:vue` to build all the packages with vue tag
+ `rush build --to tag:libraries` to build all the packages with libraries tag
+ `rush build --to tag:widgets` to build all the packages with widgets tag

## How to build from or to a specific package

+ `rush build --to @modyo/vue-profile` or `rush build -t @modyo/vue-profile` to build the package `@modyo/vue-profile` and all its dependencies
+ `rush build --from @modyo/vue-design-system` or `rush build -f @modyo/vue-design-system` to build the package from `@modyo/vue-design-system` and all its dependencies
+ `rush build --to-except @modyo/vue-profile` or `rush build -T @modyo/vue-profile` to build the dependencies of `@modyo/vue-profile`
+ `rush build --only @modyo/react-profile` or `rush build -o @modyo/react-profile` to build only `@modyo/react-profile` w/o its dependencies

## Other links

+ [POC](POC.md)
+ Rush [documentation](https://rushjs.io/pages/intro/get_started/)
+ Stencil [documentation](https://stenciljs.com/docs/overview)
+ Stencil GitHub [repository](https://github.com/ionic-team/stencil)
+ Stencil output target GitHub [repository](https://github.com/ionic-team/stencil-ds-output-targets)
+ (reference) Ionic Framework GitHub [repository](https://github.com/ionic-team/ionic-framework)
+ (reference) Baloise design system GitHub [repository](https://github.com/baloise/design-system)
+ (reference) Bulmil design system GitHub [repository](https://github.com/Gomah/bulmil)
