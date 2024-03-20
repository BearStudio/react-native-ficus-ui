import React from 'react';
import styles from './styles.module.css';
import { ComplexFeature, SimpleFeature, TryItLive } from './features.js';

const FeatureList = [
  {
    title: 'Style props',
    description:
      'You can use style props to directly apply specific styles to components, simplifying code and improving readability',

    codetitle: 'Box',
    code: `<Box
  h={40}
  w={40}
  mr="sm"
  bg="green.500"
/>`,
  },
  {
    title: 'Theme support',
    description:
      'In Ficus UI, customization options include modifying theme tokens like colors and font sizes and adjusting component styles such as base styles and sizes, and customizing global styles for universal application',
    codetitle: 'Theme',
    code: {
      Colors: `const theme = {
  colors: {
    violet: {
      50: '#f0eaff',
      100: '#d1c1f4',
      200: '#b199e7',
      300: '#9171dc',
      400: '#7248d0',
      500: '#592fb7',
      600: '#45248f',
      700: '#311968',
      800: '#1e0f40',
      900: '#0c031b',
    },
    bleu: {
      50: '#e3eeff',
      100: '#b6cdfe',
      200: '#88abf7',
      300: '#5b8af1',
      400: '#2d69ec',
      500: '#134fd2',
      600: '#0b3da4',
      700: '#052c77',
      800: '#001a4a',
      900: '#00091e',
    }
  }
}`,

      Theme: `const theme = {
  spacing: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    '2xl': "20px",
    '3xl': "28px",
    '4xl': "36px",
    '5xl': "54px",
    '6xl': "72px",
    '7xl': "96px",
    '8xl': "128px",
    '9xl': "160px",
  },
  fontSize: {
    "xs": "12px",
    "sm": "14px",
    "md": "16px",
    "lg": "18px",
    "xl": "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "32px",
    "7xl": "72px",
    "8xl": "96px",
    "9xl": "128px",
  },
}
};`,
    },
  },
  {
    title: 'Responsive styles',
    description:
      'Ficus UI supports responsive styles out of the box. You can pass directly the prop value or an object containing differents values for each screen size',
    codetitle: 'Text',
    code: `export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaBox>
        <Box h="100%" bg={{ base: "blue.500", sm: "red.600" }} />
      </SafeAreaBox>
    </ThemeProvider>
  );
}`,
  },
];

function Feature({ feature }) {
  return typeof feature.code === 'string' ? (
    <SimpleFeature {...feature} />
  ) : (
    <ComplexFeature {...feature} />
  );
}
export default function DetailledFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} feature={feature} />
          ))}
        </div>
        <TryItLive />
      </div>
    </section>
  );
}
