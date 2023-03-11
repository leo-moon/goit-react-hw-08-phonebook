import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import styles from './text-field.module.scss';

const TextField = ({ label, hadleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.field}
        onChange={hadleChange}
        id={id}
        {...props}
      />
    </div>
  );
};

export default TextField;
