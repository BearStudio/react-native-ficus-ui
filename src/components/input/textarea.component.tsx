import * as React from 'react';
import { useState } from 'react';
import {
  View as RNView,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInput as RNTextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import { getStyle } from './input.style';
import { TextareaProps } from './textarea.type';
import { useTheme } from '../../theme';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Textarea = React.forwardRef<RNTextInput, TextareaProps>(
  (incomingProps, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const innerRef = React.useRef<RNTextInput>(null);

    React.useImperativeHandle(ref, () => innerRef.current as RNTextInput);

    const props = useDefaultProps('Textarea', incomingProps, {
      minH: 100,
      p: 'lg',
      bg: 'white',
      borderColor: 'gray.400',
      borderWidth: 1,
      focusBorderWidth: 2,
      focusBorderStyle: 'solid',
      borderRadius: 'md',
      multiline: true,
      textAlignVertical: 'top',
      color: 'gray.800',
    });

    const {
      h,
      w,
      m,
      minH,
      minW,
      suffix,
      prefix,
      style,
      onBlur,
      onFocus,
      children,
      focusBorderColor,
      focusBorderWidth,
      borderWidth,
      ...rest
    } = props;
    const { theme } = useTheme();
    const computedStyle = getStyle(theme, props, {
      isFocused,
      isTextarea: true,
    });

    /**
     * on focus input
     */
    const onFocusInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);

      if (onFocus) {
        onFocus(e);
      }
    };

    /**
     * on blur input
     * @param e
     */
    const onBlurInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);

      if (onBlur) {
        onBlur(e);
      }
    };

    const onPressComponent = () => {
      if (innerRef?.current) {
        innerRef?.current?.focus();
      }
    };

    return (
      <TouchableWithoutFeedback onPress={onPressComponent}>
        <RNView style={computedStyle.container}>
          <RNTextInput
            ref={innerRef}
            onFocus={(e) => onFocusInput(e)}
            onBlur={(e) => onBlurInput(e)}
            style={computedStyle.input}
            {...rest}
          />
        </RNView>
      </TouchableWithoutFeedback>
    );
  }
);

// Textarea.defaultProps = {
//   minH: 100,
//   p: 'lg',
//   borderColor: 'gray.500',
//   borderWidth: 1,
// };

export { Textarea };
