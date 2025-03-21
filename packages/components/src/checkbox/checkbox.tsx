import React from 'react';

import { TextStyleProps, ThemingProps } from '@ficus-ui/style-system';

import { NativeFicusProps, ficus, forwardRef } from '../system';
import { CheckboxControl } from './checkbox-control';
import { CheckboxLabel } from './checkbox-label';
import { CheckboxOptions } from './checkbox.types';

interface CheckboxProps
  extends NativeFicusProps<'Pressable'>,
    TextStyleProps,
    ThemingProps<'Checkbox'>,
    CheckboxOptions {}

export const Checkbox = forwardRef<CheckboxProps, 'View'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ficus.Pressable ref={ref} gap={props.spacing} {...rest}>
      {props.prefix && <CheckboxLabel label={props.prefix} />}
      <CheckboxControl icon={props.icon} />
      <CheckboxLabel label={children} />
    </ficus.Pressable>
  );
});
