import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useMediaQuery,
} from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';
import { useTheme } from 'nextra-theme-docs';

export const ResizableIframe = () => {
  const [dimensions, setDimensions] = useState({ width: 800 });
  const iframeRef = useRef(null);

  const [sliderValue, setSliderValue] = useState(60);

  const [isMediumScreen] = useMediaQuery('(min-width: 600px)');

  const { theme } = useTheme();

  const [borderColor, setBorderColor] = useState('#edf2f7');

  useEffect(() => {
    setBorderColor(theme === 'dark' ? '#4A5568' : '#edf2f7');
  }, [theme]);

  useEffect(() => {
    setDimensions({ width: sliderValue <= 40 ? 40 : sliderValue });
  }, [sliderValue]);

  return (
    <Box>
      <iframe
        ref={iframeRef}
        src="/demo"
        style={{
          width: `${isMediumScreen ? dimensions.width : '100'}%`,
          height: '600px',
          borderWidth: 1,
          borderRadius: 10,
          borderColor,
        }}
      />
      {isMediumScreen && (
        <Slider
          aria-label="slider-ex-1"
          value={sliderValue}
          onChange={(val) => setSliderValue(val)}
          min={0}
          max={100}
          colorScheme={sliderValue < 40 ? 'gray' : 'teal'}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="teal" as={DragHandleIcon} />
          </SliderThumb>
        </Slider>
      )}
    </Box>
  );
};
