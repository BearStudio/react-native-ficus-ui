import {
  SystemProps as BaseSystemProps,
  Dict,
  SystemStyleObject,
  TextStyleProps,
} from '../../style-system';
import { NativeElementProps, RNElementType } from './system.utils';

export type FicusProps<T extends RNElementType> = SystemProps<T> & {
  /**
   * Used for internal style management (like theme styles)
   * @private
   */
  __styles?: SystemStyleObject;

  /**
   * Used for custom React Native style functions.
   * e.g. Pressable API `style`
   */
  __stylesFn?: (props: Dict) => any;
};

export type SystemProps<T extends RNElementType> = T extends 'Text'
  ? BaseSystemProps<TextStyleProps>
  : BaseSystemProps;

export interface AsProps<T extends RNElementType = RNElementType> {
  as?: T;
}

export type PropsOf<T extends RNElementType> = Omit<
  NativeElementProps<T>,
  'ref'
> &
  AsProps<T>;

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
> = Omit<Target, 'as' | 'android_ripple' | OmitAdditionalProps>;

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
