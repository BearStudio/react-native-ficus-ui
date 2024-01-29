---
sidebar_position: 17
---

import ExpoLayout from '../../../src/components/ExpoLayout/index.js';

# Input

Component that is based on react native `TextInput` component.

## Import

```js
import { Input } from "react-native-ficus-ui";
```

## Usage

<ExpoLayout id="input" />

## Props

Extends every `Box` props and react native `TextInput` component.

https://reactnative.dev/docs/textinput#props

`focusBorderColor`
---
The border color when input is focused.

|Type|Required|
|---|---|
|string|No|

`focusBorderWidth`
---
The border width when input is focused.

|Type|Required|Default|
|---|---|---|
|number|No|2|

`focusBorderStyle`
---
The border style property when input is focused.

|Type|Required|Default|
|---|---|---|
|"solid", "dashed", "dotted"|No|"solid"|