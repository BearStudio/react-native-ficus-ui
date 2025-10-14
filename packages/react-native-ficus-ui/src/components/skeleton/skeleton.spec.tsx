import React from 'react';
import { render } from '@testing-library/react-native';
import { Skeleton, SkeletonProvider } from './index';
import { Text } from '../text';

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return {
    ...Reanimated,
    useSharedValue: jest.fn(() => ({ value: 0 })),
    useAnimatedStyle: jest.fn(() => ({})),
    withTiming: jest.fn((value) => value),
    withRepeat: jest.fn((value) => value),
    cancelAnimation: jest.fn(),
    Easing: {
      inOut: jest.fn(() => jest.fn()),
      ease: jest.fn(),
    },
  };
});

// Mock react-native-linear-gradient
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

describe('Skeleton', () => {
  it('renders skeleton when not loaded', () => {
    const { queryByText } = render(
      <Skeleton isLoaded={false}>
        <Text>Test content</Text>
      </Skeleton>
    );

    expect(queryByText('Test content')).toBeNull();
  });

  it('renders content when loaded', () => {
    const { getByText } = render(
      <Skeleton isLoaded={true}>
        <Text>Test content</Text>
      </Skeleton>
    );

    expect(getByText('Test content')).toBeDefined();
  });

  it('renders SkeletonBox correctly', () => {
    const { getByTestId } = render(
      <Skeleton.Box testID="skeleton-box" isLoaded={false} />
    );

    expect(getByTestId('skeleton-box')).toBeDefined();
  });

  it('renders SkeletonText with correct height based on fontSize', () => {
    const { getByTestId } = render(
      <Skeleton.Text
        testID="skeleton-text"
        fontSize="xl"
        isLoaded={false}
      />
    );

    expect(getByTestId('skeleton-text')).toBeDefined();
  });

  it('renders multiple lines for SkeletonText when noOfLines > 1', () => {
    const { getByTestId } = render(
      <Skeleton.Text
        testID="skeleton-text-multiline"
        noOfLines={3}
        isLoaded={false}
      />
    );

    expect(getByTestId('skeleton-text-multiline')).toBeDefined();
  });

  it('renders SkeletonCircle with correct size', () => {
    const { getByTestId } = render(
      <Skeleton.Circle
        testID="skeleton-circle"
        boxSize={50}
        isLoaded={false}
      />
    );

    expect(getByTestId('skeleton-circle')).toBeDefined();
  });

  it('renders SkeletonProvider with children', () => {
    const { getByText } = render(
      <SkeletonProvider>
        <Text>Provider children</Text>
      </SkeletonProvider>
    );

    expect(getByText('Provider children')).toBeDefined();
  });

  it('applies shimmer animation by default', () => {
    const { getByTestId } = render(
      <Skeleton testID="skeleton-shimmer" shimmer={true} isLoaded={false} />
    );

    expect(getByTestId('skeleton-shimmer')).toBeDefined();
  });

  it('disables shimmer animation when shimmer is false', () => {
    const { getByTestId } = render(
      <Skeleton testID="skeleton-no-shimmer" shimmer={false} isLoaded={false} />
    );

    expect(getByTestId('skeleton-no-shimmer')).toBeDefined();
  });
});
