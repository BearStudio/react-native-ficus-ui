---
sidebar_position: 2
---

# Responsive styles

Ficus UI supports responsive styles out of the box. You can pass directly the prop value or an object containing differents values for each screen size.

```js
export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaBox>
        <Box h="100%" bg={{ base: "blue.500", sm: "red.600" }} />
      </SafeAreaBox>
    </ThemeProvider>
  );
}
```

## Default breakpoints in theme

```js
breakpoints: {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
}
```

You can overwrite those values and add your own breakpoints with theme customization.