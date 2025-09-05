import { type NativeFicusProps, ficus } from '../system';

interface ModalOptions {
  isOpen?: boolean;
  onClose?: () => void;
}

type RNModalProps = Partial<
  Omit<NativeFicusProps<'Modal'>, 'isVisible' | 'onDismiss'>
>;

type OptionalNativeModalProps = {
  [K in keyof RNModalProps]?: RNModalProps[K];
};

export type FicusModalProps = OptionalNativeModalProps & ModalOptions;

const FicusModal = ficus('Modal');

export function Modal(props: FicusModalProps) {
  return (
    <FicusModal
      isVisible={props.isOpen || false}
      onDismiss={props.onClose}
      {...props}
    />
  );
}
