import * as React from 'react';

import { TextInput as RNTextInput, View } from 'react-native';
import {
  CodeField,
  Cursor,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';

import { useTheme } from '../../theme/theme.hook';
import { getThemeColor } from '../../theme/theme.service';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Center } from '../center/center.component';
import { Text } from '../text/text.component';
import { getStyle } from './pin-input.style';
import type { PinInputProps } from './pin-input.type';

const PinInput = React.forwardRef<RNTextInput, PinInputProps>(
  (incomingProps, ref) => {
    const { theme, windowWidth } = useTheme();
    const props = useDefaultProps(
      'PinInput',
      handleResponsiveProps(incomingProps, theme, windowWidth),
      {
        bg: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadow: 'none',
        position: 'relative',
        bgMode: 'cover',
        pointerEvents: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray.300',
        borderRadius: 'md',
        focusBorderColor: 'blue.500',
        focusBorderWidth: 2,
      }
    );

    const {
      bg,
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
      minH,
      minW,
      maxW,
      maxH,
      position,
      style,
      flexDirection,
      direction,
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
      bgImg,
      bgMode,
      alignItems,
      align,
      justifyContent,
      justify,
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
      borderStyle,
      flexWrap,
      wrap,
      flexGrow,
      grow,
      flexBasis,
      basis,
      flexShrink,
      shrink,
      shadow,
      shadowColor,
      opacity,
      overflow,
      top,
      left,
      right,
      bottom,
      zIndex,
      colorScheme,
      focusBorderColor,
      focusBorderWidth,
      focusBorderStyle,
      mask,
      placeholder,
      ...rest
    } = props;
    const computedStyle = getStyle(theme, props);

    const renderCell = ({
      index,
      symbol,
      isFocused,
    }: {
      index: number;
      symbol: string;
      isFocused: boolean;
    }) => {
      let textChild = null;

      if (symbol && mask) {
        textChild = (
          <MaskSymbol
            maskSymbol={placeholder || '•'}
            isLastFilledCell={isLastFilledCell({ index, value: props.value })}
          >
            {symbol}
          </MaskSymbol>
        );
      } else if (symbol && !mask) {
        textChild = symbol;
      } else if (isFocused) {
        textChild = <Cursor />;
      } else {
        textChild = '';
      }

      return (
        <View key={index}>
          <Center
            w={50}
            h={50}
            borderWidth={isFocused ? focusBorderWidth : borderWidth}
            borderColor={
              isFocused
                ? props.colorScheme
                  ? getThemeColor(theme.colors, `${props.colorScheme}.500`)
                  : getThemeColor(theme.colors, focusBorderColor)
                : borderColor
            }
            borderStyle={isFocused ? focusBorderStyle : borderStyle}
            style={computedStyle.pininputItem}
          >
            <Text color="black" fontWeight="bold">
              {textChild}
            </Text>
          </Center>
        </View>
      );
    };

    return (
      <CodeField
        ref={ref}
        renderCell={renderCell}
        rootStyle={computedStyle.pininput}
        {...rest}
      />
    );
  }
);

export { PinInput };
