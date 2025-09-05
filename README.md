<img src="https://raw.githubusercontent.com/BearStudio/react-native-ficus-ui/refs/heads/main/apps/docs/static/img/banner.png" width="100%" alt="React Native Ficus UI banner" />

<br />

# React Native Ficus UI 🍃

Ficus UI is a React Native UI library inspired by Chakra UI

<p align="center">
  <a href="https://github.com/BearStudio/react-native-ficus-ui/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/chakra-ui/chakra-ui"/>
  </a>
  <a href="https://www.npmjs.com/package/react-native-ficus-ui">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/react-native-ficus-ui"/>
  </a>
  <a href="https://github.com/BearStudio/react-native-ficus-ui">
    <img alt="Github Stars" src="https://badgen.net/github/stars/BearStudio/react-native-ficus-ui" />
  </a>
</p>

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

## Core team

<a href="https://www.bearstudio.fr/"><img src="https://avatars.githubusercontent.com/u/21054556?s=48&v=4" height="50" width="50" /></a>
<a href="https://github.com/ntorionbearstudio"><img src="https://avatars.githubusercontent.com/u/53612278?v=4" height="50" width="50" /></a>
<a href="https://github.com/ntatoud"><img src="https://avatars.githubusercontent.com/u/135032615?v=4" height="50" width="50" /></a>
<a href="https://github.com/omar-bear"><img src="https://avatars.githubusercontent.com/u/80390318?v=4" height="50" width="50" /></a>
<a href="https://github.com/heloise-gllm"><img src="https://avatars.githubusercontent.com/u/139237256?v=4" height="50" width="50" /></a>
<a href="https://github.com/houssembaltii"><img src="https://avatars.githubusercontent.com/u/155462028?v=4" height="50" width="50" /></a>

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
