import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

export type NavProps = {};

export const Nav: FC<NavProps> = () => {
  return (
    <div className={styles.root}>
      <NavLink to={'/'}>Главная</NavLink>
      <NavLink to={'/InputPage'}>Инпут</NavLink>
      <NavLink to={'/Arrays'}>Массивы</NavLink>
    </div>
  );
};
