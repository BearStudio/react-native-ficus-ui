---
sidebar_position: 16
---

# TouchableWithoutFeedback

Component that is based on react native `TouchableWithoutFeedback` component.

## Import

```js
import { TouchableWithoutFeedback } from "react-native-ficus-ui";
```

## Usage

```js
<TouchableWithoutFeedback onPress={() => console.log('Pressed')}>
    <Text>Test</Text>
</TouchableWithoutFeedback>
<TouchableWithoutFeedback
    bg="red.300"
    p="xl"
    borderRadius="xl"
    onPress={() => console.log('Pressed')}
>
    <Text>Test</Text>
</TouchableWithoutFeedback>
```

## Props

Extends every `Box` props and react native `TouchableWithoutFeedback` component.

https://reactnative.dev/docs/touchablewithoutfeedback#props