
import React,{useState} from "react";
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import themeimage from '../../../static/img/theme_color.png'
import ExpoLayout from '../ExpoLayout/index.js';

export const SimpleFeature = ({  title, description, code,codetitle }) => {
  return (

      <div
        className={clsx('padding-horiz--md padding-vert--lg ',styles.feature)}
      >
        <div  className={styles.content} >
          <h3 style={{ textAlign: 'start' }}>{title}</h3>
          <p className={styles.description} >
            {description}
          </p>
        </div>
          <div className={styles.codeSimple} >
          <CodeBlock language="jsx" title={codetitle} >
            {code}
          </CodeBlock>
          </div>

      </div>

  );
};
export const ComplexFeature = ({ title, description, code }) => {
  const [item, setitem] = useState('colors');
  return (
      <div
        className={clsx('padding-horiz--md padding-vert--lg ', styles.feature)}
      >
        <div className={styles.content}>
          <h3 style={{ textAlign: 'start' }}>{title}</h3>
          <p  style={{ textAlign: 'start', paddingRight: '1rem' }}>
            {description}
          </p>

            <button
              onClick={() => setitem('colors')}
              className='button button--primary'
              style={{
                marginRight: '10px',
                color:'black'
              }}
            >
              Colors
            </button>
            <button
              onClick={() => setitem('Theme')}
              className='button button--primary'
              style={{
                marginRight: '10px',
                color:'black',
              }}
            >
              Spacing
            </button>

              {item!='Theme' ?(
                <img
                src={themeimage}
                className={styles.img}
                alt='Color degradation'
                style={{objectFit:'cover'}}
              />
              ):<ThemesTable/>}


        </div>

        <div className={styles.codeComplex}>
          <CodeBlock language="jsx" title={item} >
            {code[item]}
          </CodeBlock>
        </div>
      </div>

  );
};
const ThemesTable = () => {
  const Theme = [
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

    <table style={{paddingTop:'15px'}}>
    <thead>
      <tr >
        <th style={{ paddingRight: '20px' }}>Size</th>
        <th style={{ paddingRight: '20px' }}>Pixel Value</th>
        <th>Representation</th>
      </tr>
    </thead>
    <tbody>
      {Theme.map((Theme, index) => (
        <tr key={index}  >
          <td style={{ paddingRight: '20px' }}>{Theme.size}</td>
          <td style={{ paddingRight: '20px' }}>{Theme.pixelValue}</td>
          <td>
            <span
              style={{
                display: 'inline-block',
                width: Theme.pixelValue,
                height: '10px',
                backgroundColor: '#25c2a0',
              }}
            ></span>

          </td>
        </tr>
      ))}
    </tbody>
  </table>


  );
};
export const TryItLive =()=>{
  return (
    <div
    className={clsx(
      styles.live,
      'padding-horiz--md padding-vert--lg textAlign:start'
    )}
  >
    <div>
      <h3 className="">Test it out live!</h3>
      <p className={styles.TryItLiveDescription}>
        Discover components live with Expo. Experiment with interactive
        features for an immersive development experience.
      </p>
    </div>
    <ExpoLayout id="box"  />
   </div>
  )
}
