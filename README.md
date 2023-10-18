# Dynamic Framework

## Storybook

+ [react](https://react.dynamicframework.dev/)

## Setup

+ `git clone --recurse-submodules git@github.com:dynamic-framework/dynamic-ui.git` use `--recurse-submodules` to clone the submodules to
+ `cd dynamic-ui` to move to the cloned repository
+ `pnpm install` to install dependencies
+ `pnpm build` to build all the no private packages.

## Packages
| Project                       | Package                       | Version                                                                                                                             | Links                                               |
|-------------------------------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **Dynamic Framework React**   | @dynamic-framework/ui-react   | [![npm](https://img.shields.io/npm/v/@dynamic-framework/ui-react?style=flat-square)](https://www.npmjs.com/package/@dynamic-framework/ui-react)                                              | [`README.md`](libraries/dynamic-ui-react/README.md) |

## How to run a template

+ Move to a template folder, e.g. `cd templates/dynamic-retail-dashboard-template`
+ `pnpm start` to run the template

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
