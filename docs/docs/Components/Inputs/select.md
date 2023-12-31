---
sidebar_position: 19
---

import ExpoLayout from '../../../src/components/ExpoLayout/index.js';

# Select

Component to select an item between several options.

## Import

```js
import { Select, Option } from "react-native-ficus-ui";
```

## Usage

<ExpoLayout id="select" />

## Props

Extends every `Box` props.

`title`
---
The title of select modal.

|Type|Required|
|---|---|
|string | React.ReactNode|No|

`message`
---
The text message (after title) of select modal.

|Type|Required|
|---|---|
|string | React.ReactNode|No|

`data`
---
The data array object with different options.

|Type|Required|
|---|---|
|any[]|Yes|

`value`
---
The value object of selection (array on single object, depends of `isMultiple` prop).

|Type|Required|
|---|---|
|any|Yes|

`renderItem`
---
The render function to render an option, you can use `Option` component inside it.

|Type|Required|
|---|---|
|(item: any, index: number) => React.ReactElement|Yes|

`keyExtractor`
---
Method to extract an unique key for each option (the component is using a `FlatList` to display them).

|Type|Required|
|---|---|
|(item: any, index: number) => string|No|

`showScrollIndicator`
---
Boolean to indicate if the scroll indicator must be shown on options list.

|Type|Required|
|---|---|
|boolean|No|

`submit`
---
Boolean indicating if we need a submit button to validate the selection.

|Type|Required|Default|
|---|---|---|
|boolean|No|false|

`renderSubmitButton`
---
Render function for submit button/component.

|Type|Required|
|---|---|
|() => React.ReactElement|No|

`onSelect`
---
Method called when an option is selected/validated.

|Type|Required|
|---|---|
|(value: any) => void|No|

`submitText`
---
The text on submit button.

|Type|Required|
|---|---|
|string|No|

`isMultiple`
---
Boolean indicating if the user can select multiple options. When this option is enabled, the user must submit the selection.

|Type|Required|Default|
|---|---|---|
|boolean|No|false|