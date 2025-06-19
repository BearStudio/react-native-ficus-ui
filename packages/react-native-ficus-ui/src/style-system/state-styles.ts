import { ColorMode } from '../theme/context';
import { Dict } from './utils';

/**
 * Represents states managed by the React Native `Pressable` component.
 * These states are controlled automatically based on user interactions.
 */
export interface PressableStates {
  /** Whether the component is currently being pressed. */
  pressed?: boolean;
}

/**
 * Represents custom states that are manually controlled within the library.
 */
export interface CustomStates {
  /** Whether the component is disabled and non-interactive. */
  disabled?: boolean;
  /** Whether the component is focused. */
  focused?: boolean;
  /** Whether the component is checked. */
  checked?: boolean;
}

export interface ComponentStates extends PressableStates, CustomStates {}

export function stateStyleResolver(states: CustomStates, colorMode: ColorMode) {
  const isDark = colorMode === 'dark';

  return function resolver(styles: Dict) {
    return {
      ...styles,
      ...(isDark ? styles._dark : {}),
      _dark: null,
      ...(states.focused
        ? isDark
          ? { ...styles._focused, ...styles._focused?._dark }
          : styles._focused
        : {}),
      _focused: null,
      ...(states.checked
        ? isDark
          ? { ...styles._checked, ...styles._checked?._dark }
          : styles._checked
        : {}),
      _checked: null,
      ...(states.disabled
        ? isDark
          ? { ...styles._disabled, ...styles._disabled?._dark }
          : styles._disabled
        : {}),
      _disabled: null,
    };
  };
}
