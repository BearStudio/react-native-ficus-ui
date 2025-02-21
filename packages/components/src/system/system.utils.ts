import { type BaseRNElements, baseRNElements } from './base-elements';

export type RNElementType = BaseRNElements | React.ComponentType<any>;

export type NativeElementProps<T extends RNElementType> =
  React.ComponentPropsWithRef<
    T extends BaseRNElements
      ? (typeof baseRNElements)[T]
      : React.ComponentType<any>
  >;

export function getComponent<T extends RNElementType>(component: T) {
  return typeof component === 'string'
    ? baseRNElements[component as BaseRNElements]
    : component;
}
