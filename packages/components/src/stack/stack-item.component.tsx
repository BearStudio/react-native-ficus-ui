import { ficus, forwardRef } from '../system';
import { StackProps } from './stack.component';

export const StackItem = forwardRef<StackProps, 'View'>((props, ref) => (
  <ficus.View
    {...props}
    ref={ref}
    __styles={{
      ...props['__styles'],
    }}
  />
));
