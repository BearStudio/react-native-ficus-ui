import { mergeWith, splitProps } from '@chakra-ui/utils';

import {
  background,
  border,
  color,
  effect,
  flexbox,
  interactivty,
  layout,
  position,
  radius,
  space,
  text,
} from './config';
import { pseudoStylesMap } from './pseudos';
import { Dict } from './utils';

export const systemProps = mergeWith(
  {},
  background,
  border,
  color,
  effect,
  flexbox,
  interactivty,
  layout,
  position,
  radius,
  space,
  text
);

const styleProps = { ...systemProps, ...pseudoStylesMap };

export const isStyleProp = (prop: string) => prop in styleProps;

export const isTextProp = (prop: string) => prop in text;

/**
 * In React Native, text styles can only be applied to Text component.
 * We sometimes need to split the props to apply them to the proper element.
 */
export function splitTextProps(props: Dict) {
  return splitProps(props, isTextProp);
}
