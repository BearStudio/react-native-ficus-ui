import { Icon, IconProps } from '../icon';

interface CheckboxIconProps extends IconProps {}

export function CheckboxIcon(props: CheckboxIconProps) {
  return <Icon name={props.name} />;
}
