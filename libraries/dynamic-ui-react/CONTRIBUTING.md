# Contributing Guidelines

*Pull requests, bug reports, and all other forms of contribution are welcomed and highly encouraged!* :octocat:

### Contents

- [Opening an Issue](#inbox_tray-opening-an-issue)
- [Feature Requests](#love_letter-feature-requests)
- [Submitting Pull Requests](#repeat-submitting-pull-requests)
- [Commit Message Guidelines](#memo-commit-message-guidelines)

## :inbox_tray: Opening an Issue

Before [creating an issue](https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue), check if you are using the latest version of the project. If you are not up-to-date, see if updating fixes your issue first.

### :beetle: Bug Reports and Other Issues

A great way to contribute to the project is to send a detailed issue when you encounter a problem. We always appreciate a well-written, thorough bug report.

In short, since you are most likely a developer, **provide a ticket that you would like to receive**.

- **Do not open a duplicate issue!** Search through existing issues to see if your issue has previously been reported. If your issue exists, comment with any additional information you have. You may simply note "I have this problem too", which helps prioritize the most common problems and requests.

- **Prefer using [reactions](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/)**, not comments, if you simply want to "+1" an existing issue.

- **Fully complete the provided issue template.** The bug report template requests all the information we need to quickly and efficiently address your issue. Be clear, concise, and descriptive. Provide as much information as you can, including steps to reproduce, stack traces, compiler errors, library versions, OS versions, and screenshots (if applicable).

- **Use [GitHub-flavored Markdown](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax).** Especially put code blocks and console outputs in backticks (```). This improves readability.

## :love_letter: Feature Requests

Feature requests are welcome! While we will consider all requests, we cannot guarantee your request will be accepted. Your idea may be great, but also out-of-scope for the project. If accepted, we cannot make any commitments regarding the timeline for implementation and release. However, you are welcome to submit a pull request to help!

- **Do not open a duplicate feature request.** Search for existing feature requests first. If you find your feature (or one very similar) previously requested, comment on that issue.

- **Fully complete the provided issue template.** The feature request template asks for all necessary information for us to begin a productive conversation.

- Be precise about the proposed outcome of the feature and how it relates to existing features. Include implementation details if possible.

## :repeat: Submitting Pull Requests

We **love** pull requests! Before [forking the repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests) for non-trivial changes, it is usually best to first open an issue to discuss the changes, or discuss your intended approach for solving the problem in the comments for an existing issue.

*Note: All contributions will be licensed under the project's license.*

- **Smaller is better.** Submit **one** pull request per bug fix or feature. A pull request should contain isolated changes pertaining to a single bug fix or feature implementation. **Do not** refactor or reformat code that is unrelated to your change. It is better to **submit many small pull requests** rather than a single large one. Enormous pull requests will take enormous amounts of time to review, or may be rejected altogether.


- **Prioritize understanding over cleverness.** Write code clearly and concisely. Remember that source code usually gets written once and read often. Ensure the code is clear to the reader. The purpose and logic should be obvious to a reasonably skilled developer, otherwise you should add a comment that explains it.

- **Follow existing coding style and conventions.** Keep your code consistent with the style, formatting, and conventions in the rest of the code base. When possible, these will be enforced with a linter. Consistency makes it easier to review and modify in the future.

- **Include test coverage.** Add unit tests when possible. Follow existing patterns for implementing tests.

- **Add documentation.** Document your changes with storybook examples or controls if added.

- **Use the repo's default branch.** Branch from and [submit your pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) to the repo's default branch. Usually this is `master`, but it could be `develop`.

- **[Resolve any merge conflicts](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)** that occur.

- **Promptly address any CI failures**. If your pull request fails to build or pass tests, please push another commit to fix it.

## :memo: Commit Message Guidelines

We adhere to Conventional Commits with certain limitations:

- **feat**: Represents a new feature or major change that affects the API temporarily used for semver increments.
- **fix**: Indicates a bug fix or patch that does not alter the API.
- **docs**: Reserved for changes related to Storybook documentation.
- **style**: Reserved for changes in the SASS API, such as redefining a DComponent or a class. However, commits to the master branch must be in the format `feat(style)` or `fix(style)` to trigger a version increment.
- **refactor**: Used for internal changes that do not alter the API, functionality, or fix errors. Typically used for performance improvements or code organization.
- **test**: Exclusively for changes in tests.

### Commit Scopes

Scopes provide additional context for clearer changelogs. Scopes follow the same rules as above and are defined as follows:

- **style**: Changes in SCSS files. For example: `fix(style): DInput loading text color`.
- **component**: Features related to components, using the component name in UpperCamelCase. For example:
  - `feat(DInput): add loading state to left add-on`
  - `docs(DModal): change story base name to Default`

### Example Commit Messages

- **feat(DInput): add loading state**. Adds a loading state feature to the DInput component.
- **fix(style): DInput loading text color**. Fixes the loading text color in the DInput component's SCSS.
- **docs(DSelect): set error state as control**. Sets control in storybook to enable error state
