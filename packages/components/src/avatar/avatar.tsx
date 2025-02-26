import { useEffect, useState } from 'react';
import React from 'react';

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
  getInitials?(): string;
}

export interface AvatarProps
  extends NativeFicusProps<'View'>,
    TextStyleProps,
    ThemingProps<'Avatar'>,
    AvatarOptions {}

export const Avatar = forwardRef<AvatarProps, 'View'>(
  function Avatar(props, ref) {
    const [isImageValid, setIsImageValid] = useState(false);
    const styles = useStyleConfig('Avatar', props);
    const { children, ...rest } = omitThemingProps(props);
    const [textStyles, restStyles] = splitTextProps(styles);
    const { theme } = useTheme();

    const getActualSize = getThemeProperty(theme.avatar, props.size) || 50;
    const getActualFontsize = props.fontSize
      ? getThemeProperty(theme.fontSizes, props.fontSize)
      : getThemeProperty(theme.avatar, props.size) / 2 || 25;
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
      return props.getInitials
        ? props.getInitials()
        : name
            .split(' ')
            .map((part) => part.charAt(0))
            .join('');
    };

    return (
      <ficus.View
        ref={ref}
        {...rest}
        w={getActualSize}
        h={getActualSize}
        bg={getActualBackgroundColor}
        alignItems="center"
        justifyContent="center"
        borderRadius="100%"
        __styles={restStyles}
      >
        {isImageValid ? (
          <ficus.Image
            w="100%"
            h="100%"
            borderRadius="100%"
            alt={props.name}
            source={{ uri: props.src }}
          />
        ) : (
          <Text
            {...textStyles}
            fontSize={getActualFontsize}
            color={getActualTextColor}
          >
            {getInitials(props.name)}
          </Text>
        )}
        {React.Children.map(children as any, (child: React.ReactElement) => {
          return React.cloneElement(child, {
            size: child.props.size ? child.props.size : getActualSize,
          });
        })}
      </ficus.View>
    );
  }
);
