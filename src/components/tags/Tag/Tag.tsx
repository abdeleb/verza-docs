import styles from './Tag.module.scss';

import React from 'react';

import clsx from 'clsx';

type TagProps = {
  tag: string;
  green?: boolean;
  green2?: boolean;
  green3?: boolean;
  blue?: boolean;
};

const Tag = ({tag, green, green2, green3, blue}: TagProps) => (
  <span
    className={clsx(
      styles.tag,
      green && styles.green,
      green2 && styles.green2,
      green3 && styles.green3,
      blue && styles.blue,
    )}>
    {tag}
  </span>
);

export default Tag;
