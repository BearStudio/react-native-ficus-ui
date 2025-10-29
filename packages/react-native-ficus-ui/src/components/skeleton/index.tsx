import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
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
const SkeletonContext = createContext<SkeletonContextValue>({
  progress: null,
  instanceCount: 0,
});

const SkeletonProvider = ({
  duration = 1200,
  paused = false,
  children,
}: SkeletonProviderProps) => {
  const progress = useSharedValue(0);
  const instanceCountRef = useRef(0);

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
    <SkeletonContext.Provider
      value={{
        progress,
        instanceCount: instanceCountRef.current,
      }}
    >
      {children}
    </SkeletonContext.Provider>
  );
};
// Base Skeleton Component
const BaseSkeleton = forwardRef<SkeletonProps, 'View'>(
  function BaseSkeleton(props, ref) {
    // Extract theming props BEFORE omitThemingProps
    const variant = props.variant || 'pulse';
    const colorPalette = props.colorPalette || 'gray';

    const {
      loading = true,
      duration = 1200,
      children,
      ...rest
    } = omitThemingProps(props);

    const [size, setSize] = useState({ width: 0, height: 0 });
    const ctx = useContext(SkeletonContext);
    const globalProgress = ctx?.progress ?? null;
    const { colorMode } = useColorMode();
    const { theme } = useTheme();

    const localProgress = useSharedValue(0);
    const styles = useStyleConfig('Skeleton', {
      ...props,
      variant,
      colorScheme: colorPalette, // Pass colorPalette as colorScheme to theme
    });

    const onLayout = useCallback((e: LayoutChangeEvent) => {
      const { width: w, height: h } = e.nativeEvent.layout;
      setSize({ width: w, height: h });
    }, []);

    useEffect(() => {
      if (variant === 'none' || !loading) {
        return;
      }
      if (globalProgress) {
        return;
      }

      const startAnimation = () => {
        localProgress.value = 0;
        localProgress.value = withRepeat(
          withTiming(1, {
            duration: Math.max(800, duration),
            easing:
              variant === 'pulse' ? Easing.inOut(Easing.ease) : Easing.linear,
          }),
          -1,
          false
        );
      };

      // Start animation immediately
      startAnimation();

      return () => {
        cancelAnimation(localProgress);
      };
    }, [variant, loading, globalProgress, duration, localProgress]);

    const pulseAnimationStyle = useAnimatedStyle(() => {
      if (variant !== 'pulse') return {};
      const p = (globalProgress?.value ?? localProgress.value) || 0;
      
      // Smooth sine wave for more natural breathing effect
      const sineWave = Math.sin(p * Math.PI * 2);
      const normalizedSine = (sineWave + 1) / 2; // Convert -1,1 to 0,1
      
      // More pronounced opacity range for better visibility
      const opacity = 0.4 + normalizedSine * 0.6; // Animate from 0.4 to 1.0
      
      return { opacity };
    });

    const shineAnimationStyle = useAnimatedStyle(() => {
      if (variant !== 'shine') return {};
      const p = (globalProgress?.value ?? localProgress.value) || 0;
      
      // Smooth easing for more natural shine movement
      const easedProgress = p < 0.5
        ? 2 * p * p
        : 1 - Math.pow(-2 * p + 2, 2) / 2; // EaseInOutQuad
      
      const translateX = (easedProgress - 0.5) * size.width * 2.5; // Slightly wider sweep
      
      return { transform: [{ translateX }] };
    }, [size.width]);

    // Enhanced shimmer styles with better gradients
    const shimmerGradientStyle = useAnimatedStyle(() => {
      if (variant !== 'shine') return {};
      const p = (globalProgress?.value ?? localProgress.value) || 0;
      
      // Dynamic opacity for shimmer overlay
      const overlayOpacity = 0.6 + Math.sin(p * Math.PI * 2) * 0.2;
      
      return { opacity: overlayOpacity };
    });

    // Enhanced pulse animation with color transition
    const pulseColorStyle = useAnimatedStyle(() => {
      if (variant !== 'pulse') return {};
      const p = (globalProgress?.value ?? localProgress.value) || 0;
      
      // Smooth sine wave for color transition
      const sineWave = Math.sin(p * Math.PI * 2);
      const normalizedSine = (sineWave + 1) / 2;
      
      // Interpolate between base and highlight colors for pulse effect
      const colorIntensity = 0.7 + normalizedSine * 0.3; // 0.7 to 1.0
      
      return {
        backgroundColor: colorMode === 'dark'
          ? `rgba(107, 114, 128, ${colorIntensity})` // gray.500 with varying opacity
          : `rgba(229, 231, 235, ${colorIntensity})`, // gray.200 with varying opacity
      };
    });

    if (!loading) {
      return <>{children}</>;
    }

    // Enhanced color system with better contrast
    const baseShimmerColor = getColor(
      colorMode === 'dark' ? `${colorPalette}.600` : `${colorPalette}.200`,
      theme.colors
    );
    
    const highlightShimmerColor = getColor(
      colorMode === 'dark' ? `${colorPalette}.400` : `${colorPalette}.100`,
      theme.colors
    );

    const shimmerBaseStyle = StyleSheet.create({
      shimmer: {
        width: '100%',
        height: '100%',
        backgroundColor: highlightShimmerColor,
      },
    }).shimmer;

    // For pulse variant, apply enhanced animation to the main element
    if (variant === 'pulse') {
      return (
        <Animated.View style={[pulseAnimationStyle]}>
          <Animated.View style={[pulseColorStyle]}>
            <ficus.View
              ref={ref}
              onLayout={onLayout}
              overflow="hidden"
              __styles={styles}
              {...rest}
            />
          </Animated.View>
        </Animated.View>
      );
    }

    return (
      <ficus.View
        ref={ref}
        onLayout={onLayout}
        overflow="hidden"
        __styles={styles}
        {...rest}
      >
        {variant === 'shine' && (
          <Animated.View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: baseShimmerColor },
              shimmerGradientStyle,
            ]}
          >
            <Animated.View style={[shimmerBaseStyle, shineAnimationStyle]} />
          </Animated.View>
        )}
        {/* Note: variant 'none' just uses the base styles without any overlay */}
      </ficus.View>
    );
  }
); // Skeleton Box
const SkeletonBox = forwardRef<SkeletonBoxProps, 'View'>(
  function SkeletonBox(props, ref) {
    const defaultProps = {
      h: 'lg',
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
      gap = '4',
      loading = true,
      children,
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

    if (!loading) {
      return <>{children}</>;
    }

    if (noOfLines === 1) {
      return (
        <BaseSkeleton
          ref={ref}
          h={height}
          borderRadius="sm"
          loading={loading}
          {...rest}
        >
          {children}
        </BaseSkeleton>
      );
    }

    const spacingMap: Record<string, number> = {
      '1': 4,
      '2': 8,
      '3': 12,
      '4': 16,
      '5': 20,
      '6': 24,
    };

    const spacing =
      typeof gap === 'number' ? gap : spacingMap[gap as string] || 16;

    return (
      <ficus.View {...rest}>
        {Array.from({ length: noOfLines }, (_, index) => (
          <ficus.View
            key={index}
            flexDirection="row"
            mb={index < noOfLines - 1 ? spacing : 0}
            pr={index === noOfLines - 1 ? '30%' : 0} // Last line shorter
          >
            <BaseSkeleton
              h={height}
              borderRadius="sm"
              flex={1}
              loading={loading}
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
    const { size = 40, ...rest } = props;

    return (
      <BaseSkeleton ref={ref} w={size} h={size} borderRadius="full" {...rest} />
    );
  }
);

// Main Skeleton export
export const Skeleton = SkeletonBox;
export { SkeletonCircle };
export { SkeletonText };

// Provider export
export { SkeletonProvider };

// Type exports
export type {
  SkeletonProps,
  SkeletonBoxProps,
  SkeletonTextProps,
  SkeletonCircleProps,
  SkeletonProviderProps,
};
