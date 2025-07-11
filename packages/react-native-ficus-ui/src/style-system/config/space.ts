import { t } from '../utils';
import { Config } from '../utils/prop-config';
import { ResponsiveValue } from '../utils/types';

export const space: Config<SpaceProps> = {
  m: t.space('margin'),
  mt: t.space('marginTop'),
  mr: t.space('marginRight'),
  mb: t.space('marginBottom'),
  ml: t.space('marginLeft'),
  mx: t.space('marginHorizontal'),
  my: t.space('marginVertical'),
  ms: t.space('marginStart'),
  p: t.space('padding'),
  pt: t.space('paddingTop'),
  pr: t.space('paddingRight'),
  pb: t.space('paddingBottom'),
  pl: t.space('paddingLeft'),
  px: t.space('paddingHorizontal'),
  py: t.space('paddingVertical'),
  ps: t.space('paddingStart'),
  gap: t.space('gap'),
  gapX: t.space('columnGap'),
  gapY: t.space('rowGap'),
};

export interface SpaceProps {
  m?: ResponsiveValue<string | number>;
  mt?: ResponsiveValue<string | number>;
  mr?: ResponsiveValue<string | number>;
  mb?: ResponsiveValue<string | number>;
  ml?: ResponsiveValue<string | number>;
  mx?: ResponsiveValue<string | number>;
  my?: ResponsiveValue<string | number>;
  ms?: ResponsiveValue<string | number>;
  p?: ResponsiveValue<string | number>;
  pt?: ResponsiveValue<string | number>;
  pr?: ResponsiveValue<string | number>;
  pb?: ResponsiveValue<string | number>;
  pl?: ResponsiveValue<string | number>;
  px?: ResponsiveValue<string | number>;
  py?: ResponsiveValue<string | number>;
  ps?: ResponsiveValue<string | number>;
  gap?: ResponsiveValue<string | number>;
  gapX?: ResponsiveValue<string | number>;
  gapY?: ResponsiveValue<string | number>;
}
