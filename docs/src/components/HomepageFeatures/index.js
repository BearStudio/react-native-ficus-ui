import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import themeimage from './../../../static/img/theme_color.png'
import sizeimage from './../../../static/img/sizes.png'
const FeatureList = [
  {
    title: 'Style props',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      React Native Ficus UI allows you to pass all the style properties as component props.
      You don't need to create huge StyleSheet objects.
      </>
    ),
    codetitle:'input',
    code:`
    <Input placeholder="Username" p={10} focusBorderColor="blue.500"
    suffix={<Icon name="search" color="gray.900" fontFamily="Feather" />
`
  },
  {
    title: 'Theme support',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      You can edit the components sizes, colors, borders, ... with your own theme.
      </>
    ),
    codetitle:'Theme',
    code :
      {
          colors :`const theme = {
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


    fontSizes :`const theme = {
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

    };`

  }

  },
  {
    title: 'Chakra UI and React Native components',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        React Native Ficus UI provides the support of style props on React Native components
        and some components implemented as from Chakra UI (with same API).
      </>
    ),
    codetitle:'Text',
    code:`
    <Text fontSize="xs" style={{ color: 'blue', padding: '10px',
    fontWeight: 'bold',textDecoration: 'underline' }}>Text size: xs</Text>
    `
  },
];


function Feature({Svg, title, description,code,codetitle}) {
  const [item,setitem]=useState('colors');
  return (
    <div >
      <div className={clsx('padding-horiz--md padding-vert--lg',styles.feature)} >
        <div>
        <h3 style={{textAlign:'start',}} >{title}</h3>
        <p style={{textAlign:'start',paddingRight:'1rem'}}>{description}</p>
        {title=='Theme support' &&
        (
          <div >
          <a onClick={()=>setitem('colors')} style={{paddingRight:'20px', textDecoration: item === 'colors' ? 'underline' : 'none' }}>Colors</a>
          <a onClick={()=>setitem('fontSizes')} style={{ textDecoration: item === 'fontSizes' ? 'underline' : 'none' }}> Size</a>
          </div>
        )
        }

  {title==='Theme support'   &&
        <div>
        <img src={item=='fontSizes'?sizeimage:themeimage} className={styles.img}/>


        </div>
        }
        </div>

        {title!='Theme support' &&
        <div className={styles.code}>
       <CodeBlock  language='javascript' title={codetitle} >
      {code}
    </CodeBlock>
       </div>
}
  {title=='Theme support'  &&
        <div className={styles.code}>
       <CodeBlock  language='javascript' title={item} >
      {code[item]}
    </CodeBlock>
       </div>
}


      </div>

    </div>
  );
}

export default function HomepageFeatures() {

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

      </div>
    </section>
  );
}

const themesupport =[
  {
    codetitle:'colors',
    image:'themeimage',
    code :`const theme = {
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


      },

    };`
  },
  {
    codetitle:'fontSizes',
    image:`sizeimage`,
    code :`const theme = {
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

    };`

  }
]
