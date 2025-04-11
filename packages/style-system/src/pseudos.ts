/**
 * Defines pseudo-class selectors mapped to corresponding states.
 * These can be extended as needed.
 */
export const pseudoStylesMap = {
  _disabled: 'disabled',
  _focused: 'focused',
  /**
   * Specificaly for the Pressable component
   */
  _pressed: 'pressed',
  // Extend if needed: Add new states here
} as const;

/**
 * Represents the valid pseudo-class keys derived from `pseudoStylesMap`.
 */
export type PseudoStyleKey = keyof typeof pseudoStylesMap;
