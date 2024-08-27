<img src="docs/static/img/banner.png" width="80%" alt="React Native Ficus UI banner" />

<br />

Ficus UI is a React Native UI library forked on Magnus UI and inspired by Chakra UI

## Installation

With pnpm :

```sh
pnpm add react-native-ficus-ui
```

With npm :

```sh
npm install react-native-ficus-ui
```

With yarn :

```sh
yarn add react-native-ficus-ui
```

Then, install the pods for iOS :

```sh
cd ios && pod install
```

## Usage

You need to wrap your root component inside ThemeProvider component from react-native-ficus-ui.

```js title="index.js"
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'react-native-ficus-ui';

import App from './src/App';

export default function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent('main', () => Main);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
