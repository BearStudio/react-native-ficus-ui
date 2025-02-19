import { BoxProps } from 'components/box/box.type';
import { StackProps } from 'components/stack/stack.type';
import type { ImageProps as RNImageProps } from 'react-native';

import type {
  BackgroundPropsType,
  BorderPropsType,
  BorderRadiusPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  PositionPropsType,
  ShadowPropsType,
  SpacingPropsType,
  TextPropsType,
  VariantPropsType,
  ZIndexPropsType,
} from '../../types';

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
