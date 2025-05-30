import React, { ReactNode } from 'react';

import { Dict, splitProps } from '@chakra-ui/utils';
import { RenderCellOptions } from 'react-native-confirmation-code-field';
import {
  ThemingProps,
  isStyleProp,
  omitThemingProps,
} from 'react-native-ficus-ui/style-system';
import { useTheme } from 'react-native-ficus-ui/theme';

import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  toStyleSheetObject,
  useStyleConfig,
} from '../system';
import { PinInputField } from './pin-input-field';
import { usePinInput } from './pin-input.service';
import { PinInputOptions } from './pin-input.types';

export interface PinInputProps
  extends Omit<NativeFicusProps<'CodeField'>, 'renderCell'>,
    PinInputOptions,
    ThemingProps<'PinInput'> {
  renderCell?: (options: RenderCellOptions) => ReactNode;
}

export const PinInput = forwardRef<PinInputProps, 'CodeField'>((props, ref) => {
  const [stylesProps, inputProps] = splitProps(props as Dict, isStyleProp);

  const { theme } = useTheme();

  const styles = useStyleConfig('PinInput', stylesProps);

  const { pinInputStyles } = usePinInput(props, styles);

  const propsWithoutThemingProps = omitThemingProps(
    inputProps as Partial<PinInputProps>
  );

  const { mask, placeholder, children, cellCount, ...rest } =
    propsWithoutThemingProps;

  const pinInputFields = React.Children.toArray(children).filter(
    (child: any) => child.type?.displayName === 'PinInputField'
  ) as any;

  const styleObject = toStyleSheetObject({ baseStyle: pinInputStyles })({
    ...pinInputStyles,
    theme,
  });

  const renderCell = ({
    index,
    symbol,
    isFocused,
  }: {
    index: number;
    symbol: string;
    isFocused: boolean;
  }) => (
    <PinInputField
      key={`pin-input-field-${index}`}
      index={index}
      symbol={symbol}
      mask={mask}
      placeholder={placeholder}
      isFocused={isFocused}
      {...inputProps}
    />
  );

  return (
    <ficus.CodeField
      ref={ref}
      renderCell={renderCell}
      rootStyle={styleObject}
      cellCount={
        pinInputFields?.length > 0 ? pinInputFields?.length : cellCount
      }
      {...rest}
    />
  );
});
