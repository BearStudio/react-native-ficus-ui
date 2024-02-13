import React from 'react';
import styles from './styles.module.css';
import { ComplexFeature, SimpleFeature, TryItLive } from './features.js';

const FeatureList = [
  {
    title: 'Style props',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        You can use style props to directly apply specific styles to components,
        simplifying code and improving readability.
      </>
    ),
    codetitle: 'Input',
    code: `<Input
    placeholder='Username'
    p={10}
    focusBorderColor='blue.500'
    suffix={<Icon name='search'
    color='gray.900'
    fontFamily='Feather' />}
  />`,
  },
  {
    title: 'Theme support',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        In Ficus UI, customization options include modifying theme tokens like
        colors and font sizes and adjusting component styles such as base styles
        and sizes, and customizing global styles for universal application.
      </>
    ),
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
              Blue: {
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
    title: 'Chakra UI and React Native components',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        You can style your components using StyleSheet. create or style props
        directly, providing flexibility in how you manage and apply styles
        according to your preferences.
      </>
    ),
    codetitle: 'Text',
    code: `<Text
    fontSize='xs'
    style={{
      color: 'blue',
      padding: '10px',
      fontWeight: 'bold',
      textDecoration: 'underline',
    }}
  >
    Ficus UI
  </Text>
    `,
  },
];

function Feature({ feature }) {
  return typeof feature.code == 'string' ? (
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} feature={props} />
          ))}
        </div>
        <TryItLive />
      </div>
    </section>
  );
}
