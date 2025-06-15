import { getColor, getProperty, theme } from '../../theme';
import { type NativeFicusProps, ficus, forwardRef } from '../system';
import { type IconSet, getIconSet } from './icon.service';

interface IconOptions {
  name: string;
  color?: string;
  size?: string;
  iconSet?: IconSet;
}

export interface IconProps extends NativeFicusProps<'View'>, IconOptions {}

export const Icon = forwardRef<IconProps, 'View'>(function Icon(props, ref) {
  const { name, iconSet, color = 'gray.800', size, ...rest } = props;
  const IconComponent = getIconSet(iconSet);
  return (
    <ficus.View ref={ref} {...rest}>
      <IconComponent
        color={getColor(color, theme.colors)}
        size={getProperty(size, theme.fontSizes)}
        name={name}
      />
    </ficus.View>
  );
});
