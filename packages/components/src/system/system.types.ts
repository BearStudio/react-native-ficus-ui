import {
  SystemProps as BaseSystemProps,
  SystemStyleObject,
  TextStyleProps,
} from '@ficus-ui/style-system';

import { NativeElementProps, RNElementType } from './system.utils';

export type FicusProps<T extends RNElementType> = SystemProps<T> & {
  /**
   * Used for internal style management (like theme styles)
   * @private
   */
  __styles?: SystemStyleObject;
};

export type SystemProps<T extends RNElementType> = T extends 'Text'
  ? BaseSystemProps<TextStyleProps> // Ensure BaseSystemProps always gets a type argument
  : BaseSystemProps<Record<string, unknown>>; // Provide a default type argument

export interface AsProps<T extends RNElementType = RNElementType> {
  as?: T;
}

// Props for a component with `as` prop to dynamically change the component type
export type PropsOf<T extends RNElementType> = Omit<
  NativeElementProps<T>,
  'ref'
> &
  AsProps<T>;

// Omit common props like `as` or any additional props you define
export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
> = Omit<Target, 'as' | OmitAdditionalProps>;

// Utility type to merge props of the base component and the `as` component
export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

// Utility type to merge props of two components, with `as` dynamic resolution
export type MergeWithAs<
  ComponentProps extends object,
  AsCompProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends RNElementType = RNElementType,
> = (
  | RightJoinProps<ComponentProps, AdditionalProps>
  | RightJoinProps<AsCompProps, AdditionalProps>
) & { as?: AsComponent };

// Component type with `as` prop for dynamic component rendering
export type ComponentWithAs<
  Component extends RNElementType,
  Props extends object = {},
> = {
  <AsComponent extends RNElementType = Component>(
    props: MergeWithAs<
      NativeElementProps<Component>,
      NativeElementProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element;

  displayName?: string;
  defaultProps?: Partial<any>;
  id?: string;
};

export interface FicusComponent<T extends RNElementType, P extends object = {}>
  extends ComponentWithAs<T, FicusProps<T> & P> {}
