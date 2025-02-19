/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useEffect, useState } from 'react';

import {
  Pressable as RNButton,
  GestureResponderEvent as RNGestureResponderEvent,
  View as RNView,
} from 'react-native';

import { getThemeProperty, useTheme } from '../../theme';
import { handleResponsiveProps } from '../../types';
import { isFunction } from '../../utilities';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Box } from '../box/box.component';
import { Icon } from '../icon/icon.component';
import { Spinner } from '../spinner/spinner.component';
import { Text } from '../text/text.component';
import { RadioGroup } from './group.component';
import { getIconColor, getIconName } from './radio.service';
import { getStyle } from './radio.style';
import { CompoundedRadio, RadioProps } from './radio.type';

const Radio: CompoundedRadio<RadioProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Radio',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      defaultChecked: false,
      colorScheme: 'blue',
      bg: 'transparent',
      p: 'none',
      color: 'black',
      borderRadius: 'full',
      isLoading: false,
      isDisabled: false,
      full: false,
      position: 'relative',
      shadowColor: 'gray800',
      shadow: 0,
      fontSize: '5xl',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      onPress: () => {},
      flexDirection: 'row',
      size: 'sm',
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
    isLoading,
    isDisabled,
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
    shadowColor,
    boxShadow,
    filter,
    full,
    alignSelf,
    icon,
    iconColor,
    colorScheme,
    onChange,
    defaultChecked,
    value,
    isChecked: checkedProp,
    onPress: onPressProp,
    size,
    ...rest
  } = props;
  const [checked, setChecked] = useState(props.isChecked ?? defaultChecked);
  const [isFocused, setIsFocused] = useState(false);
  const computedStyle = getStyle(theme, props as RadioProps);

  useEffect(() => {
    if ('isChecked' in props) {
      setChecked(props.isChecked);
    }
  }, [props]);

  /**
   * on press radio
   */
  const onPress = (event: RNGestureResponderEvent) => {
    if (isDisabled) {
      return;
    }

    // set the checked to true on press if there is no isChecked prop pass
    if (!('isChecked' in props)) {
      setChecked(true);
    }

    if (isFunction(onPressProp)) {
      onPressProp(event);
    }

    if (isFunction(onChange)) {
      onChange(value);
    }
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressIn = () => {
    setIsFocused(true);
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressOut = () => {
    setIsFocused(false);
  };

  const iconName = getIconName(checked);
  const iconColorValue = getIconColor(checked, isDisabled, iconColor, theme);
  const iconSize = getThemeProperty(theme.radio, size);

  /**
   * get icon
   * shows activity indication if loading state is true
   */
  const getIcon = () => {
    if (isLoading) {
      return (
        <Box
          w={iconSize}
          h={iconSize}
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size={size} color={`${colorScheme}.600`} />
        </Box>
      );
    }

    if (props.icon && typeof icon === 'string') {
      return (
        <Icon
          name={icon}
          color={iconColorValue}
          style={{ zIndex: 2, position: 'relative' }}
          fontFamily="AntDesign"
          fontSize={iconSize}
        />
      );
    }

    if (props.icon) {
      return icon;
    }

    return (
      <Icon
        name={iconName}
        color={`${colorScheme}.600`}
        zIndex={2}
        position="relative"
        fontFamily="MaterialIcons"
        fontSize={iconSize}
      />
    );
  };

  const iconObj = getIcon();

  const renderChildren = () => {
    if (isFunction(children)) {
      return children({
        isFocused,
        isDisabled: isDisabled ?? false,
        isChecked: checked,
        isLoading,
      });
    }

    return (
      <>
        {prefix}
        <RNView>
          <RNView style={computedStyle.icon}>{iconObj}</RNView>
        </RNView>
        {children && typeof children === 'string' ? (
          <Text style={computedStyle.text} ml="xs">
            {children}
          </Text>
        ) : (
          children
        )}
        {suffix}
      </>
    );
  };

  return (
    <RNButton
      {...rest}
      disabled={isDisabled ?? isLoading}
      style={computedStyle.button}
      onPress={isDisabled ? undefined : onPress}
      onPressIn={isDisabled ? undefined : onPressIn}
      onPressOut={isDisabled ? undefined : onPressOut}
    >
      <RNView style={computedStyle.container}>{renderChildren()}</RNView>
    </RNButton>
  );
};

// Radio.defaultProps = {
// defaultChecked: false,
// colorScheme: 'blue',
// bg: 'transparent',
// p: 'none',
// color: 'white',
// borderRadius: 'full',
// isChecked: false,
// isLoading: false,
// isDisabled: false,
// full: false,
// position: 'relative',
// shadowColor: 'gray800',
// shadow: 0,
// fontSize: '5xl',
// alignItems: 'center',
// justifyContent: 'center',
// alignSelf: 'flex-start',
// onPress: () => {},
// flexDirection: 'row',
// };

// passing RadioGroup as part of Radio
Radio.Group = RadioGroup;

export { Radio };
