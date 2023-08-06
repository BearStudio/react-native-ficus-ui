---
sidebar_position: 15
---

# TouchableOpacity

Component that is based on react native `TouchableOpacity` component.

## Import

```js
import { TouchableOpacity } from "react-native-ficus-ui";
```

## Usage

```js
<TouchableOpacity onPress={() => console.log('Pressed')}>
    <Text>Test</Text>
</TouchableOpacity>
<TouchableOpacity
    bg="red.300"
    p="xl"
    borderRadius="xl"
    onPress={() => console.log('Pressed')}
>
    <Text>Test</Text>
</TouchableOpacity>
```

## Props

Extends every `Box` props and react native `TouchableOpacity` component.

https://reactnative.dev/docs/touchableopacity#props