import * as React from 'react';

import { SafeAreaView } from 'react-native';
import RNModal from 'react-native-modal';

import { useTheme } from '../../theme';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Box } from '../box/box.component';
import { getStyle } from './modal.style';
import { ModalProps } from './modal.type';

const Modal: React.FunctionComponent<ModalProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Modal',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      bg: 'white',
      h: '100%',
      isOpen: false,
      justifyContent: 'flex-end',
    }
  );

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
