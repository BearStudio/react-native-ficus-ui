---
sidebar_position: 17
---

# Input

Component that is based on react native `TextInput` component.

## Import

```js
import { Input } from "react-native-ficus-ui";
```

## Usage

```js
<Input
    placeholder="Username"
    p={10}
    focusBorderColor="blue.500"
    suffix={<Icon name="search" color="gray.900" fontFamily="Feather" />}
/>
<Input
    placeholder="Password"
    mt="md"
    p={10}
    secureTextEntry
    focusBorderColor="blue.500"
/>
```

<img src="/img/input.png" />

## Props

Extends every `Box` props and react native `TextInput` component.

https://reactnative.dev/docs/textinput#props

`focusBorderColor`
---
The border color when input is focused.

|Type|Required|
|---|---|
|string|No|