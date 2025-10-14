// packages/react-native-ficus-ui/src/components/skeleton/skeleton.types.ts
import { ReactNode } from 'react';
import { NativeFicusProps } from '../system';
import { ThemingProps, ResponsiveValue } from '../../style-system';

export interface SkeletonProviderOptions {
  /**
   * Duration of the shimmer animation in milliseconds
   * @default 1200
   */
  duration?: number;

  /**
   * Whether the animation is paused
   * @default false
   */
  paused?: boolean;

  /**
   * Children components
   */
  children: ReactNode;
}

export interface SkeletonOptions {
  /**
   * Whether to show shimmer animation
   * @default true
   */
  shimmer?: boolean;

  /**
   * Duration of the shimmer animation in milliseconds (overrides provider duration)
   */
  duration?: number;

  /**
   * Whether the skeleton is loaded (shows content instead of skeleton)
   * @default false
   */
  isLoaded?: boolean;

  /**
   * Content to show when loaded
   */
  children?: ReactNode;
}

export interface SkeletonProviderProps
  extends SkeletonProviderOptions {}

export interface SkeletonProps
  extends NativeFicusProps<'View'>,
    SkeletonOptions,
    ThemingProps<'Skeleton'> {}

export interface SkeletonBoxProps extends SkeletonProps {}

export interface SkeletonTextProps
  extends NativeFicusProps<'View'>,
    SkeletonOptions {
  /**
   * Font size to calculate height automatically
   */
  fontSize?: ResponsiveValue<string | number>;

  /**
   * Number of lines for multi-line text skeleton
   * @default 1
   */
  noOfLines?: number;

  /**
   * Spacing between lines when noOfLines > 1
   * @default "xs"
   */
  lineSpacing?: ResponsiveValue<string | number>;
}

export interface SkeletonCircleProps
  extends NativeFicusProps<'View'>,
    SkeletonOptions {
  /**
   * Size of the circle (both width and height)
   * @default 40
   */
  boxSize?: ResponsiveValue<number | string>;
}

export interface SkeletonContextValue {
  progress: any; // Animated.SharedValue<number> | null
}
