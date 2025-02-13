import React, { useEffect, useRef } from 'react';

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native';

import { useTheme } from '../../theme';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Box } from '../box/box.component';
import { getStyle } from './draggable-modal.style';
import { DraggableModalProps } from './draggable-modal.type';

const DraggableModal: React.FunctionComponent<DraggableModalProps> = (
  incomingProps
) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'DraggableModal',
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
    onClose,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props as DraggableModalProps);

  useEffect(() => {
    if (isOpen) {
      bottomSheetModalRef.current?.present();
      bottomSheetModalRef.current?.snapToIndex(0);
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      onChange={(index) => {
        if (index === -1) {
          onClose();
        }
      }}
      style={computedStyle.modal}
      {...rest}
    >
      <BottomSheetView style={computedStyle.container}>
        <Box h={h ?? '100%'}>
          <SafeAreaView style={computedStyle.safeView}>{children}</SafeAreaView>
        </Box>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export { DraggableModal };
