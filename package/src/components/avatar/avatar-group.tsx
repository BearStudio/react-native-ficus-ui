import React, { type ReactElement, cloneElement, isValidElement } from 'react';

import { compact } from '@chakra-ui/utils';

import {
  SystemStyleObject,
  ThemingProps,
  omitThemingProps,
} from '../../style-system';
import { HStack } from '../stack';
import { NativeFicusProps, forwardRef, useMultiStyleConfig } from '../system';
import { Avatar } from './avatar';

interface AvatarGroupOptions {
  max?: number;
}

export interface AvatarGroupProps
  extends NativeFicusProps<'View'>,
    ThemingProps<'Avatar'>,
    AvatarGroupOptions {}

/**
 * TODO: Possible improvments
 */
export const AvatarGroup = forwardRef<AvatarGroupProps, 'View'>(
  (props, ref) => {
    const styles = useMultiStyleConfig('Avatar', props);

    const {
      children,
      max = null,
      borderRadius = 'full',
      borderColor = 'white',
      ...rest
    } = omitThemingProps(props);
    /**
     * Only keep children that are `Avatar` component
     */
    const avatarChildren = React.Children.toArray(children).filter(
      (element) => isValidElement(element) && element.type === Avatar
    ) as ReactElement[];

    const truncatedChildren =
      max != null ? avatarChildren.slice(0, max) : avatarChildren;

    const excess = max != null ? avatarChildren.length - max : 0;

    const reversedChildren = truncatedChildren.reverse();
    const clones = reversedChildren.map((child, index) => {
      const isFirstAvatar = index === 0;

      const childProps: SystemStyleObject = {
        ml: isFirstAvatar ? 0 : '-lg',
        borderWidth: 3,
        borderColor,
        borderRadius,
        size: child?.props.size ? child.props.size : props.size,
      };

      return cloneElement(child, compact(childProps));
    });

    const groupStyles: SystemStyleObject = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row-reverse',
      spacing: '0',
      ...styles.group,
    };

    const excessStyles: SystemStyleObject = {
      borderRadius,
      ml: '-lg',
      ...styles.excessLabel,
    };

    return (
      <HStack ref={ref} role="group" __styles={groupStyles} {...rest}>
        {clones}
        {excess > 0 && (
          <Avatar
            __styles={excessStyles}
            name={`+${excess}`}
            colorScheme="gray"
            getInitials={(excessValue) => excessValue}
          />
        )}
      </HStack>
    );
  }
);
