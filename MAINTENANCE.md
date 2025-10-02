# Maintenance Guide for Version 1.36.x

This guide describes the process for applying maintenance updates to the `1.36.x` version line of the Design System.

## Maintenance Branch

The designated branch for this purpose is `releases/1.36-stable`. This branch is independent of `master` and should only receive commits that are bug fixes, documentation updates, or non-disruptive configuration adjustments.

## Allowed Commit Types

To ensure that automatic versioning works correctly and only patch versions are generated (e.g., `1.36.3`, `1.36.4`), **it is mandatory to use only the following commit prefixes** on the `releases/1.36-stable` branch:

- `fix`: For bug fixes.
- `docs`: For changes to documentation or Storybook.
- `style`: For formatting changes that do not affect the code (whitespace, semicolons, etc.).
- `refactor`: For code changes that neither fix a bug nor add a feature.
- `perf`: For performance improvements.
- `test`: For adding or correcting tests.
- `chore`: For updates to build tasks, configuration, etc.

### Important!

**NEVER use the `feat` prefix on this branch.** A `feat` type commit would cause `release-please` to generate a new minor version (e.g., `1.37.0`), which is incorrect for this maintenance line.

Likewise, do not introduce `BREAKING CHANGE` in the commit message footer, as this would generate a new major version (e.g., `2.0.0`).

## Contribution Workflow

1.  **Create a Branch**: Create your work branch from the latest version of `releases/1.36-stable`.
    ```bash
    git checkout releases/1.36-stable
    git pull
    git checkout -b fix/my-awesome-fix
    ```

2.  **Make Changes**: Apply your fixes.

3.  **Commit Your Changes**: Create your commit using one of the allowed prefixes.
    ```bash
    git commit -m "fix(DButton): Corrects the border color on hover state"
    ```

4.  **Create a Pull Request**: Push your changes and create a Pull Request targeting the `releases/1.36-stable` branch.

5.  **Merge**: Once the Pull Request is approved and merged, the automation system will take care of the rest:
    - It will create a new "release" Pull Request with the updated `CHANGELOG.md` and version.
    - When this second PR is merged, the new patch version will be published to NPM with the `1.36-stable` tag.
    - The new version of Storybook and the assets will be deployed to the CDN.