# Contributing

Contributions are always welcome, no matter how large or small!

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project. Before contributing, please read the [code of conduct](./CODE_OF_CONDUCT.md).

## Architecture

The project is split in 2 folders.

`apps/`:

- `docs/`: The documentation website of the library
- `examples/`: A small expo app to test your changes while developping

`src/`:

- `components`: The main library along with its components, hooks and theme.
- ... other configuration and helper packages.

## Development workflow

To get started with the project, run `pnpm install` in the root directory to install the required dependencies for each package:

```sh
pnpm install
```

### Development

While developing, you can run the [example app](/example/) to test your changes.

> [!NOTE]
> ⚠️ Your changes in the library will be repercuted in the example app. But if you change the library's exports, you will need to rebuild the package.

To start the example app:

```sh
pnpm dev
```

To run the example app on Android:

```sh
pnpm dev android
```

To run the example app on iOS:

```sh
pnpm dev ios
```

To run the example app on Web:

```sh
pnpm dev web
```

### Code quality

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```sh
pnpm typecheck
pnpm lint
```

To fix formatting errors, run the following:

```sh
pnpm lint --fix
```

Remember to add tests for your change if possible. Run the unit tests by:

```sh
pnpm test:components
```

To test if all the CI steps are working all at once, you can use:

```sh
pnpm run ci
```

### Run the Documentation (To improve)

To run the documentation in local development, there is a small workaround to properly resolve react-native dependencies.
From the project root, you need to run:

```sh
pnpm -C ./apps/docs install
```

Then, you will be able to run:

```sh
pnpm docs:dev
```

If you want to be able to run the example app after running `pnpm -C ./apps/docs install`, you might need to clean your node_modules.

### Clean

To clean all node_modules and cache folders:

```sh
pnpm clean
```

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)

We use [TypeScript](https://www.typescriptlang.org/) for type checking, [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code, and [Jest](https://jestjs.io/) for testing.

Our pre-commit hooks verify that the linter and tests pass when committing.

### Publishing to npm

We use [release-it](https://github.com/release-it/release-it) to make it easier to publish new versions. It handles common tasks like bumping version based on semver, creating tags and releases etc.

To publish new versions, run the following:

```sh
pnpm release
```

### Scripts

The `package.json` file contains various scripts for common tasks:

- `pnpm typecheck`: type-check files with TypeScript.
- `pnpm lint`: lint files with ESLint.
- `pnpm test`: run the library's components unit tests with Jest.
- `pnpm examples start`: start the Metro server for the example app.
- `pnpm examples android`: run the example app on Android.
- `pnpm examples ios`: run the example app on iOS.

### Sending a pull request

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github).

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.
- For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.
