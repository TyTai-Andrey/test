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

  return <div className={styles.root}></div>;
};
