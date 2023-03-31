import React from 'react';

import clsx from 'clsx';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Powerful SDK',
    Svg: require('@site/static/img/sections/1.svg').default,
    description: (
      <>
        Feature-rich SDK for creating immersive experiences with JavaScript.
        Explore the docs to harness Verza's capabilities.
      </>
    ),
  },
  {
    title: 'Real-time Multiplayer',
    Svg: require('@site/static/img/sections/2.svg').default,
    description: (
      <>
        Experience immersive real-time multiplayer with Verza's powerful
        networking features. Say goodbye to the hassle of networking.
      </>
    ),
  },
  {
    title: 'Connect and Collaborate',
    Svg: require('@site/static/img/sections/3.svg').default,
    description: (
      <>
        Connect with skilled developers on Verza, exchange ideas, join our&nbsp;
        <a target="_blank" href="https://discord.verza.io/">
          Discord
        </a>{' '}
        and shape the future together.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
