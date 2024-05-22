import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import ExpoLayout from '../ExpoLayout/index.js';

export const SimpleFeature = ({ title, description, code, codetitle }) => {
  return (
    <div
      className={clsx('padding-horiz--md padding-vert--lg ', styles.feature)}
    >
      <div className={styles.featureTextContent}>
        <p
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginTop: '20px',
            marginBottom: '10px',
            textAlign: 'start',
          }}
        >
          {title}
        </p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.codeSimple}>
        <CodeBlock language="jsx">
          {code}
        </CodeBlock>
      </div>
    </div>
  );
};
export const ComplexFeature = ({ title, description, code }) => {
  const [item, setitem] = useState('Colors');
  return (
    <div
      className={clsx('padding-horiz--md padding-vert--lg ', styles.feature)}
    >
      <div className={styles.featureTextContent}>
        <p
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginTop: '20px',
            marginBottom: '10px',
            textAlign: 'start',
          }}
        >
          {title}
        </p>
        <p style={{ textAlign: 'start' }}>{description}</p>

        <button
          onClick={() => setitem('Colors')}
          className={clsx('button button--primary', styles.themeButton)}
          style={
            item === 'Colors'
              ? {}
              : { backgroundColor: 'white', color: 'black' }
          }
        >
          Colors
        </button>
        <button
          onClick={() => setitem('Theme')}
          className="button button--primary"
          style={
            item === 'Theme' ? {} : { backgroundColor: 'white', color: 'black' }
          }
        >
          Spacing
        </button>

        {item === 'Theme' ? <ThemesTable /> : <ColorsTable />}
      </div>

      <div className={styles.codeComplex}>
        <CodeBlock language="jsx">
          {code[item]}
        </CodeBlock>
      </div>
    </div>
  );
};
const ThemesTable = () => {
  const theme = [
    { size: 'xs', pixelValue: '2px' },
    { size: 'sm', pixelValue: '4px' },
    { size: 'md', pixelValue: '8px' },
    { size: 'lg', pixelValue: '12px' },
    { size: 'xl', pixelValue: '16px' },
    { size: '2xl', pixelValue: '20px' },
    { size: '3xl', pixelValue: '28px' },
    { size: '4xl', pixelValue: '36px' },
    { size: '5xl', pixelValue: '54px' },
    { size: '6xl', pixelValue: '72px' },
    { size: '7xl', pixelValue: '96px' },
    { size: '8xl', pixelValue: '128px' },
    { size: '9xl', pixelValue: '160px' },
  ];
  return (
    <div>
      <table
        style={{
          paddingTop: '15px',
        }}
      >
        <thead>
          <tr>
            <th style={{ paddingRight: '20px' }}>Size</th>
            <th style={{ paddingRight: '20px' }}>Pixel Value</th>
            <th>Representation</th>
          </tr>
        </thead>
        <tbody>
          {theme.map((theme, index) => (
            <tr key={index}>
              <td style={{ paddingRight: '20px' }}>{theme.size}</td>
              <td style={{ paddingRight: '20px' }}>{theme.pixelValue}</td>
              <td>
                <span
                  style={{
                    display: 'inline-block',
                    width: theme.pixelValue,
                    height: '10px',
                    backgroundColor: '#25c2a0',
                  }}
                 />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const ColorsTable = () => {
  const colors = [
    [
      '#f0eaff',
      '#d1c1f4',
      '#b199e7',
      '#9171dc',
      '#7248d0',
      '#592fb7',
      '#45248f',
      '#311968',
      '#1e0f40',
      '#0c031b',
    ],
    [
      '#e3eeff',
      '#b6cdfe',
      '#88abf7',
      '#5b8af1',
      '#2d69ec',
      '#134fd2',
      '#0b3da4',
      '#052c77',
      '#001a4a',
      '#00091e',
    ],
    [
      '#ffe4f4',
      '#fbb9d5',
      '#f38db7',
      '#ec609a',
      '#e5337d',
      '#cc1a64',
      '#9f114e',
      '#730a37',
      '#470421',
      '#1e000c',
    ],
    [
      '#ddfff3',
      '#b5f6e0',
      '#8cf0cd',
      '#60e8ba',
      '#36e2a6',
      '#1dc98d',
      '#119c6d',
      '#046f4d',
      '#00442e',
      '#00180e',
    ],
  ];
  return (
    <div style={{}} className={styles.colorsList}>
      {colors.map((colorsList) => (
        <div
          style={{
            display: 'flex',
            marginBottom: '5px',
            paddingTop: '10px',
            width: '100%',
          }}
        >
          {colorsList.map((color, index) => (
            <Square key={index} color={color} />
          ))}
        </div>
      ))}
    </div>
  );
};
const Square = ({ color }) => (
  <div style={{ backgroundColor: color }} className={styles.square} />
);

export const TryItLive = () => {
  return (
    <div
      className={clsx(
        styles.live,
        'padding-horiz--md padding-vert--lg textAlign:start '
      )}
    >
      <div>
        <p
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginTop: '20px',
            marginBottom: '10px',
            textAlign: 'start',
          }}
        >
          Test it out live!
        </p>
        <p className={styles.tryItLiveDescription}>
          Discover components live with Expo. Experiment with interactive
          features for an immersive development experience
        </p>
      </div>
      <ExpoLayout id="box" />
    </div>
  );
};
