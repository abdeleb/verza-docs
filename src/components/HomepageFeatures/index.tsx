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
        <strong>Feature-rich SDK</strong> for creating immersive experiences
        with JavaScript. Explore the docs to learn more.
      </>
    ),
  },
  {
    title: 'Multiplayer',
    Svg: require('@site/static/img/sections/2.svg').default,
    description: (
      <>
        <strong>Experience real-time multiplayer</strong> with powerful
        networking features. Say goodbye to the hassle of networking.
      </>
    ),
  },
  {
    title: 'Connect',
    Svg: require('@site/static/img/sections/3.svg').default,
    description: (
      <>
        <strong>Connect with creators</strong>, exchange ideas, join our&nbsp;
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
        <h1>{title}</h1>
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
