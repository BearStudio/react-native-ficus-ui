import React from 'react';

import { ThemingProps } from '@ficus-ui/style-system';
import { getThemeProperty, theme } from '@ficus-ui/theme';

import { HStack } from '../stack';
import { NativeFicusProps, forwardRef } from '../system';

interface AvatarGroupOptions {
  max?: number;
}

export interface AvatarGroupProps
  extends NativeFicusProps<'View'>,
    ThemingProps<'AvatarGroup'>,
    AvatarGroupOptions {}

export const AvatarGroup = forwardRef<AvatarGroupProps, 'View'>((props) => {
  const { children, max = React.Children.count(children), ...rest } = props;
  const renderChildren = () => {
    const totalChildren = React.Children.count(children);
    const otherItemsCount = totalChildren - max;

    return React.Children.map(
      children as any,
      (child: React.ReactElement, index: number) => {
        const reverseIndex = totalChildren - index;

        if (index > max) {
          return <></>;
        }

        if (index === max) {
          return React.cloneElement(child, {
            zIndex: reverseIndex,
            elevation: reverseIndex,
            bg: 'gray.200',
            color: 'gray.800',
            size: child.props.size ? child.props.size : props.size,
            ml: index > 0 ? '-lg' : 0,
            borderWidth: 2,
            borderColor: 'white',
            position: 'relative',
            src: '',
            name: '',
            getInitials: () =>
              `+${otherItemsCount > 99 ? 99 : otherItemsCount}`,
          });
        }

        return React.cloneElement(child, {
          zIndex: reverseIndex,
          elevation: reverseIndex,
          size: child.props.size ? child.props.size : props.size,
          ml: index > 0 ? '-lg' : 0,
          borderWidth: 2,
          borderColor: 'white',
          position: 'relative',
        });
      }
    );
  };

  return <HStack {...rest}>{renderChildren()}</HStack>;
});
