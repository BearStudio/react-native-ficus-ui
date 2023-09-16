import * as React from 'react';
import RNModal from 'react-native-modal';
import { SafeAreaView } from 'react-native';

import { useTheme } from '../../theme';
import { Box } from '../box/box.component';
import { ModalProps } from './modal.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getStyle } from './modal.style';

const Modal: React.FunctionComponent<ModalProps> = (incomingProps) => {
  const props = useDefaultProps('Modal', incomingProps, {
    bg: 'white',
    h: '100%',
    isOpen: false,
    justifyContent: 'flex-end',
  });

  const {
    bg,
    h,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderEndWidth,
    borderTopWidth,
    justifyContent,
    children,
    isOpen,
    isVisible,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props as ModalProps);

  return (
    <RNModal
      {...rest}
      isVisible={isOpen || isVisible}
      style={computedStyle.modal}
    >
      <Box bg={bg} h={h ?? '100%'} style={computedStyle.container}>
        <SafeAreaView style={computedStyle.safeView}>{children}</SafeAreaView>
      </Box>
    </RNModal>
  );
};

// Modal.defaultProps = {
//   bg: 'white',
//   h: '100%',
//   isOpen: false,
//   justifyContent: 'flex-end',
// };

export { Modal };
