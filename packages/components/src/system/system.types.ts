import { SystemProps } from '@ficus-ui/style-system';

import { NativeElementProps, NativeElements } from './system.utils';

export interface FicusProps extends SystemProps {}

// TODO: Fix system types
export interface AsProps<T extends NativeElements = NativeElements> {
  as?: T;
}

export type PropsOf<T extends NativeElements> = Omit<
  NativeElementProps<T>,
  'ref'
> &
  AsProps;

type Assign<T, U> = Omit<T, keyof U> & U;

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
> = Omit<Target, OmitAdditionalProps>;

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {},
> = Assign<SourceProps, OverrideProps>;

export type MergeWithAs<
  ComponentProps extends object,
  AsCompProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends NativeElements = NativeElements,
> = (
  | RightJoinProps<ComponentProps, AdditionalProps>
  | RightJoinProps<AsCompProps, AdditionalProps>
) & {
  as?: AsComponent;
};

export type ComponentWithAs<
  Component extends NativeElements,
  Props extends object = {},
> = {
  <AsComponent extends NativeElements = Component>(
    props: MergeWithAs<
      Props,
      NativeElementProps<Component>,
      NativeElementProps<AsComponent>,
      NativeElements
    >
  ): JSX.Element;

  displayName?: string;
  defaultProps?: Partial<any>;
  id?: string;
};

export interface FicusComponent<T extends NativeElements, P extends object = {}>
  extends ComponentWithAs<T, Assign<FicusProps, P>> {}
