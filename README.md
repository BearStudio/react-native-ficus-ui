<img src="https://raw.githubusercontent.com/BearStudio/react-native-ficus-ui/refs/heads/main/apps/docs/static/img/banner.png" width="100%" alt="React Native Ficus UI banner" />

<br />

Ficus UI is a React Native UI library inspired by Chakra UI

## Requirements

This library now needs `react-native-gesture-handler` to be installed inside the React Native project.
If you use Expo Go then you have nothing to do as Gesture Handler is integrated inside Expo SDK.
But if you use a Bare React Native project, please follow those instructions in first : https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation/

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

You need to wrap your root component inside FicusProvider component from react-native-ficus-ui.

```js title="index.js"
import { AppRegistry } from 'react-native';
import { FicusProvider } from 'react-native-ficus-ui';

import App from './src/App';

export default function Main() {
  return (
    <FicusProvider>
      <App />
    </FicusProvider>
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
