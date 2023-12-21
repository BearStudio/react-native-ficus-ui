---
sidebar_position: 1
---

# Get started

<img src="/img/banner.png" width="80%" alt="React Native Ficus UI banner" />

## Installation

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
import { ThemeProvider } from '@/theme';

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

