---
sidebar_position: 13
---

# Pressable

Pressable component that is based on react native `Pressable` component.

## Import

```js
import { Pressable } from "react-native-ficus-ui";
```

## Usage

```js
<Pressable onPress={() => console.log('Pressed')}>
    <Text>Test</Text>
</Pressable>
<Pressable
    bg="red.300"
    p="xl"
    borderRadius="xl"
    onPress={() => console.log('Pressed')}
>
    <Text>Test</Text>
</Pressable>
```

## Props

Extends every `Box` props and react native `Pressable` component.

https://reactnative.dev/docs/pressable#props