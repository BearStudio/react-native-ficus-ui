import React, { useState } from 'react';

import { ThemingProps } from '@ficus-ui/style-system';
import { useTheme } from '@ficus-ui/theme';

import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  toStyleSheetObject,
  useStyleConfig,
} from '../system';
import { useSelect } from './select.service';

export interface SelectProps
  extends NativeFicusProps<'PickerSelect'>,
    ThemingProps<'Select'> {}

export const Select = forwardRef<SelectProps, 'PickerSelect'>((props, ref) => {
  const styles = useStyleConfig('Select', props);

  const [isFocused, setIsFocused] = useState(false);

  const { theme } = useTheme();

  const { selectStyles } = useSelect(styles, isFocused);

  const inputStyle = toStyleSheetObject({ baseStyle: selectStyles })({
    ...selectStyles,
    theme,
    style: undefined,
    ...(isFocused && props.colorScheme
      ? { borderColor: `${props.colorScheme}.500` }
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
      {...props}
    />
  );
});
