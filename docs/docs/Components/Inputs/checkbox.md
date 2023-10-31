---
sidebar_position: 20
---

import ExpoLayout from '../../../src/components/ExpoLayout/index.js';

# Checkbox

Component to render a checkbox input.

## Import

```js
import { Checkbox, CheckboxGroup } from "react-native-ficus-ui";
```

## Usage

<ExpoLayout id="checkbox" />

## Props

### Checkbox props

Extends every `Box` props.

`colorScheme`
---
The colorScheme property, will define checkbox color.

|Type|Required|Default|
|---|---|---|
|string|No|blue|

`defaultChecked`
---
Boolean to indicate if checkbox should be checked by default.

|Type|Required|Default|
|---|---|---|
|boolean|No|false|

`isChecked`
---
Boolean to indicate if checkbox is checked.

|Type|Required|Default|
|---|---|---|
|boolean|No|false|

`isDisabled`
---
Boolean to indicate if checkbox is disabled.

|Type|Required|Default|
|---|---|---|
|boolean|No|false|

`isLoading`
---
Boolean to indicate if checkbox should display a loader/spinner.

|Type|Required|Default|
|---|---|---|
|boolean|No|false|

`onChecked`
---
Function called when checked status changes on checkbox.

|Type|Required|
|---|---|
|(newValue: boolean) => void|No|

`icon`
---
Custom icon component to replace default checkbox icon.

|Type|Required|
|---|---|
|React.ReactNode|No|

`iconColor`
---
Custom icon color.

|Type|Required|
|---|---|
|string|No|

`size`
---
Size of checkbox.

|Type|Required|
|---|---|
|number 'sm' 'lg'|No|

### Checkbox.Group props

`onChange`
---
Function called when checked value changes.

|Type|Required|
|---|---|
|(value: any) => void|No|

`value`
---
Value for the checkbox group.

|Type|Required|
|---|---|
|any|No|

`defaultValue`
---
Default value for the checkbox group.

|Type|Required|
|---|---|
|any|No|

`colorScheme`
---
The colorScheme property, will define group checkboxs color.

|Type|Required|Default|
|---|---|---|
|string|No|blue|