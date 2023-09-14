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

const Checkbox: CompundedCheckbox<CheckboxProps> = (incomingProps) => {
  const props = useDefaultProps('Checkbox', incomingProps, {
    defaultChecked: false,
    colorScheme: 'blue',
    bg: 'transparent',
    p: 'none',
    color: 'white',
    borderRadius: 'md',
    isLoading: false,
    isDisabled: false,
    loaderSize: '2xl',
    full: false,
    position: 'relative',
    shadowColor: 'gray.800',
    shadow: 0,
    fontSize: '5xl',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    onPress: () => {},
    flexDirection: 'row',
  });

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
    ...rest
  } = props;
  const { theme } = useTheme();
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
          <RNView style={computedStyle.highlightContainer} />
          <RNView style={computedStyle.icon}>{iconObj}</RNView>
        </RNView>
        {children}
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
//   defaultChecked: false,
//   activeColor: 'blue600',
//   inactiveColor: 'gray500',
//   highlightBg: 'gray300',
//   bg: 'transparent',
//   p: 'none',
//   color: 'white',
//   borderRadius: 'md',
//   isLoading: false,
//   isDisabled: false,
//   loaderSize: '2xl',
//   loaderColor: 'blue600',
//   block: false,
//   position: 'relative',
//   shadowColor: 'gray800',
//   shadow: 0,
//   fontSize: '5xl',
//   borderless: true,
//   alignItems: 'center',
//   justifyContent: 'center',
//   alignSelf: 'flex-start',
//   onPress: () => {},
//   flexDir: 'row',
// };

Checkbox.Group = CheckboxGroup;

export { Checkbox };
