import { useMemo } from 'react';

import { type NativeFicusProps, ficus } from '../system';
import { AvatarOptions } from './avatar.types';

export function initials(name: string) {
  const names = name.trim().split(' ');
  const firstName = names[0] ?? '';
  const lastName = names.length > 1 ? names[names.length - 1] : '';
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}

export interface AvatarLabelProps
  extends NativeFicusProps<'Text'>,
    Pick<AvatarOptions, 'name' | 'getInitials'> {}

export function AvatarLabel({ name, getInitials, __styles }: AvatarLabelProps) {
  const getInitialsFn = getInitials ?? initials;

  const labelStyles = useMemo(
    () => ({
      textAlign: 'center',
      textAlignVertical: 'center',
      ...__styles,
    }),
    [__styles]
  );
  return (
    <ficus.Text role="img" aria-label="name" __styles={labelStyles}>
      {name ? getInitialsFn?.(name) : null}
    </ficus.Text>
  );
}
