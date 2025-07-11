import { t } from '../utils';
import { Config } from '../utils/prop-config';
import { ResponsiveValue } from '../utils/types';

export const radius: Config<RadiusProps> = {
  rounded: t.radius('borderRadius'),
  borderRadius: t.radius('borderRadius'),
  borderTopLeftRadius: t.radius('borderTopLeftRadius'),
  borderTopRightRadius: t.radius('borderTopRightRadius'),
  borderBottomLeftRadius: t.radius('borderBottomLeftRadius'),
  borderBottomRightRadius: t.radius('borderBottomRightRadius'),
  borderTopRadius: t.radius(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderLeftRadius: t.radius(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: t.radius([
    'borderTopRightRadius',
    'borderBottomRightRadius',
  ]),
  borderBottomRadius: t.radius([
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ]),
};

export interface RadiusProps {
  rounded?: ResponsiveValue<string | number>;
  borderRadius?: ResponsiveValue<string | number>;
  borderTopLeftRadius?: ResponsiveValue<string | number>;
  borderTopRightRadius?: ResponsiveValue<string | number>;
  borderBottomLeftRadius?: ResponsiveValue<string | number>;
  borderBottomRightRadius?: ResponsiveValue<string | number>;
  borderTopRadius?: ResponsiveValue<string | number>;
  borderLeftRadius?: ResponsiveValue<string | number>;
  borderRightRadius?: ResponsiveValue<string | number>;
  borderBottomRadius?: ResponsiveValue<string | number>;
}
