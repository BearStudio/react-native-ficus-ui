import { getThemeColor, getThemeProperty, theme } from '@ficus-ui/theme';

import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useStyleConfig,
} from '../system';
import { getIconSet, iconFontFamilyType } from './icon.service';

interface IconOptions {
  name: string;
  color?: string;
  fontSize?: string;
  fontFamily?: iconFontFamilyType;
}

export interface IconProps extends NativeFicusProps<'View'>, IconOptions {}

export const Icon = forwardRef<IconProps, 'View'>(function Badge(props, ref) {
  const { name, fontFamily, color, fontSize, ...rest } = props;
  const IconComponent = getIconSet(fontFamily);
  return (
    <ficus.View ref={ref} {...rest}>
      <IconComponent
        color={getThemeColor(theme.colors, color)}
        size={getThemeProperty(theme.fontSizes, fontSize)}
        name={name}
      />
    </ficus.View>
  );
});
