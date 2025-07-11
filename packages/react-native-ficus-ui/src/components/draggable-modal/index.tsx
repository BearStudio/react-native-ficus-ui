import { ReactNode, useEffect, useRef } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { SafeAreaView, ViewStyle } from 'react-native';

import { useColorMode } from '../../hooks';
import { useTheme } from '../../theme';
import { Box } from '../box';
import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  toStyleSheetObject,
} from '../system';
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

  const { theme } = useTheme();
  const { colorMode } = useColorMode();

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
  };

  const bottomSheetBackgroundStyles = {
    backgroundColor: colorMode === 'dark' ? 'gray.900' : 'white',
  };

  const bottomSheetBackgroundStyleObject = toStyleSheetObject({
    baseStyle: bottomSheetBackgroundStyles,
  })({
    ...bottomSheetBackgroundStyles,
    theme,
    style: undefined,
  });

  const handleStyles = {
    backgroundColor: colorMode === 'dark' ? 'white' : 'gray.600',
  };

  const handleStyleObject = toStyleSheetObject({
    baseStyle: handleStyles,
  })({
    ...handleStyles,
    theme,
    style: undefined,
  });

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
      backgroundStyle={bottomSheetBackgroundStyleObject as ViewStyle}
      handleIndicatorStyle={handleStyleObject}
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
