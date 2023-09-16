---
sidebar_position: 12
---

# Icon

Component to display icon, it's a wrapper around the `Icon` component from `react-native-vector-icons` library.

## Import

```js
import { Icon } from "react-native-ficus-ui";
```

## Usage

```js
<Icon name="like1" color="blue.700" fontSize="6xl" />
<Icon
    name="star"
    color="yellow.700"
    fontSize="6xl"
    fontFamily="FontAwesome"
/>
<Icon name="codesquare" color="red.500" fontSize="6xl" />
<Icon name="android1" color="teal.500" fontSize="6xl" />
<Icon name="heart" color="red.500" fontSize="6xl" />
<Icon name="apple1" color="blue.700" fontSize="6xl" />
<Icon name="appstore1" color="teal.500" fontSize="6xl" />
<Icon name="slack" color="yellow.700" fontSize="6xl" />

<Icon
    bg="yellow.400"
    p={15}
    borderRadius="full"
    name="star"
    color="yellow.700"
    fontSize="2xl"
    fontFamily="FontAwesome"
/>
```

<img src="/img/icon.png" />

## Props

`color`
---
The color property (`color` style prop in StyleSheet)

|Type|Required|Default|
|---|---|---|
|string|No|gray.900|

`fontSize`
---
The font size property (`fontSize` style prop in StyleSheet)

|Type|Required|
|---|---|
|string, number|No|

`fontWeight`
---
The font weight style property (`fontWeight` style prop in StyleSheet)

|Type|Required|
|---|---|
|string|No|

`lineWeight`
---
The line weight style property (`lineWeight` style prop in StyleSheet)

|Type|Required|
|---|---|
|string|No|

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

`w`
---
The width property (`width` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`minH`
---
The minimum height property (`minHeight` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`minW`
---
The minimum width property (`minWidth` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`flex`
---
The flex property for container (`flex` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`textDecorLine`
---
The text decoration line style property (`textDecorationLine` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("none", "underline", "line-through", "underline line-through")|No|

`textDecorStyle`
---
The text decoration style property (`textDecorationStyle` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("solid", "double", "dotted", "dashed")|No|

`textDecorColor`
---
The text decoration color style property (`textDecorationColor` style prop in StyleSheet)

|Type|Required|
|---|---|
|string|No|

`textAlign`
---
The text alignment property (`textAlignment` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("auto", "left", "right", "center", "justify")|No|

`textTransform`
---
The text transform property (`textTransform` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("none", "uppercase", "lowercase", "capitalize")|No|

`letterSpacing`
---
The letter spacing property (`letterSpacing` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

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

`opacity`
---
The opacity property (`opacity` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|
