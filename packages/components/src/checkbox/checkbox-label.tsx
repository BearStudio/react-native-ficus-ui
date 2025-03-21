import { useMemo } from 'react';

import { type NativeFicusProps, ficus } from '../system';
import { CheckboxOptions } from './checkbox.types';

export interface CheckboxLabelProps
  extends NativeFicusProps<'Text'>,
    Pick<CheckboxOptions, 'label'> {}

export function CheckboxLabel({ label, __styles }: CheckboxLabelProps) {
  const labelStyles = useMemo(
    () => ({
      textAlign: 'center',
      textAlignVertical: 'center',
      ...__styles,
    }),
    [__styles]
  );
  return (
    <ficus.Text role="img" aria-label="label" __styles={labelStyles}>
      {label}
    </ficus.Text>
  );
}
