---
sidebar_position: 2
---

import ExpoLayout from '../../../src/components/ExpoLayout/index.js';

# Box

Wrapper around `View` component from `react-native`, it accepts every props from react native `View` component.

## Import

```js
import { Box } from "react-native-ficus-ui";
```

## Usage

<ExpoLayout id="box" />

## Props

`bg`
---
The background color property (`backgroundColor` style prop in StyleSheet)

|Type|Required|
|---|---|
|string|No|

`bgImg`
---
The background image property. Will use `ImageBackground` component as parent wrapper.

|Type|Required|
|---|---|
|ImageSourcePropType|No|

`bgMode`
---
The background image mode property.

|Type|Required|
|---|---|
|enum("contain", "cover", "stretch")|No|

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

`flexDirection`
---
The flex direction property for container (`flexDirection` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("row", "column", "row-reverse", "column-reverse")|No|

`direction`
---
The flex direction property for container (`flexDirection` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("row", "column", "row-reverse", "column-reverse")|No|

`flexWrap`
---
The flex wrap property for container (`flexWrap` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("wrap", "nowrap", "wrap-reverse")|No|

`wrap`
---
The flex wrap property for container (`flexWrap` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("wrap", "nowrap", "wrap-reverse")|No|

`flexGrow`
---
The flex grow property for container (`flexGrow` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`grow`
---
The flex grow property for container (`flexGrow` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`flexBasis`
---
The flex basis property for container (`flexBasis` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`basis`
---
The flex basis property for container (`flexBasis` style prop in StyleSheet)

|Type|Required|
|---|---|
|number, string|No|

`flexShrink`
---
The flex shrink property for container (`flexShrink` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`shrink`
---
The flex shrink property for container (`flexShrink` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`justifyContent`
---
The justify content property for container (`justifyContent` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly")|No|

`alignItems`
---
The align items property for container (`alignItems` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("flex-start", "flex-end", "center", "stretch", "baseline")|No|

`alignSelf`
---
The align self property for container (`alignSelf` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("auto", "flex-start", "flex-end", "center", "stretch", "baseline")|No|

`position`
---
The position property for container (`position` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("absolute", "relative")|No|

`top`
---
The top position property for container (`top` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`bottom`
---
The bottom position property for container (`bottom` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`right`
---
The right position property for container (`right` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`left`
---
The left position property for container (`left` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`overflow`
---
The overflow property for container (`overflow` style prop in StyleSheet)

|Type|Required|
|---|---|
|enum("visible", "scroll", "hidden")|No|

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

`shadow`
---
The shadow property (`shadowOffset` and `elevation` style props in StyleSheet)

|Type|Required|
|---|---|
|number|No|

`shadowColor`
---
The shadow color property (`shadowColor` style props in StyleSheet)

|Type|Required|
|---|---|
|string|No|

`opacity`
---
The opacity property (`opacity` style prop in StyleSheet)

|Type|Required|
|---|---|
|number|No|
