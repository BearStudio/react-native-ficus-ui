import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import { Animated, TouchableOpacity } from 'react-native';

import { useTheme } from '../../theme';
import { getThemeColor } from '../../theme/theme.service';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getStyle } from './switch.style';
import { SwitchProps } from './switch.type';

const Switch: React.FC<SwitchProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Switch',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      w: 55,
      h: 30,
      onPress: (): void => {},
      colorScheme: 'green',
      bg: 'gray.400',
      on: false,
      thumbSize: 24,
      thumbBg: 'white',
      activeThumbBg: 'white',
      duration: 300,
      borderRadius: 'full',
      isDisabled: false,
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
    isDisabled,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
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
    onPress,
    colorScheme,
    activeBg,
    thumbSize,
    thumbBg,
    activeThumbBg,
    duration,
    on,
    ...rest
  } = props;
  const [animXValue] = useState(new Animated.Value(on ? 1 : 0));
  const computedStyle = getStyle(theme, props);
  const endPos = (w as number) - thumbSize - 3;
  const circlePosXEnd = endPos;
  const [circlePosXStart] = useState(3);

  const prevSwitchOnRef = useRef<boolean>();
  const prevSwitchOn = !!prevSwitchOnRef.current;

  /**
   *
   */
  useEffect(() => {
    const runAnimation = (): void => {
      const animValue = {
        fromValue: on ? 0 : 1,
        toValue: on ? 1 : 0,
        duration,
        useNativeDriver: false,
      };
      Animated.timing(animXValue, animValue).start();
    };

    prevSwitchOnRef.current = on;
    if (prevSwitchOn !== on) {
      runAnimation();
    }
  }, [animXValue, prevSwitchOn, on, duration]);

  return (
    <TouchableOpacity
      onPress={!isDisabled ? onPress : () => {}}
      activeOpacity={0.5}
      {...rest}
    >
      <Animated.View
        style={[
          computedStyle.container,
          {
            backgroundColor: animXValue.interpolate({
              inputRange: [0, 1],
              outputRange: [
                getThemeColor(theme.colors, bg),
                getThemeColor(
                  theme.colors,
                  props.activeBg ? props.activeBg : `${colorScheme}.500`
                ),
              ],
            }),
          },
        ]}
      >
        <Animated.View
          style={[
            computedStyle.circle,
            {
              backgroundColor: animXValue.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  getThemeColor(theme.colors, thumbBg),
                  getThemeColor(theme.colors, activeThumbBg),
                ],
              }),
            },
            {
              transform: [
                {
                  translateX: animXValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      circlePosXStart as string | number,
                      circlePosXEnd as string | number,
                    ] as string[] | number[],
                  }),
                },
              ],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

// Switch.defaultProps = {
//   w: 55,
//   h: 30,
//   onPress: (): void => {},
//   activeBg: 'green.600',
//   bg: 'gray.400',
//   on: false,
//   circleBg: 'white',
//   activeCircleBg: 'white',
//   duration: 300,
//   borderRadius: 'full',
//   isDisabled: false,
// };

export { Switch };
