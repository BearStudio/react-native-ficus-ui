import { ficus, forwardRef } from '../system';
import { StackProps } from './stack.component';

export const StackDivider = forwardRef<StackProps, 'View'>((props, ref) => (
  <ficus.View
    {...props}
    __styles={{
      ...props['__styles'],
      borderWidth: 1,
      alignSelf: 'stretch',
      borderColor: 'inherit',
      width: 'auto',
      height: 'auto',
    }}
  />
));
