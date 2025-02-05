import * as React from 'react';
import color from 'color';
import { useState } from 'react';
import {
  View as RNView,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInput as RNTextInput,
  ActivityIndicator as RNActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';

import { getStyle } from './input.style';
import { InputProps } from './input.type';
import { useTheme } from '../../theme';
import { getThemeProperty, getThemeColor } from '../../theme/theme.service';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';

const Input = React.forwardRef<RNTextInput, InputProps>(
  (incomingProps, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const innerRef = React.useRef<RNTextInput>(null);

    React.useImperativeHandle(ref, () => innerRef.current as RNTextInput);

    const { theme, windowWidth } = useTheme();
    const props = useDefaultProps(
      'Input',
      handleResponsiveProps(incomingProps, theme, windowWidth),
      {
        px: 'lg',
        py: 'lg',
        fontSize: 'md',
        bg: 'white',
        borderWidth: 1,
        focusBorderWidth: 2,
        focusBorderStyle: 'solid',
        borderColor: 'gray.400',
        borderRadius: 'md',
        isLoading: false,
        color: 'gray.800',
        shadow: 0,
        shadowColor: 'gray.500',
        loaderSize: '3xl',
        loaderColor: 'blue.700',
      }
    );

    const {
      h,
      w,
      m,
      mt,
      mr,
      mb,
      ml,
      ms,
      p,
      pr,
      pt,
      pb,
      pl,
      bg,
      minH,
      minW,
      color: colorProp,
      suffix,
      prefix,
      style,
      onBlur,
      isLoading,
      onFocus,
      borderRadius,
      borderTopRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderLeftRadius,
      borderRightRadius,
      borderBottomRadius,
      children,
      loaderSize,
      fontSize,
      borderColor,
      borderBottomColor,
      borderLeftColor,
      borderTopColor,
      borderRightColor,
      borderWidth,
      borderLeftWidth,
      borderRightWidth,
      borderBottomWidth,
      borderTopWidth,
      borderEndWidth,
      loaderColor,
      focusBorderColor,
      focusBorderWidth,
      shadow,
      flex,
      shadowColor,
      zIndex,
      opacity,
      placeholderTextColor,
      selectionColor,
      ...rest
    } = props;
    const computedStyle = getStyle(theme, props, { isFocused });
    const placeholderColor = placeholderTextColor
      ? typeof placeholderTextColor === 'string'
        ? color(getThemeColor(theme.colors, placeholderTextColor))
            .alpha(0.4)
            .rgb()
            .string()
        : placeholderTextColor
      : color(getThemeColor(theme.colors, colorProp)).alpha(0.4).rgb().string();

    /**
     * on focus input
     *
     * @param e
     */
    const onFocusInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);

      if (onFocus) {
        onFocus(e);
      }
    };

    /**
     * on blur input
     *
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
        <RNView style={computedStyle.marginContainer}>
          <RNView style={computedStyle.container}>
            {prefix && <RNView style={computedStyle.prefix}>{prefix}</RNView>}
            <RNTextInput
              ref={innerRef}
              onFocus={onFocusInput}
              onBlur={onBlurInput}
              selectionColor={
                typeof props.selectionColor === 'string'
                  ? getThemeColor(theme.colors, props.selectionColor)
                  : props.selectionColor
              }
              placeholderTextColor={placeholderColor}
              {...rest}
              style={computedStyle.input}
            />
            {!isLoading && suffix && (
              <RNView style={computedStyle.suffix}>{suffix}</RNView>
            )}
            {isLoading && (
              <RNView style={computedStyle.suffix}>
                <RNActivityIndicator
                  size={getThemeProperty(theme.fontSize, loaderSize)}
                  color={getThemeColor(theme.colors, loaderColor)}
                />
              </RNView>
            )}
          </RNView>
        </RNView>
      </TouchableWithoutFeedback>
    );
  }
);

// Input.defaultProps = {
//   px: 'xl',
//   py: 'lg',
//   fontSize: 'lg',
//   borderWidth: 0,
//   bg: 'white',
//   borderColor: 'gray.400',
//   borderRadius: 'md',
//   loading: false,
//   color: 'gray.800',
//   shadow: 0,
//   shadowColor: 'gray.500',
//   loaderSize: '3xl',
//   loaderColor: 'blue.700',
// };

export { Input };
