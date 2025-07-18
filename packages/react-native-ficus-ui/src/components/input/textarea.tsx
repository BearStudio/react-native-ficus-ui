import { useImperativeHandle, useRef, useState } from 'react';

import { Dict, splitProps } from '@chakra-ui/utils';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
} from 'react-native';

import {
  PrefixSuffixProps,
  ThemingProps,
  isStyleProp,
  omitThemingProps,
} from '../../style-system';
import { ButtonSpinner } from '../button/button-spinner';
import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useStyleConfig,
} from '../system';
import { useInput } from './input.service';
import { InputOptions } from './input.types';

export interface TextareaProps
  extends NativeFicusProps<'TextInput'>,
    PrefixSuffixProps,
    InputOptions,
    ThemingProps<'Textarea'> {}

export const Textarea = forwardRef<TextareaProps, 'TextInput'>((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const innerRef = useRef<RNTextInput>(null);

  useImperativeHandle(ref, () => innerRef.current as RNTextInput);

  const [stylesProps, inputProps] = splitProps(props as Dict, isStyleProp);

  const styles = useStyleConfig('Textarea', stylesProps);

  const {
    inputStyles,
    inputContainerStyles,
    prefixStyles,
    suffixStyles,
    spinnerStyles,
  } = useInput(props, styles, isFocused);

  const propsWithoutThemingProps = omitThemingProps(
    inputProps as Partial<TextareaProps>
  );

  const { onFocus, onBlur, prefix, suffix, isLoading, isDisabled, ...rest } =
    propsWithoutThemingProps;

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
    <ficus.TouchableWithoutFeedback onPress={onPressComponent}>
      <ficus.View>
        <ficus.View __styles={inputContainerStyles}>
          {prefix && <ficus.View __styles={prefixStyles}>{prefix}</ficus.View>}
          <ficus.TextInput
            ref={innerRef}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            __styles={inputStyles}
            editable={!isDisabled}
            aria-disabled={!isDisabled}
            multiline
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
      </ficus.View>
    </ficus.TouchableWithoutFeedback>
  );
});
