import type { StyleProp, ViewStyle } from 'react-native';

import { SystemStyleObject } from '../../style-system';
import { NativeFicusProps, ficus, forwardRef } from '../system';
import { pressableStyleFn } from './pressable.service';

export interface PressableProps extends NativeFicusProps<'Pressable'> {
  /**
   * Regular view styles
   */
  style?: StyleProp<ViewStyle>; // To override default `Pressable` style type
  /**
   * Styles to apply when the component is pressed
   */
  _pressed?: SystemStyleObject;
}

/**
 * Unstyled wrapper around React Native Pressable Component.
 * @see https://reactnative.dev/docs/pressable
 *
 * Instead of passing a style function for the pressed state,
 * `pressed` style can be defined using the `_pressed` proprety
 */
export const Pressable = forwardRef<PressableProps, 'Pressable'>(
  function Pressable(props, ref) {
    return (
      <ficus.Pressable ref={ref} __stylesFn={pressableStyleFn} {...props} />
    );
  }
);
