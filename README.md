# Custom React UI Module

A collection of reusable React components built with Material-UI and Tailwind CSS.

## Installation

To use this package, you'll need to authenticate with GitHub Packages. Create a `.npmrc` file in your project root with the following content:

```
@cmukher1:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
```

Replace `YOUR_GITHUB_PERSONAL_ACCESS_TOKEN` with a token that has the necessary permissions to read packages.

Then install the package:

```bash
npm install @cmukher1/custom-react-ui-module
# or
yarn add @cmukher1/custom-react-ui-module
```

## Usage

```jsx
import { Button } from '@cmukher1/custom-react-ui-module';

function App() {
  return <Button label="Click me" onClick={() => console.log('Clicked!')} />;
}
```

## Development

- `yarn install`: Install dependencies
- `yarn build`: Build the package
- `yarn test`: Run tests
- `yarn lint`: Lint the code
- `yarn storybook`: Run Storybook for component development

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.