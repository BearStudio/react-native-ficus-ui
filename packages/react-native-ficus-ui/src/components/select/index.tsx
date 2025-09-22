import React, { useState } from 'react';

import { useColorModeValue } from '../../hooks';
import { ThemingProps } from '../../style-system';
import { useTheme } from '../../theme';
import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  toStyleSheetObject,
  useStyleConfig,
} from '../system';
import { TextProps } from '../text';
import { useSelect } from './select.service';

export interface SelectProps
  extends NativeFicusProps<'PickerSelect'>,
    Partial<Omit<TextProps, 'as' | 'style'>>,
    ThemingProps<'Select'> {}

export const Select = forwardRef<SelectProps, 'PickerSelect'>((props, ref) => {
  const styles = useStyleConfig('Select', props);

  const [isFocused, setIsFocused] = useState(false);

  const { theme } = useTheme();

  const { selectStyles } = useSelect(styles, isFocused);

  const colorValue = useColorModeValue(500, 300);

  const inputStyle = toStyleSheetObject({ baseStyle: selectStyles })({
    ...selectStyles,
    theme,
    style: undefined,
    ...(isFocused && props.colorScheme
      ? { borderColor: `${props.colorScheme}.${colorValue}` }
      : {}),
  });

  return (
    <ficus.PickerSelect
      ref={ref}
      placeholder={{ label: 'Select an option...', value: undefined }}
      style={{
        inputIOSContainer: { pointerEvents: 'none' },
        inputIOS: inputStyle,
        inputAndroid: inputStyle,
      }}
      onOpen={() => setIsFocused(true)}
      onClose={() => setIsFocused(false)}
      // To make is focused work on android
      pickerProps={{
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false),
      }}
      useNativeAndroidPickerStyle={false}
      {...props}
    />
  );
});
