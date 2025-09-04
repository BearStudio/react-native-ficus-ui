import { DimensionValue, ModalProps, View, ViewStyle } from 'react-native';

import { type NativeFicusProps, ficus } from '../system';

export interface ModalProp extends NativeFicusProps<'Modal'>, ModalProps {
  children?: React.ReactNode;
  width?: DimensionValue;
  height?: DimensionValue;
  backgroundColor?: string;
  backgroundViewStyle?: ViewStyle;
  contentViewStyle?: ViewStyle;
}

const FicusModal = ficus('Modal');

export function Modal(props: ModalProp) {
  const {
    children,
    width = '100%',
    height = '100%',
    backgroundColor = 'white',
    backgroundViewStyle,
    contentViewStyle,
    ...rest
  } = props;

  const backgroundStyle: ViewStyle = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ...(backgroundViewStyle || {}),
  };

  const contentStyle: ViewStyle = {
    width,
    height,
    backgroundColor,
    ...(contentViewStyle || {}),
  };

  return (
    <FicusModal transparent {...rest}>
      <View style={backgroundStyle}>
        <View style={contentStyle}>{children}</View>
      </View>
    </FicusModal>
  );
}
