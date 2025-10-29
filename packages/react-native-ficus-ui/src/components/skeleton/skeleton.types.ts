// packages/react-native-ficus-ui/src/components/skeleton/skeleton.types.ts
import { ReactNode } from 'react';
import { NativeFicusProps } from '../system';
import { ResponsiveValue } from '../../style-system';

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
   * The loading state of the skeleton
   * @default true
   */
  loading?: boolean;

  /**
   * The variant of the skeleton animation
   * @default "pulse"
   */
  variant?: 'pulse' | 'shine' | 'none';

  /**
   * The color palette of the component
   * @default "gray"
   */
  colorPalette?: 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink';

  /**
   * Duration of the shimmer animation in milliseconds (overrides provider duration)
   */
  duration?: number;

  /**
   * Content to show when loaded
   */
  children?: ReactNode;
}

export interface SkeletonProviderProps
  extends SkeletonProviderOptions {}

export interface SkeletonProps
  extends NativeFicusProps<'View'>,
    SkeletonOptions {
  /**
   * The variant of the skeleton animation (overrides SkeletonOptions)
   * @default "pulse"
   */
  variant?: 'pulse' | 'shine' | 'none';
}

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
   * @default "4"
   */
  gap?: ResponsiveValue<string | number>;
}

export interface SkeletonCircleProps
  extends NativeFicusProps<'View'>,
    SkeletonOptions {
  /**
   * Size of the circle (both width and height)
   * @default "10"
   */
  size?: ResponsiveValue<number | string>;
}

export interface SkeletonContextValue {
  progress: any; // Animated.SharedValue<number> | null
  instanceCount: number;
}
