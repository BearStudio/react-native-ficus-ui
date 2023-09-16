---
sidebar_position: 1
---

# useToast

Hook to display a Toast component imported from `react-native-toast-message` library.

https://github.com/calintamas/react-native-toast-message
## Import

```js
import { useToast } from "react-native-ficus-ui";
```

## Usage

```js
const { show, hide } = useToast();

<Button
    onPress={() => {
        show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋',
        });
    }}
    colorScheme="green"
>
    Show Success
</Button>
```

## Default config on theme

```js
toastProps: {
    position: 'bottom',
    config: {
        success: ({ text1, text2 }) => (
            <Box bg="green.500" p="lg" borderRadius="lg">
                <Text color="white" fontWeight="bold" fontSize="lg">
                    {text1}
                </Text>
                <Text color="white">{text2}</Text>
            </Box>
        ),
        error: ({ text1, text2 }) => (
            <Box bg="red.500" p="lg" borderRadius="lg">
                <Text color="white" fontWeight="bold" fontSize="lg">
                    {text1}
                </Text>
                <Text color="white">{text2}</Text>
            </Box>
        ),
        warning: ({ text1, text2 }) => (
            <Box bg="orange.500" p="lg" borderRadius="lg">
                <Text color="white" fontWeight="bold" fontSize="lg">
                    {text1}
                </Text>
                <Text color="white">{text2}</Text>
            </Box>
        ),
        info: ({ text1, text2 }) => (
            <Box bg="blue.500" p="lg" borderRadius="lg">
                <Text color="white" fontWeight="bold" fontSize="lg">
                    {text1}
                </Text>
                <Text color="white">{text2}</Text>
            </Box>
        ),
    },
},
```

## Custom Toast config

You can edit all Toast props and Toast layout as you want by passing `ToastProps` to your theme as defined here :

https://github.com/calintamas/react-native-toast-message/blob/main/src/types/index.ts

Pass `ToastProps` into `toastProps` object inside your Ficus UI theme.