import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  View as RNView,
  Pressable as RNButton,
  GestureResponderEvent as RNGestureResponderEvent,
} from 'react-native';

import { getStyle } from './checkbox.style';
import { isFunction } from '../../utilities';
import { getIcon } from './checkbox.service';
import { CheckboxGroup } from './group.component';
import { CompundedCheckbox, CheckboxProps } from './checkbox.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { useTheme } from '../../theme';
import { Text } from '../text/text.component';
import { handleResponsiveProps } from '../../types';

const Checkbox: CompundedCheckbox<CheckboxProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Checkbox',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      defaultChecked: false,
      colorScheme: 'blue',
      bg: 'transparent',
      p: 'none',
      color: 'black',
      borderRadius: 'md',
      isLoading: false,
      isDisabled: false,
      full: false,
      position: 'relative',
      shadowColor: 'gray.800',
      shadow: 0,
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
    full,
    alignSelf,
    icon,
    onChange,
    value,
    colorScheme,
    defaultChecked,
    isChecked: checkedProp,
    onChecked,
    onPress: onPressProp,
    size,
    ...rest
  } = props;
  const [checked, setChecked] = useState(
    ('checked' in props ? checkedProp : defaultChecked) ?? false
  );
  const computedStyle = getStyle(theme, props);

  useEffect(() => {
    if ('checked' in props) {
      setChecked(props.isChecked ?? false);
    }
  }, [props]);

  /**
   * on press checkbox
   */
  const onPress = (event: RNGestureResponderEvent) => {
    if (isDisabled) {
      return;
    }

    setChecked(!checked);

    if (isFunction(onChecked)) {
      onChecked(!checked);
    }

    if (isFunction(onPressProp)) {
      onPressProp(event);
    }

    // if onChange prop is a valid function, call it
    if (isFunction(onChange)) {
      onChange(value);
    }
  };

  const iconObj = getIcon(theme, props, checked);

  const renderChildren = () => {
    if (isFunction(children)) {
      return children({
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
      style={computedStyle.button}
      onPress={isDisabled || isLoading ? undefined : onPress}
    >
      <RNView style={computedStyle.container}>{renderChildren()}</RNView>
    </RNButton>
  );
};

// Checkbox.defaultProps = {
// defaultChecked: false,
// colorScheme: 'blue',
// bg: 'transparent',
// p: 'none',
// color: 'white',
// borderRadius: 'md',
// isLoading: false,
// isDisabled: false,
// full: false,
// position: 'relative',
// shadowColor: 'gray.800',
// shadow: 0,
// alignItems: 'center',
// justifyContent: 'center',
// alignSelf: 'flex-start',
// onPress: () => {},
// flexDirection: 'row',
// size: 'sm',
// };

Checkbox.Group = CheckboxGroup;

export { Checkbox };
