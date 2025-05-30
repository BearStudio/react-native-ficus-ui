import { useEffect, useRef, useState } from 'react';

import { Animated } from 'react-native';
import {
  ThemingProps,
  omitThemingProps,
} from 'react-native-ficus-ui/style-system';
import { getColor, useTheme } from 'react-native-ficus-ui/theme';

import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  toStyleSheetObject,
  useMultiStyleConfig,
} from '../system';
import { useSwitch } from './switch.service';
import { SwitchOptions } from './switch.types';

export interface SwitchProps
  extends NativeFicusProps<'TouchableOpacity'>,
    ThemingProps<'Switch'>,
    SwitchOptions {}
export const Switch = forwardRef<SwitchProps, 'TouchableOpacity'>(
  (props, ref) => {
    const { theme } = useTheme();

    const styles = useMultiStyleConfig('Switch', props);
    const { isDisabled, isChecked, duration, onPress, bg, __styles, ...rest } =
      omitThemingProps(props);

    const prevSwitchOnRef = useRef<boolean>();
    const prevSwitchOn = !!prevSwitchOnRef.current;

    const { containerStyles, trackStyles, thumbStyles } = useSwitch(
      props,
      styles
    );

    const trackStyleObject = toStyleSheetObject({
      baseStyle: trackStyles,
    })({
      ...trackStyles,
      style: {},
      theme,
    });

    const thumbStyleObject = toStyleSheetObject({ baseStyle: thumbStyles })({
      ...thumbStyles,
      style: {},
      theme,
    });

    const [animXValue] = useState(new Animated.Value(isChecked ? 1 : 0));
    const endPos =
      ((trackStyleObject.width as number) || 0) -
      (thumbStyleObject.width as number) -
      ((trackStyleObject.padding as number) * 2 || 0);
    const circlePosXEnd = endPos;

    const [circlePosXStart] = useState(0);

    /**
     *
     */
    useEffect(() => {
      const runAnimation = (): void => {
        const animValue = {
          fromValue: isChecked ? 0 : 1,
          toValue: isChecked ? 1 : 0,
          duration:
            duration || theme.components?.Switch?.defaultProps?.duration,
          useNativeDriver: false,
        };
        Animated.timing(animXValue, animValue).start();
      };

      prevSwitchOnRef.current = isChecked;
      if (prevSwitchOn !== isChecked) {
        runAnimation();
      }
    }, [animXValue, prevSwitchOn, isChecked, duration]);

    return (
      <ficus.TouchableOpacity
        ref={ref}
        onPress={!isDisabled ? onPress : () => {}}
        disabled={isDisabled}
        activeOpacity={0.5}
        __styles={containerStyles}
        w={trackStyleObject.width}
        {...rest}
      >
        <Animated.View
          style={[
            trackStyleObject,
            {
              backgroundColor: animXValue.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  getColor(styles.track?.bg, theme.colors),
                  getColor(trackStyles?.bg, theme.colors),
                ],
              }),
            },
          ]}
        >
          <Animated.View
            style={[
              thumbStyleObject,
              {
                backgroundColor: animXValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    getColor(styles.thumb?.bg, theme.colors),
                    getColor(thumbStyles?.bg, theme.colors),
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
      </ficus.TouchableOpacity>
    );
  }
);
