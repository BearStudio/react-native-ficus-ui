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
}

export interface ComponentStates extends PressableStates, CustomStates {}

export function stateStyleResolver(states: CustomStates) {
  return function resolver(styles: Dict) {
    return {
      ...styles,
      ...(states.disabled ? styles._disabled : {}),
    };
  };
}
