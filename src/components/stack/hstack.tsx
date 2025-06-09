import { forwardRef } from '../system';
import { Stack, StackProps } from './stack';

export const HStack = forwardRef<StackProps, 'View'>((props, ref) => (
  <Stack {...props} flexDirection="row" ref={ref} />
));
