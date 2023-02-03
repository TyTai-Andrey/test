import React, { FC } from 'react';
import styles from './Home.module.scss';

export type HomeProps = {};

export const Home: FC<HomeProps> = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.flexWrapper}>
        <div>start</div>
        <div>middle flex 1</div>
        <div>middle flex 2</div>
        <div>end</div>
      </div>
    </div>
  );
};
