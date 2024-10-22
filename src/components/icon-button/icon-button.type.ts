import { ButtonProps } from '../button/button.type';

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  icon: React.ReactNode;
}
