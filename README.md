# 🎨 Custom React UI Module

A custom React UI component library built with Material-UI and Tailwind CSS.

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Development](#-development)
- [Testing](#-testing)
- [Storybook](#-storybook)
- [Linting and Formatting](#-linting-and-formatting)
- [Continuous Integration](#-continuous-integration)
- [Publishing](#-publishing)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

1. React components built with Material-UI and Tailwind CSS
2. TypeScript support
3. Storybook for component documentation and development
4. Jest and React Testing Library for unit testing
5. ESLint and Prettier for code linting and formatting
6. Rollup for bundling
7. CI/CD pipeline with GitHub Actions
8. SonarCloud integration for code quality analysis
9. Pre-commit hooks for code quality checks

## 🛠 Tech Stack

- React
- TypeScript
- Material-UI
- Tailwind CSS
- Storybook
- Jest
- React Testing Library
- ESLint
- Prettier
- Rollup
- GitHub Actions
- SonarCloud
- Husky

## 📁 Folder Structure

```
SHARED-COMPONENT/
├── .github/
├── .husky/
│   └── pre-commit
├── .storybook/
├── .vscode/
├── coverage/
├── dist/
├── node_modules/
├── src/
│   ├── __tests__/
│   │   ├── Button.test.tsx
│   │   ├── HeaderTextSubText.test.tsx
│   │   ├── index.test.ts
│   │   ├── ProgressCircle.test.tsx
│   │   ├── TaskProgress.test.tsx
│   │   └── TaskProgressCard.test.tsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── HeaderTextSubText.tsx
│   │   │   ├── ProgressCircle.tsx
│   │   │   └── TaskProgressCard.tsx
│   │   └── TaskProgress.tsx
│   ├── stories/
│   │   ├── assets/
│   │   ├── common/
│   │   │   ├── Button.stories.tsx
│   │   │   ├── HeaderTextSubTextComponent.stories.tsx
│   │   │   ├── ProgressCircle.stories.tsx
│   │   │   └── TaskProgressCard.stories.tsx
│   │   └── TaskProgress.stories.tsx
│   ├── styles/
│   ├── utils/
│   │   ├── colors.test.ts
│   │   ├── colors.ts
│   │   ├── numbers.test.ts
│   │   └── numbers.ts
│   ├── index.ts
│   └── setupTests.ts
├── .babelrc
├── .env
├── .eslintcjs
├── .gitignore
├── .lintstaged.cjs
├── .npmrc
├── jest.config.js
├── package.json
├── postcss.config.js
├── README.md
├── rollup.config.js
├── sonar-project.properties
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

## 🚀 Installation

To install the package in your project, run:

```bash
npm install @cmukher1/custom-react-ui-module
```

or if you're using Yarn:

```bash
yarn add @cmukher1/custom-react-ui-module
```

## 🎯 Usage

Import and use components in your React application:

```jsx
import { Button } from "@cmukher1/custom-react-ui-module";

function App() {
  return (
    <div>
      <Button label="Click me" />
    </div>
  );
}
```

## 💻 Development

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn storybook
   ```

## 🧪 Testing

Run tests:

```bash
yarn test
```

Run tests in watch mode:

```bash
yarn test:watch
```

Generate test coverage report:

```bash
yarn test:coverage
```

## 📖 Storybook

Start Storybook development server:

```bash
yarn storybook
```

Build Storybook as a static web application:

```bash
yarn build-storybook
```

## 🧹 Linting and Formatting

Lint the code:

```bash
yarn lint
```

Fix linting issues:

```bash
yarn lint:fix
```

Format the code:

```bash
yarn format
```

## 🔄 Continuous Integration

The project uses GitHub Actions for CI/CD. The pipeline:

1. Runs linting checks
2. Runs tests and generates coverage report
3. Builds the project
4. Runs SonarCloud analysis
5. Publishes the package to GitHub Packages (on main branch)

## 📦 Publishing

The package is automatically published to GitHub Packages when changes are pushed to the main branch. To manually publish:

1. Update the version in `package.json`
2. Run:
   ```bash
   yarn publish
   ```

Note: Make sure you have the necessary permissions to publish the package.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch from `develop`
3. Commit your changes (commits are checked by husky for linting and testing)
4. Push to your feature branch
5. Create a new Pull Request to merge into `develop`

Note: The `main` branch is restricted. All changes must go through a Pull Request from the `develop` branch to `main`.

### Branch Protection Rules

Brnach protection is set for `main` branch:

This ensures that all changes to the `main` branch must go through a reviewed Pull Request and pass all status checks.

## 📄 License

This project is licensed under the MIT License.
