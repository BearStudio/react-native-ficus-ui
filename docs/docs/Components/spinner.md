---
sidebar_position: 12
---

# Spinner

Simple spinner component that is based on react native `ActivityIndicator` component.

## Import

```js
import { Spinner } from "react-native-ficus-ui";
```

## Usage

```js
<Spinner />
<Spinner color="blue.500" size="sm" />
<Spinner color="red.500" size="lg" />
<Spinner color="green.500" size="lg" />
<Spinner color="pink.500" size="lg" />
```

## Props

Extends every `Box` props and react native `ActivityIndicator` component.

https://reactnative.dev/docs/activityindicator#props

`color`
---
The color property for `ActivityIndicator`.

|Type|Required|
|---|---|
|string|No|

`size`
---
The size property for `ActivityIndicator`.

|Type|Required|
|---|---|
|number, string|No|