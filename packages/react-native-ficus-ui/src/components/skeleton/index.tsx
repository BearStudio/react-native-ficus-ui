import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { LayoutChangeEvent, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

/**
 * Skeleton component with pure React Native shimmer animation
 * No external dependencies required - works everywhere including Expo Go
 */

import { useColorMode } from '../../hooks';
import { omitThemingProps } from '../../style-system';
import { getColor, useTheme } from '../../theme';
import { ficus, forwardRef, useStyleConfig } from '../system';
import {
  SkeletonBoxProps,
  SkeletonCircleProps,
  SkeletonContextValue,
  SkeletonProps,
  SkeletonProviderProps,
  SkeletonTextProps,
} from './skeleton.types';

// Skeleton Context
const SkeletonContext = createContext<SkeletonContextValue>({ progress: null });

const SkeletonProvider = ({
  duration = 1200,
  paused = false,
  children,
}: SkeletonProviderProps) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    if (paused) {
      cancelAnimation(progress);
      return;
    }
    progress.value = 0;
    progress.value = withRepeat(
      withTiming(1, {
        duration: Math.max(400, duration),
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      false
    );
    return () => cancelAnimation(progress);
  }, [duration, paused, progress]);

  return (
    <SkeletonContext.Provider value={{ progress }}>
      {children}
    </SkeletonContext.Provider>
  );
};

// Base Skeleton Component
const BaseSkeleton = forwardRef<SkeletonProps, 'View'>(
  function BaseSkeleton(props, ref) {
    const {
      shimmer = true,
      duration = 1200,
      isLoaded = false,
      children,
      ...rest
    } = omitThemingProps(props);

    const [size, setSize] = useState({ width: 0, height: 0 });
    const ctx = useContext(SkeletonContext);
    const globalProgress = ctx?.progress ?? null;
    const { colorMode } = useColorMode();
    const { theme } = useTheme();

    const localProgress = useSharedValue(0);
    const styles = useStyleConfig('Skeleton', props);

    const onLayout = useCallback((e: LayoutChangeEvent) => {
      const { width: w, height: h } = e.nativeEvent.layout;
      setSize({ width: w, height: h });
    }, []);

    useEffect(() => {
      if (!shimmer) {
        return;
      }
      if (globalProgress) {
        return;
      }

      localProgress.value = 0;
      localProgress.value = withRepeat(
        withTiming(1, {
          duration: Math.max(400, duration),
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        false
      );
      return () => cancelAnimation(localProgress);
    }, [shimmer, globalProgress, duration, localProgress]);

    const shimmerStyle = useAnimatedStyle(() => {
      const p = (globalProgress?.value ?? localProgress.value) || 0;
      const start = -size.width - 60;
      const end = size.width + 60;
      const x = start + (end - start) * p;
      return { transform: [{ translateX: x }] };
    }, [size.width]);

    if (isLoaded) {
      return <>{children}</>;
    }

    const backgroundColor = getColor(
      colorMode === 'dark' ? 'gray.600' : 'gray.300',
      theme.colors
    );
    const shimmerColor = getColor(
      colorMode === 'dark' ? 'gray.500' : 'gray.100',
      theme.colors
    );

    const shimmerBaseStyle = StyleSheet.create({
      shimmer: {
        width: Math.max(80, size.width * 0.35),
        backgroundColor: shimmerColor,
        opacity: 0.8,
      },
    }).shimmer;

    return (
      <ficus.View
        ref={ref}
        onLayout={onLayout}
        overflow="hidden"
        backgroundColor={backgroundColor}
        __styles={styles}
        {...rest}
      >
        {shimmer && size.width > 0 && (
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFillObject,
              shimmerBaseStyle,
              shimmerStyle,
            ]}
          />
        )}
      </ficus.View>
    );
  }
);

// Skeleton Box
const SkeletonBox = forwardRef<SkeletonBoxProps, 'View'>(
  function SkeletonBox(props, ref) {
    const defaultProps = {
      h: 20,
      borderRadius: 'md',
      ...props,
    };

    return <BaseSkeleton ref={ref} {...defaultProps} />;
  }
);

// Skeleton Text
const SkeletonText = forwardRef<SkeletonTextProps, 'View'>(
  function SkeletonText(props, ref) {
    const {
      fontSize = 'md',
      noOfLines = 1,
      lineSpacing = 'xs',
      ...rest
    } = props;

    const { theme } = useTheme();

    const getHeight = (size: string | number): number => {
      if (typeof size === 'number') return size;
      // Use theme fontSizes with fallback values
      const themeSize = theme.fontSizes?.[size] || theme.fontSizes?.md || 16;
      return typeof themeSize === 'number' ? themeSize : 16;
    };

    const height = getHeight(fontSize as string);

    if (noOfLines === 1) {
      return <BaseSkeleton ref={ref} h={height} borderRadius="sm" {...rest} />;
    }

    const spacingMap: Record<string, number> = {
      xs: 4,
      sm: 8,
      md: 12,
      lg: 16,
    };

    const spacing =
      typeof lineSpacing === 'number'
        ? lineSpacing
        : spacingMap[lineSpacing as string] || 4;

    return (
      <ficus.View {...rest}>
        {Array.from({ length: noOfLines }, (_, index) => (
          <ficus.View
            flexDirection="row"
            mb={index < noOfLines - 1 ? spacing : 0}
            pr={index === noOfLines - 1 ? '30%' : 0} // Last line shorter
          >
            <BaseSkeleton
              key={index}
              h={height}
              borderRadius="sm"
              flex={1}
            />
          </ficus.View>
        ))}
      </ficus.View>
    );
  }
);

// Skeleton Circle
const SkeletonCircle = forwardRef<SkeletonCircleProps, 'View'>(
  function SkeletonCircle(props, ref) {
    const { boxSize = 40, ...rest } = props;

    return (
      <BaseSkeleton
        ref={ref}
        w={boxSize}
        h={boxSize}
        borderRadius="full"
        {...rest}
      />
    );
  }
);

// Main Skeleton export with attached components
export const Skeleton = Object.assign(SkeletonBox, {
  Box: SkeletonBox,
  Text: SkeletonText,
  Circle: SkeletonCircle,
});

// Individual exports
export { SkeletonProvider };
export type {
  SkeletonProps,
  SkeletonBoxProps,
  SkeletonTextProps,
  SkeletonCircleProps,
  SkeletonProviderProps,
};
