import { mergeWith } from '@chakra-ui/utils';

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

export const isStyleProp = (prop: string) => prop in systemProps;

export const isTextProp = (prop: string) => prop in text;
