---
sidebar_position: 20
---

# Checkbox

Component to render a checkbox input.

## Import

```js
import { Checkbox } from "react-native-ficus-ui";
```

## Usage

```js
<Checkbox value={1} prefix={<Text flex={1}>Option 1</Text>} />
<Checkbox value={2} prefix={<Text flex={1}>Option 2</Text>} />
<Checkbox
    value={3}
    prefix={<Text flex={1}>Option 3</Text>}
    colorScheme="red"
/>
<Checkbox
    value={4}
    prefix={<Text flex={1}>Option 4</Text>}
    colorScheme="pink"
/>
<Checkbox
    value={5}
    prefix={<Text flex={1}>Option 5</Text>}
    isLoading
/>

<Checkbox.Group flexDirection="row">
    {['Option 1', 'Option 2', 'Option 3'].map((item) => (
    <Checkbox value={item}>
        {({ isChecked }) => (
        <Box
            bg={isChecked ? 'blue.600' : 'blue.100'}
            px="xl"
            py="md"
            mr="md"
            borderRadius="full"
        >
            <Text color={isChecked ? 'white' : 'gray.800'}>{item}</Text>
        </Box>
        )}
    </Checkbox>
    ))}
</Checkbox.Group>
```

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
|---|---|---|
|(newValue: boolean) => void|No|

`icon`
---
Custom icon component to replace default checkbox icon.

|Type|Required|
|---|---|---|
|React.ReactNode|No|

`iconColor`
---
Custom icon color.

|Type|Required|
|---|---|---|
|string|No|

### Checkbox.Group props

`onChange`
---
Function called when checked value changes.

|Type|Required|
|---|---|---|
|(value: any) => void|No|

`value`
---
Value for the checkbox group.

|Type|Required|
|---|---|---|
|any|No|

`defaultValue`
---
Default value for the checkbox group.

|Type|Required|
|---|---|---|
|any|No|