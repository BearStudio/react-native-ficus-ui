import type { ImageProps as RNImageProps } from 'react-native';

import type {
  BorderPropsType,
  SpacingPropsType,
  BorderRadiusPropsType,
  ShadowPropsType,
  DimensionPropsType,
  BackgroundPropsType,
  FlexPropsType,
  PositionPropsType,
  ZIndexPropsType,
  OverflowPropsType,
  OpacityPropsType,
  VariantPropsType,
  TextPropsType,
} from '../../types';
import { StackProps } from 'components/stack/stack.type';
import { BoxProps } from 'components/box/box.type';

export interface AvatarProps
  extends Omit<
      RNImageProps,
      | 'borderBottomLeftRadius'
      | 'borderBottomRightRadius'
      | 'borderRadius'
      | 'borderTopLeftRadius'
      | 'borderTopRightRadius'
    >,
    BorderPropsType,
    SpacingPropsType,
    BorderRadiusPropsType,
    ShadowPropsType,
    DimensionPropsType,
    BackgroundPropsType,
    TextPropsType,
    FlexPropsType,
    PositionPropsType,
    ZIndexPropsType,
    OverflowPropsType,
    OpacityPropsType,
    VariantPropsType {
  name?: string;
  colorScheme?: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  getInitials?: (name: string) => string;
  icon?: string | React.ReactNode;
  children?: React.ReactElement[] | React.ReactElement;
}

export interface AvatarGroupProps extends StackProps {
  children: React.ReactElement[] | React.ReactElement;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  max?: number;
}

export interface AvatarBadgeProps extends BoxProps {}
