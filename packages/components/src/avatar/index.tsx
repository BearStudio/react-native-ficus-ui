import { useEffect, useState } from 'react';

import {
  TextStyleProps,
  ThemingProps,
  omitThemingProps,
  splitTextProps,
} from '@ficus-ui/style-system';
import {
  darkenColor,
  getThemeColor,
  getThemeProperty,
  lightenColor,
  stringToColor,
  useTheme,
} from '@ficus-ui/theme';

import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useStyleConfig,
} from '../system';
import { Text } from '../text';

interface AvatarOptions {
  name: string;
  src?: string;
}

export interface AvatarProps
  extends NativeFicusProps<'Image'>,
    TextStyleProps,
    ThemingProps<'Avatar'>,
    AvatarOptions {}

export const Avatar = forwardRef<AvatarProps, 'Image'>(
  function Avatar(props, ref) {
    const [isImageValid, setIsImageValid] = useState(false);
    const styles = useStyleConfig('Avatar', props);
    const { ...rest } = omitThemingProps(props);
    const [textStyles, restStyles] = splitTextProps(styles);
    const { theme } = useTheme();

    const getActualSize = getThemeProperty(theme.avatar, props.size);
    const getActualFontsize = props.fontSize
      ? getThemeProperty(theme.fontSizes, props.fontSize)
      : getThemeProperty(theme.avatar, props.size) / 2;
    const getActualBackgroundColor = props.bg
      ? getThemeColor(theme.colors, props.bg as string)
      : props.colorScheme
        ? getThemeColor(theme.colors, `${props.colorScheme}.300`)
        : props.name
          ? lightenColor(stringToColor(props.name), 30)
          : getThemeColor(theme.colors, 'gray.300');

    const getActualTextColor = props.color
      ? getThemeColor(theme.colors, props.color as string)
      : props.colorScheme
        ? getThemeColor(theme.colors, `${props.colorScheme}.800`)
        : props.name
          ? darkenColor(stringToColor(props.name), 40)
          : getThemeColor(theme.colors, 'gray.800');
    useEffect(() => {
      const checkImageUrl = async () => {
        if (props.src) {
          try {
            const response = await fetch(props.src);
            setIsImageValid(response.ok);
          } catch (error) {
            setIsImageValid(false);
          }
        }
      };

      checkImageUrl();
    }, [props.src]);

    const getInitials = (name: string) => {
      const nameParts = (`${name}` || '').split(' ');
      return name
        ? nameParts.map((part: string) => part.charAt(0)).join('')
        : '';
    };

    if (!isImageValid) {
      return (
        <ficus.View
          ref={ref}
          {...rest}
          w={getActualSize}
          h={getActualSize}
          bg={getActualBackgroundColor}
          __styles={restStyles}
        >
          <Text
            {...textStyles}
            fontSize={getActualFontsize}
            color={getActualTextColor}
          >
            {getInitials(props.name)}
          </Text>
        </ficus.View>
      );
    }
    return (
      <ficus.Image
        ref={ref}
        {...rest}
        w={getActualSize}
        h={getActualSize}
        __styles={restStyles}
        alt={props.name}
        source={{ uri: props.src }}
      />
    );
  }
);
