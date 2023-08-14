---
sidebar_position: 1
---

# Button

Button component that is based on react native `Button` component.

## Import

```js
import { Button } from "react-native-ficus-ui";
```

## Usage

```js
<Button onPress={() => console.log('PRESSED')}>Button</Button>
<Button colorScheme="red">Button</Button>
<Button colorScheme="orange">Button</Button>
<Button colorScheme="green">Button</Button>
<Button colorScheme="pink">Button</Button>
<Button colorScheme="pink" full>
    Button
</Button>
<Button colorScheme="blue" full isLoading>
    Button
</Button>
```

<img src="/img/button.png" />

## Props

Extends every `Box` props and react native `Button` component.

https://reactnative.dev/docs/button#props

`colorScheme`
---
The colorScheme property, will define background color and overlay color.

|Type|Required|Default|
|---|---|---|
|string|Yes|blue|

`full`
---
The full property, if true, then the button takes all the width.

|Type|Required|Default|
|---|---|---|
|string|No|false|