import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Arrays.module.scss';

export type ArraysProps = {};

export const Arrays: FC<ArraysProps> = (props) => {
  const createArrC = (arrA: number[], arrB: number[]) => {
    return arrA.filter((i) => !arrB.includes(i));
  };

  const createArrD = (arrA: number[], arrB: number[]) => {
    // Избавляюсь от дубликатов
    const setA = Array.from(new Set(arrA));
    const setB = Array.from(new Set(arrB));

    return setA.filter((i) => setB.includes(i));
  };

  return (
    <div className={styles.root}>
      <div className={styles.block}>
        <p>{'const createArrC = (arrA: number[], arrB: number[]) => {'}</p>
        <p className={styles.paragraph}>
          {'return arrA.filter((i) => !arrB.includes(i));'}
        </p>
        <p>{'};'}</p>
      </div>
      <div className={styles.block}>
        <p>{'const createArrD = (arrA: number[], arrB: number[]) => {'}</p>
        <p className={classNames(styles.comment, styles.paragraph)}>
          {'// Избавляюсь от дубликатов'}
        </p>
        <p className={styles.paragraph}>
          {'const setA = Array.from(new Set(arrA));'}
        </p>
        <p className={styles.paragraph}>
          {'const setB = Array.from(new Set(arrB));'}
        </p>
        <p>{''}</p>
        <p className={styles.paragraph}>
          {'return setA.filter((i) => setB.includes(i));'}
        </p>
        <p>{'};'}</p>
      </div>
    </div>
  );
};
