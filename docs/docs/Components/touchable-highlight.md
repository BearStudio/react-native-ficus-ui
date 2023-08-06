---
sidebar_position: 14
---

# TouchableHighlight

Component that is based on react native `TouchableHighlight` component.

## Import

```js
import { TouchableHighlight } from "react-native-ficus-ui";
```

## Usage

```js
<TouchableHighlight onPress={() => console.log('Pressed')}>
    <Text>Test</Text>
</TouchableHighlight>
<TouchableHighlight
    bg="red.300"
    p="xl"
    borderRadius="xl"
    underlayColor="white"
    activeOpacity={0.5}
    onPress={() => console.log('Pressed')}
>
    <Text>Test</Text>
</TouchableHighlight>
```

## Props

Extends every `Box` props and react native `TouchableHighlight` component.

https://reactnative.dev/docs/touchablehighlight#props