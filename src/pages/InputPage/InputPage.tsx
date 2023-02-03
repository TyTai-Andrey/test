import React, { FC, useState } from 'react';
import styles from './InputPage.module.scss';

export type InputPageProps = {};

export const InputPage: FC<InputPageProps> = (props) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const setErrorHandler = (value: string | undefined) => {
    if (!value) {
      setError('');
      return;
    }

    if (/^[+-]?([0-9]+([,][0-9]*)?|[,][0-9]+)$/.test(value)) {
      setError('');
    } else {
      setError('error');
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    setErrorHandler(v);
  };

  return (
    <div className={styles.root}>
      <input value={value} onChange={onChange} />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};
