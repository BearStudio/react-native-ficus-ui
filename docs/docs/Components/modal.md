---
sidebar_position: 22
---

# Modal

Component to render a modal imported from `react-native-modal`

https://github.com/react-native-modal/react-native-modal

## Import

```js
import { Modal } from "react-native-ficus-ui";
```

## Usage

```js
const { isOpen, onOpen, onClose } = useDisclosure();

<Modal isOpen={isOpen}>
    <Button
        h={35}
        w={35}
        position="absolute"
        top={50}
        right={15}
        borderRadius="full"
        colorScheme="gray"
        onPress={() => {
            onClose();
        }}
    >
        <Icon color="white" name="close" />
    </Button>
</Modal>
```

## Props

`isOpen`
---
Boolean to indicate if modal is opened or not.

|Type|Required|Default|
|---|---|---|
|boolean|No|false|

`bg`
---
The background color property (`backgroundColor` style prop in StyleSheet)

|Type|Required|
|---|---|
|string|No|

`m`
---
The margin property (`margin` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`mt`
---
The margin top property (`marginTop` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`mb`
---
The margin bottom property (`marginBottom` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`mr`
---
The margin right property (`marginRight` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`ml`
---
The margin left property (`marginLeft` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`mx`
---
The margin horizontal property (`marginHorizontal` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`my`
---
The margin vertical property (`marginVertical` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`p`
---
The padding property (`padding` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`pt`
---
The padding top property (`paddingTop` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`pb`
---
The padding bottom property (`paddingBottom` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`pr`
---
The padding right property (`paddingRight` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`pl`
---
The padding left property (`paddingLeft` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`px`
---
The padding horizontal property (`paddingHorizontal` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`py`
---
The padding vertical property (`paddingVertical` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`h`
---
The height property (`height` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`justifyContent`
---
The justify content property for container (`justifyContent` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly")|No|

`borderRadius`
---
The border radius property (`borderRadius` style prop in StyleSheet)

|Type|Required|Default|
|---|---|---|
|number, string|No|none|

`borderTopRadius`
---
The border radius top property (`borderTopLeftRadius` and `borderTopRightRadius` style props in StyleSheet)

|Type|Required|Default|
|---|---|---|
|number, string|No|none|

`borderBottomRadius`
---
The border radius bottom property (`borderBottomLeftRadius` and `borderBottomRightRadius` style props in StyleSheet)

|Type|Required|Default|
|---|---|---|
|number, string|No|none|

`borderLeftRadius`
---
The border radius left property (`borderTopLeftRadius` and `borderBottomLeftRadius` style props in StyleSheet)

|Type|Required|Default|
|---|---|---|
|number, string|No|none|

`borderRightRadius`
---
The border radius right property (`borderTopRightRadius` and `borderBottomRightRadius` style props in StyleSheet)

|Type|Required|Default|
|---|---|---|
|number, string|No|none|

`borderTopLeftRadius`
---
The border radius top left property (`borderTopLeftRadius` style prop in StyleSheet)

|Type|Required|Default|
|---|---|---|
|number, string|No|none|

`borderTopRightRadius`
---
The border radius top right property (`borderTopRightRadius` style prop in StyleSheet)

|Type|Required|Default|
|---|---|---|
|number, string|No|none|

`borderBottomLeftRadius`
---
The border radius bottom left property (`borderBottomLeftRadius` style prop in StyleSheet)

|Type|Required|Default|
|---|---|---|
|number, string|No|none|

`borderBottomRightRadius`
---
The border radius bottom right property (`borderBottomRightRadius` style prop in StyleSheet)

|Type|Required|Default|
|---|---|---|
|number, string|No|none|

`borderColor`
---
The border color property (`borderColor` style prop in StyleSheet)

|Type|Required|
|---|---|
|string|No|

`borderTopColor`
---
The border top color property (`borderTopColor` style prop in StyleSheet)

|Type|Required|
|---|---|
|string|No|

`borderBottomColor`
---
The border bottom color property (`borderBottomColor` style prop in StyleSheet)

|Type|Required|
|---|---|
|string|No|

`borderRightColor`
---
The border right color property (`borderRightColor` style prop in StyleSheet)

|Type|Required|
|---|---|
|string|No|

`borderLeftColor`
---
The border left color property (`borderLeftColor` style prop in StyleSheet)

|Type|Required|
|---|---|
|string|No|

`borderWidth`
---
The border width property (`borderWidth` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`borderTopWidth`
---
The border top width property (`borderTopWidth` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`borderBottomWidth`
---
The border bottom width property (`borderBottomWidth` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`borderRightWidth`
---
The border right width property (`borderRightWidth` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`borderLeftWidth`
---
The border left width property (`borderLeftWidth` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|
