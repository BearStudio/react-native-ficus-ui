import { FC } from 'react';

import { ActivityIndicator } from 'react-native';

interface ButtonSpinnerProps {
  position?: 'absolute' | 'relative';
  spacing?: number;
  loaderColor?: string;
}
export const ButtonSpinner: FC<ButtonSpinnerProps> = ({
  position,
  spacing,
  loaderColor,
}) => {
  const buttonSpinnerProps = {
    style: {
      position,
      marginRight: spacing,
    },
    color: loaderColor ?? 'white',
  } as const;

  return <ActivityIndicator {...buttonSpinnerProps} />;
};
