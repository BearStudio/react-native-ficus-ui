import { ReactNode, useEffect, useRef } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { Box } from '../box';
import { SafeAreaBox } from '../safe-area-box';
import { type NativeFicusProps, ficus, forwardRef } from '../system';

interface DraggableModalOptions {
  isOpen?: boolean;
  onClose?: () => void;
}

export interface DraggableModalProps
  extends NativeFicusProps<'BottomSheetModal'>,
    DraggableModalOptions {}

export const DraggableModal = forwardRef<
  DraggableModalProps,
  'BottomSheetModal'
>(function DraggableModal(props, _ref) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const { children, isOpen, onClose, h, ...rest } = props;
  useEffect(() => {
    if (isOpen) {
      bottomSheetModalRef?.current?.present();
      bottomSheetModalRef?.current?.snapToIndex(0);
    } else {
      bottomSheetModalRef?.current?.close();
    }
  }, [isOpen]);

  return (
    <ficus.BottomSheetModal
      ref={bottomSheetModalRef}
      onChange={(index) => {
        if (index === -1 && onClose) {
          onClose();
        }
      }}
      h="100%"
      justifyContent="flex-end"
      borderTopLeftRadius={12}
      borderTopRightRadius={12}
      {...rest}
      bg="white"
    >
      <ficus.BottomSheetView {...rest}>
        <Box h={h ?? '100%'}>
          <SafeAreaBox flex={1}>{children as ReactNode}</SafeAreaBox>
        </Box>
      </ficus.BottomSheetView>
    </ficus.BottomSheetModal>
  );
});
