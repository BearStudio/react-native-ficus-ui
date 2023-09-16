---
sidebar_position: 2
---

# Customization

You can provide a custom theme to customize the colors, font sizes, border radius etc. with the `ThemeProvider` component. Check the default theme to see which customization options are supported.

```js
import { AppRegistry } from "react-native";
import { ThemeProvider } from "react-native-ficus-ui";
import App from "./src/App";

// this is our custom theme
const theme = {
  colors: {
    // Use Smart Swatch to generate colors palette https://smart-swatch.netlify.app
    violet: {
      50: '#f0eaff',
      100: '#d1c1f4',
      200: '#b199e7',
      300: '#9171dc',
      400: '#7248d0',
      500: '#592fb7',
      600: '#45248f',
      700: '#311968',
      800: '#1e0f40',
      900: '#0c031b',
    },
  },
  fontSize: {
    '6xl': 32,
  },
  spacing: {
    xs: 2,
    '5xl': 64
  },
  // components defaults can also be customized
  {
    components: {
      Text: {
        color: 'gray.100'
      }
    }
  }
};

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
```

To generate custom colors palette use Smart Swatch tool : https://smart-swatch.netlify.app