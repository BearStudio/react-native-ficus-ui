import { useWindowDimensions } from 'react-native';

type MediaQueryRange = {
  minWidth?: number;
  maxWidth?: number;
};

type MediaQueryArray = MediaQueryRange[];

const useMediaQuery = (...widths: MediaQueryArray) => {
  const { width } = useWindowDimensions();

  return widths.map((givenWidth) => {
    if (givenWidth?.minWidth && givenWidth?.maxWidth) {
      return width >= givenWidth?.minWidth && width < givenWidth?.maxWidth;
    }

    if (givenWidth?.minWidth && !givenWidth?.maxWidth) {
      return width >= givenWidth?.minWidth;
    }

    if (!givenWidth?.minWidth && givenWidth?.maxWidth) {
      return width < givenWidth?.maxWidth;
    }

    return false;
  });
};

export { useMediaQuery };
