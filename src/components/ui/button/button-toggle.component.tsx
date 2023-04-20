'use client';

import { FC, ChangeEventHandler, ReactNode } from 'react';

import styles from './button-toggle.module.scss';

interface ButtonToggleProps {
  name: string;
  id: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
}

const ButtonToggle: FC<ButtonToggleProps> = ({
  name,
  id,
  checked,
  onChange,
  children,
}) => {
  return (
    <label className={styles.container} htmlFor={id}>
      <input
        type="checkbox"
        className={styles.checkbox}
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <span className={`${styles.slider} ${styles['slider--round']}`}>
        {children}
      </span>
    </label>
  );
};

export default ButtonToggle;
