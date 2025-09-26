import { useImperativeHandle, useRef, useState } from 'react';

import { Dict, splitProps } from '@chakra-ui/utils';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
} from 'react-native';

import { useColorModeValue } from '../../hooks';
import {
  PrefixSuffixProps,
  ResponsiveValue,
  ThemingProps,
  isStyleProp,
  omitThemingProps,
} from '../../style-system';
import { getColor, useTheme } from '../../theme';
import { ButtonSpinner } from '../button/button-spinner';
import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useStyleConfig,
} from '../system';
import { TextProps } from '../text';
import { useInput } from './input.service';
import { InputOptions } from './input.types';

export interface InputProps
  extends NativeFicusProps<'TextInput'>,
    PrefixSuffixProps,
    Omit<TextProps, 'textAlign' | 'textAlignVertical' | 'as'>,
    InputOptions,
    ThemingProps<'Input'> {}

export const Input = forwardRef<InputProps, 'TextInput'>((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const innerRef = useRef<RNTextInput>(null);

  const { theme } = useTheme();

  useImperativeHandle(ref, () => innerRef.current as RNTextInput);

  const [stylesProps, inputProps] = splitProps(props as Dict, isStyleProp);

  const styles = useStyleConfig('Input', {
    ...stylesProps,
    size: inputProps?.size as ResponsiveValue<string>,
    variant: inputProps?.variant as ResponsiveValue<string>,
  });

  const {
    inputStyles,
    spinnerStyles,
    inputContainerStyles,
    prefixStyles,
    suffixStyles,
  } = useInput(props, styles, isFocused);

  const propsWithoutThemingProps = omitThemingProps(
    inputProps as Partial<InputProps>
  );

  const {
    onFocus,
    onBlur,
    prefix,
    suffix,
    isLoading,
    isDisabled,
    placeholderTextColor,
    ...rest
  } = propsWithoutThemingProps;

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

  const colorValue = useColorModeValue(500, 300);

  return (
    <ficus.TouchableWithoutFeedback onPress={onPressComponent}>
      <ficus.View
        __styles={inputContainerStyles}
        {...(isFocused && props.colorScheme
          ? {
              borderColor: `${props.colorScheme}.${colorValue}`,
            }
          : {})}
      >
        {prefix && <ficus.View __styles={prefixStyles}>{prefix}</ficus.View>}
        <ficus.TextInput
          ref={innerRef}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          __styles={inputStyles}
          editable={!isDisabled}
          aria-disabled={isDisabled}
          placeholderTextColor={getColor(placeholderTextColor, theme.colors)}
          {...rest}
        />
        {!isLoading && suffix && (
          <ficus.View __styles={suffixStyles}>{suffix}</ficus.View>
        )}
        {isLoading && (
          <ficus.View __styles={suffixStyles}>
            <ButtonSpinner {...spinnerStyles} />
          </ficus.View>
        )}
      </ficus.View>
    </ficus.TouchableWithoutFeedback>
  );
});

export { Textarea } from './textarea';
