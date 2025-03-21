import { Box, BoxProps } from '../box';
import { CheckboxIcon } from './checkbox-icon';
import { CheckboxOptions } from './checkbox.types';

interface CheckboxControlProps
  extends BoxProps,
    Pick<CheckboxOptions, 'icon'> {}

export function CheckboxControl(props: CheckboxControlProps) {
  /* Handle case icon is given and is an Iccon */
  return (
    <Box {...props}>
      <CheckboxIcon name={props.icon || 'add'} />
      {/* Handle iconProps */}
    </Box>
  );
}
