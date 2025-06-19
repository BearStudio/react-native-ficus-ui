import { Dict, splitProps } from '@chakra-ui/utils';
import {
  Cursor,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';

import {
  ResponsiveValue,
  ThemingProps,
  isStyleProp,
  omitThemingProps,
} from '../../style-system';
import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useStyleConfig,
} from '../system';
import { Text } from '../text';
import { usePinInputField } from './pin-input.service';
import { PinInputOptions } from './pin-input.types';

export interface PinInputFieldProps
  extends NativeFicusProps<'View'>,
    PinInputOptions,
    ThemingProps<'PinInputField'> {
  index?: number;
  symbol?: string;
  isFocused?: boolean;
  value?: string;
}

export const PinInputField = forwardRef<PinInputFieldProps, 'View'>(
  (props, ref) => {
    const [stylesProps, inputProps] = splitProps(props as Dict, isStyleProp);

    const styles = useStyleConfig('PinInputField', {
      ...stylesProps,
      size: inputProps?.size as ResponsiveValue<string>,
      variant: inputProps?.variant as ResponsiveValue<string>,
    });

    const { pinInputFieldStyles } = usePinInputField(props, styles);

    const propsWithoutThemingProps = omitThemingProps(
      inputProps as Partial<PinInputFieldProps>
    );

    const { mask, placeholder, symbol, value, index, isFocused, ...rest } =
      propsWithoutThemingProps;

    let textChild = null;

    if (symbol && mask) {
      textChild = (
        <MaskSymbol
          maskSymbol={placeholder || '•'}
          isLastFilledCell={isLastFilledCell({
            index: index || 0,
            value: value || '',
          })}
        >
          {symbol}
        </MaskSymbol>
      );
    } else if (symbol && !mask) {
      textChild = <Text>{symbol}</Text>;
    } else if (isFocused) {
      textChild = (
        <Text>
          <Cursor />
        </Text>
      );
    } else {
      textChild = '';
    }

    return (
      <ficus.View key={index} ref={ref}>
        <ficus.View
          __styles={pinInputFieldStyles}
          {...(isFocused && props.colorScheme
            ? { borderColor: `${props.colorScheme}.500` }
            : {})}
          {...rest}
        >
          <ficus.Text color="black" fontWeight="bold">
            {textChild}
          </ficus.Text>
        </ficus.View>
      </ficus.View>
    );
  }
);

PinInputField.displayName = 'PinInputField';
