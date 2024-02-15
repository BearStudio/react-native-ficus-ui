import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import DetailledFeatures from './detailledFeatures';
import { LuPalette, LuPaintbrush2, LuComponent } from 'react-icons/lu';

const FeatureList = [
  {
    title: 'Style props',
    icon: LuComponent,
    description: `React Native Ficus UI allows you to pass all the style properties as component props. You don't need to create huge StyleSheet objects. `,
  },
  {
    title: 'Theme support',
    icon: LuPalette,
    description:
      ' You can edit the components sizes, colors, borders, ... with your own theme.',
  },
  {
    title: 'Chakra UI & React Native ',
    icon: LuPaintbrush2,
    description:
      'React Native Ficus UI provides the support of style props on React Native components and some components implemented as from Chakra UI(with same API).',
  },
];

function Feature({ feature }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-vert--md">
        <feature.icon size={30} strokeWidth={1} />
        <p
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginTop: '20px',
            marginBottom: '10px',
          }}
        >
          {feature.title}
        </p>
        <p>{feature.description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} feature={feature} />
          ))}
          <DetailledFeatures />
        </div>
      </div>
    </section>
  );
}
