import { useMemo } from 'react';
import React from 'react';

import {
  TextStyleProps,
  ThemingProps,
  omitThemingProps,
  splitTextProps,
} from '../../style-system';
import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useMultiStyleConfig,
} from '../system';
import { AvatarImage } from './avatar-image';
import { AvatarOptions } from './avatar.types';

export interface AvatarProps
  extends NativeFicusProps<'View'>,
    TextStyleProps,
    ThemingProps<'Avatar'>,
    AvatarOptions {}

export const Avatar = forwardRef<AvatarProps, 'View'>(
  function Avatar(props, ref) {
    const styles = useMultiStyleConfig('Avatar', props);
    const {
      borderRadius = 'full',
      src,
      name,
      getInitials,
      children,
      __styles,
      ...rest
    } = omitThemingProps(props);

    const [textStyles, restProps] = splitTextProps(rest);
    const avatarContainerStyles = useMemo(
      () => ({
        borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        ...styles.container,
        ...__styles, // Useful for avatar excess label
      }),
      [styles.container]
    );

    const labelStyles = useMemo(
      () => ({
        ...styles.label,
        ...textStyles,
      }),
      [styles.label, textStyles]
    );

    return (
      <ficus.View ref={ref} {...restProps} __styles={avatarContainerStyles}>
        <AvatarImage
          src={src}
          name={name}
          borderRadius={borderRadius}
          getInitials={getInitials}
          labelStyles={labelStyles}
        />
        {/*
         * To avoid using a context, we clone the element and apply the style retrieved with the `useMultiStyleConfig`
         */}
        {React.Children.map(children as any, (child: React.ReactElement) => {
          return React.cloneElement(child, {
            __styles: {
              ...styles.badge,
              ...child.props.__styles,
            },
            size: props.size ?? styles.container?.width,
          });
        })}
      </ficus.View>
    );
  }
);
