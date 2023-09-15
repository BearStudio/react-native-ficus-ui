---
sidebar_position: 21
---

# Radio

Component to render a radio input.

## Import

```js
import { Radio, RadioGroup } from "react-native-ficus-ui";
```

## Usage

```js
<Radio value={1} />
<Radio value={2} defaultChecked />
<Radio value={3} colorScheme="green" />
<Radio value={4} isDisabled />
<Radio value={5} isLoading />

<RadioGroup colorScheme="red">
    <Radio value={1} prefix={<Text flex={1}>Option 1</Text>} />
    <Radio value={2} prefix={<Text flex={1}>Option 2</Text>} />
    <Radio value={3} prefix={<Text flex={1}>Option 3</Text>} />
</RadioGroup>

<RadioGroup>
    <Radio value={1} size="sm">
        Option 1
    </Radio>
    <Radio value={2} size="lg">
        Option 2
    </Radio>
</RadioGroup>

<Radio value={3} size="lg" isLoading>
    Loading option
</Radio>
```

## Props

### Radio props

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

### RadioGroup props

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