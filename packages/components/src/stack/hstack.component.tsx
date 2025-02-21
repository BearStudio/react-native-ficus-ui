import { forwardRef } from '../system';
import { Stack, StackProps } from './stack.component';

export const HStack = forwardRef<StackProps, 'View'>((props, ref) => (
  <Stack {...props} direction="row" ref={ref} />
));
