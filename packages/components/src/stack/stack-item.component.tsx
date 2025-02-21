import { ficus, forwardRef } from '../system';
import { StackProps } from './stack.component';

export const StackItem = forwardRef<StackProps, 'View'>((props, ref) => (
  <ficus.View
    {...props}
    ref={ref}
    __styles={{
      display: 'inline-block',
      flex: '0 0 auto',
      minWidth: 0,
      ...props['__styles'],
    }}
  />
));
