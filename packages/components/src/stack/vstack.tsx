import { forwardRef } from '../system';
import { Stack, StackProps } from './stack';

export const VStack = forwardRef<StackProps, 'View'>((props, ref) => (
  <Stack {...props} flexDirection="column" ref={ref} />
));
