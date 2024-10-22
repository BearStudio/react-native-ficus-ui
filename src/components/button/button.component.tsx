import * as React from 'react';
import {
  View as RNView,
  Animated as RNAnimated,
  Pressable as RNButton,
  ActivityIndicator as RNActivityIndicator,
  Platform,
} from 'react-native';

import { getStyle } from './button.style';
import { useTheme } from '../../theme';
import { ButtonProps } from './button.type';
import { getThemeProperty, getThemeColor } from '../../theme/theme.service';
import { getUnderlayColor, getRippleColor } from './button.service';

import { Text } from '../text/text.component';
import { handleResponsiveProps, textProps } from '../../types';
import { getSpecificProps } from '../../utilities';

import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Icon } from '../icon/icon.component';

const Button: React.FunctionComponent<ButtonProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Button',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      colorScheme: 'gray',
      size: 'md',
      borderRadius: 'lg',
      isLoading: false,
      isDisabled: false,
      full: false,
      position: 'relative',
      shadowColor: 'gray.800',
      shadow: 0,
      rippleColor: 'white',
      ripple: true,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      onPress: () => {},
      flexDirection: 'row',
      fontWeight: 'bold',
      variant: 'solid',
    }
  );

  const {
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
    h,
    w,
    bg,
    minW,
    minH,
    suffix,
    style,
    fontSize,
    fontWeight,
    prefix,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    color: colorProp,
    colorScheme,
    isLoading,
    isDisabled,
    loaderColor,
    loaderSize,
    children,
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
    shadow,
    rippleColor,
    shadowColor,
    onPress,
    full,
    ripple,
    alignSelf,
    size,
    isRound,
    ...rest
  } = props;

  const computedStyle = getStyle(theme, props);
  const underlayColor = getUnderlayColor(theme, props);
  const calculatedRippleColor = getRippleColor(theme, props);

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text
          {...getSpecificProps(props, ...textProps)}
          style={computedStyle.text}
          {...(props.variant === 'link'
            ? {
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
                textDecorationColor: computedStyle.text.color,
              }
            : {})}
        >
          {children}
        </Text>
      );
    }

    // Check if children is an Icon component
    if (React.isValidElement(children) && children.type === Icon) {
      // Clone the Icon element and add the style prop to it
      return React.cloneElement(children as React.ReactElement<any>, {
        color: computedStyle.text.color,
        fontSize: computedStyle.text.fontSize,
      });
    }

    return children;
  };

  return (
    <RNButton
      {...rest}
      onPress={isDisabled || isLoading ? undefined : onPress}
      style={({ pressed }) => [
        computedStyle.button,
        pressed &&
          !isDisabled &&
          !isLoading && { backgroundColor: underlayColor },
      ]}
      android_ripple={
        !ripple
          ? {
              color: calculatedRippleColor,
            }
          : null
      }
    >
      {isLoading ? (
        <RNView style={computedStyle.container}>
          <RNView style={computedStyle.loadingContainer}>
            <RNActivityIndicator
              size={
                loaderSize ||
                getThemeProperty(theme.button, size)?.fontSize +
                  (Platform.OS === 'ios' ? 3 : 5)
              }
              color={
                loaderColor
                  ? getThemeColor(theme.colors, loaderColor)
                  : computedStyle?.text?.color
              }
            />
          </RNView>
        </RNView>
      ) : (
        <RNAnimated.View style={computedStyle.container}>
          <>
            {prefix}
            {renderChildren()}
            {suffix}
          </>
        </RNAnimated.View>
      )}
    </RNButton>
  );
};

export { Button };
