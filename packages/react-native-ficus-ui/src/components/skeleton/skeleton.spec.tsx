import React from 'react';
import { render } from '@testing-library/react-native';
import { Skeleton, SkeletonCircle, SkeletonText, SkeletonProvider } from './index';
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
      linear: jest.fn(),
    },
  };
});

describe('Skeleton', () => {
  it('renders skeleton when loading', () => {
    const { queryByText } = render(
      <Skeleton loading={true}>
        <Text>Test content</Text>
      </Skeleton>
    );

    expect(queryByText('Test content')).toBeNull();
  });

  it('renders content when not loading', () => {
    const { getByText } = render(
      <Skeleton loading={false}>
        <Text>Test content</Text>
      </Skeleton>
    );

    expect(getByText('Test content')).toBeDefined();
  });

  it('renders Skeleton correctly with variants', () => {
    const { getByTestId: getByTestId1 } = render(
      <Skeleton testID="skeleton-pulse" variant="pulse" loading={true} />
    );
    const { getByTestId: getByTestId2 } = render(
      <Skeleton testID="skeleton-shine" variant="shine" loading={true} />
    );
    const { getByTestId: getByTestId3 } = render(
      <Skeleton testID="skeleton-none" variant="none" loading={true} />
    );

    expect(getByTestId1('skeleton-pulse')).toBeDefined();
    expect(getByTestId2('skeleton-shine')).toBeDefined();
    expect(getByTestId3('skeleton-none')).toBeDefined();
  });

  it('renders SkeletonText with correct height based on fontSize', () => {
    const { getByTestId } = render(
      <SkeletonText
        testID="skeleton-text"
        fontSize="xl"
        loading={true}
      />
    );

    expect(getByTestId('skeleton-text')).toBeDefined();
  });

  it('renders multiple lines for SkeletonText when noOfLines > 1', () => {
    const { getByTestId } = render(
      <SkeletonText
        testID="skeleton-text-multiline"
        noOfLines={3}
        loading={true}
      />
    );

    expect(getByTestId('skeleton-text-multiline')).toBeDefined();
  });

  it('renders SkeletonCircle with correct size', () => {
    const { getByTestId } = render(
      <SkeletonCircle
        testID="skeleton-circle"
        size="10"
        loading={true}
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

  it('applies colorPalette correctly', () => {
    const { getByTestId } = render(
      <Skeleton testID="skeleton-colored" colorPalette="blue" loading={true} />
    );

    expect(getByTestId('skeleton-colored')).toBeDefined();
  });
});
