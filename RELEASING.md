# Releasing

Releases are GitHub Releases created as drafts by the `Release` workflow
(`.github/workflows/release-please.yml`) and published by a person. Publishing
the release publishes the package to npm, the CDN and Storybook.

## Steps

1. **Version PR to `develop`.** From a `chore/release-X.Y.Z` branch, run
   `npm version X.Y.Z --no-git-tag-version`. `postversion` rebuilds the CSS and
   `scripts/theme/known-tokens.json`, which carries the version too. Commit
   `package.json`, `package-lock.json` and `scripts/theme/known-tokens.json`
   with the title `chore(release): X.Y.Z`.
2. **PR `develop` → `master`**, titled `chore(release): X.Y.Z`, merged with a
   merge commit (the `master` ruleset allows nothing else). The release notes
   list the PRs whose commits are between the previous tag and this one; a
   squash would leave only this PR. This PR gets the `skip-changelog` label and
   is not listed. Its required check is the browser a11y suite
   (`a11y-browser.yml`), which runs only on PRs to `master`. PRs to `develop`
   are squashed (its ruleset allows only that).
3. **Draft.** The push to `master` runs the `Draft release` job: it creates the
   draft `vX.Y.Z` on that commit, with notes generated from the PRs and the
   `npm diff` command for the compiled CSS. The job never edits or deletes an
   existing release, so it cannot race with someone publishing it: a version
   already published is left as is, and if a new push reaches `master` while
   the draft points to an older commit, the job fails. In that case delete the
   draft without publishing it and run the `Release` workflow on `master`
   (**Run workflow**, or `gh workflow run release-please.yml --ref master`).
4. **Publish.** Review and edit the notes, then publish the draft. That runs:
   - `Publish to npm` (same workflow), with OIDC and provenance;
   - `cdn.yml`, which publishes `dist/`, `api.json` and the manifests;
   - `storybook.yml`.

Nothing has to be synced back from `master` to `develop`: the version bump is
already on `develop`.

## Release notes

`gh release create --generate-notes` builds the notes from **merged PRs**;
commits pushed without a PR do not appear. Each PR goes into the section of its
label (`.github/release.yml`):

| Branch prefix | Label | Section |
|---|---|---|
| — (set by hand) | `BREAKING CHANGE` | ⚠️ Breaking Changes |
| `feat/`, `feature/` | `feature` | 🚀 Features |
| `fix/` | `fix` | 🐛 Bug Fixes |
| `refactor/`, `style/` | `refactor`, `style` | 🎨 Refactor |
| `chore/`, `ci/` | `chore`, `ci` | 🧰 Maintenance |
| `docs/`, `test/` | `docs`, `test` | 📝 Docs/Test |

`pr-labeler.yml` sets the label from the branch prefix (`.github/labeler.yml`).
A PR without any of these labels goes to "Other Changes". PRs labeled
`skip-changelog` and Dependabot PRs are left out. The PR title is the line in
the notes; the `PR title` check runs commitlint on it
without its default ignores, so `2.13.0` or `Merge …` titles fail.

`CHANGELOG.md` is no longer updated; it keeps the history up to 2.12.1.

## Credentials

- The release workflow uses only `GITHUB_TOKEN` and OIDC.
- npm publishes as a trusted publisher bound to `release-please.yml`. That is
  why the file keeps its name: renaming it requires updating the trusted
  publisher on npmjs.com first.
- `RELEASE_PLEASE_TOKEN` is no longer used by this repository's `develop`
  branch. `NODE_AUTH_TOKEN` is still used by `dev.yml` and by the
  `releases/1.36-stable` branch.
