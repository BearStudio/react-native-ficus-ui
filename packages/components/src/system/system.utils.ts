import {
  type BaseRNElementProps,
  type BaseRNElements,
  baseRNElements,
} from './base-elements';

/**
 * To allow user to extend custom component with ficus properties
 */
type CustomNativeElementProps<T extends React.ComponentType<any>> =
  React.ComponentProps<T>;

export type RNElementType = BaseRNElements | React.ComponentType<any>;

export type NativeElementProps<T extends RNElementType> =
  T extends BaseRNElements
    ? BaseRNElementProps<T>
    : T extends React.ComponentType<any>
      ? CustomNativeElementProps<T>
      : never;

export function getComponent<T extends RNElementType>(component: T) {
  return typeof component === 'string'
    ? baseRNElements[component as BaseRNElements]
    : component;
}
