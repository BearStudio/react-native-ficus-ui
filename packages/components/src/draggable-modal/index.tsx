import { ReactNode, useEffect, useRef } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native';

import { Box } from '../box';
import { type NativeFicusProps, ficus, forwardRef } from '../system';
import { mergeRefs } from '../utils/merge-refs';

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
>(function DraggableModal(props, ref) {
  const _ref = useRef<BottomSheetModal>(null);

  const bottomSheetModalRef = mergeRefs(_ref, ref);
  const { children, isOpen, onClose, h, ...rest } = props;

  useEffect(() => {
    if (isOpen) {
      _ref?.current?.present();
      _ref?.current?.snapToIndex(0);
    } else {
      _ref?.current?.close();
    }
  }, [isOpen]);

  const bottomSheetStyles = {
    h: 'full',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    bg: 'white',
  };

  const handleChange = (index: number) => {
    if (index === -1 && onClose) {
      onClose();
    }
  };

  const safeAreaViewStyle = {
    flex: 1,
  };
  return (
    <ficus.BottomSheetModal
      ref={bottomSheetModalRef}
      onChange={handleChange}
      {...rest}
      __styles={bottomSheetStyles}
    >
      <ficus.BottomSheetView {...rest}>
        <Box h={h ?? '100%'}>
          <SafeAreaView style={safeAreaViewStyle}>
            {children as ReactNode}
          </SafeAreaView>
        </Box>
      </ficus.BottomSheetView>
    </ficus.BottomSheetModal>
  );
});
