import React from 'react';

import Link from '@docusaurus/Link';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome!</h1>
        <p className="hero__subtitle">Unlock Your Creativity</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/welcome">
            Get started 🧱
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Welcome to Verza Documentation`}
      description="Explore the official documentation for Verza, a powerful browser-based platform for creating and sharing custom game modes using JavaScript. Get started with the Verza SDK, learn best practices, and join the community.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
