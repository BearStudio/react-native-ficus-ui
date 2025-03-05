import { ModalProps } from 'react-native';

import { type NativeFicusProps, ficus } from '../system';

export interface ModalProp extends NativeFicusProps<'Modal'>, ModalProps {}

export const Modal = ficus('Modal');
