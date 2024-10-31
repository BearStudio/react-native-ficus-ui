import { BottomSheetModalProps } from '@gorhom/bottom-sheet';
import {
  BorderPropsType,
  SpacingPropsType,
  BorderRadiusPropsType,
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  VariantPropsType,
} from '../../types';

export interface DraggableModalProps
  extends BottomSheetModalProps,
    BorderPropsType,
    SpacingPropsType,
    BorderRadiusPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<DimensionPropsType, 'h'>,
    Pick<FlexPropsType, 'justifyContent'>,
    VariantPropsType {
  children: React.ReactElement[] | React.ReactElement;
  isOpen?: boolean;
  onClose?: () => void;
}
