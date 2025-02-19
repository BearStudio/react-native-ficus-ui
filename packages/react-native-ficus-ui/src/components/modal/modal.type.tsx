import { ModalProps as RNModalProps } from 'react-native-modal';

import {
  BackgroundPropsType,
  BorderPropsType,
  BorderRadiusPropsType,
  DimensionPropsType,
  FlexPropsType,
  SpacingPropsType,
  VariantPropsType,
} from '../../types';

export interface ModalProps
  extends Partial<RNModalProps>,
    BorderPropsType,
    SpacingPropsType,
    BorderRadiusPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<DimensionPropsType, 'h'>,
    Pick<FlexPropsType, 'justifyContent'>,
    VariantPropsType {
  children: React.ReactElement[] | React.ReactElement;
  isOpen?: boolean;
}
