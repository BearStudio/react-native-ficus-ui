import React, { useState, useRef, useEffect } from 'react';

export const ResizableIframe = () => {
  const [dimensions, setDimensions] = useState({ width: 800 });
  const iframeRef = useRef(null);

  const [sliderValue, setSliderValue] = useState(60);

  // Media query state to detect screen size
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  // Update dimensions based on slider value
  useEffect(() => {
    setDimensions({ width: sliderValue <= 40 ? 40 : sliderValue });
  }, [sliderValue]);

  // Update screen size state on window resize
  useEffect(() => {
    const handleResize = () => setIsMediumScreen(window.innerWidth >= 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="my-4">
      <iframe
        ref={iframeRef}
        src="/demo"
        style={{
          width: `${isMediumScreen ? dimensions.width : '100'}%`,
          height: '600px',
          borderWidth: '1px',
          borderRadius: '10px',
        }}
        className="border border-gray-100 dark:border-gray-700"
      ></iframe>

      {/* Slider only visible on medium screens */}
      {isMediumScreen && (
        <div className="flex flex-1 items-center mt-4">
          <input
            type="range"
            aria-label="Resize slider"
            value={sliderValue}
            onChange={(e) => setSliderValue(parseInt(e.target.value))}
            min={0}
            max={100}
            className={`w-full flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${
              sliderValue < 40 ? 'accent-gray-400' : 'accent-teal-500'
            }`}
            style={{
              flex: 1,
              accentColor: 'teal'
            }}
          />
          <div
            className="w-6 h-6 flex justify-center items-center bg-teal-500 rounded-full ml-2"
            style={{ color: 'white' }}
          >
            {/* This icon simulates the DragHandleIcon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 6a1 1 0 110-2h10a1 1 0 110 2H5zm0 6a1 1 0 110-2h10a1 1 0 110 2H5zm0 6a1 1 0 110-2h10a1 1 0 110 2H5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
