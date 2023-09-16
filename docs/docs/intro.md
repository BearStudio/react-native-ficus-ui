---
sidebar_position: 1
---

# Get started

## Installation

With npm :

```sh
npm install react-native-ficus-ui
```

With yarn :

```sh
yarn add react-native-ficus-ui
```

Install peer dependencies :

```sh
yarn add react-native-animatable react-native-modal react-native-vector-icons
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

