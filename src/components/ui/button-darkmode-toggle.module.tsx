'use client';

import { ChangeEventHandler, FC, useEffect, useState } from 'react';

import ButtonToggle from './button-toggle.component';

import styles from './button-darkmode-toggle.module.scss';

interface ButtonDarkModeToggleProps {
  isOn: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const ButtonDarkModeToggle: FC<ButtonDarkModeToggleProps> = ({
  isOn,
  onChange,
}) => {
  const [iconDarkClassName, setIconDarkClassName] = useState(
    `${styles.icon} ${styles['icon--dark']} ${styles['icon--hidden']}`
  );
  const [iconLightClassName, setIconLightClassName] = useState(
    `${styles.icon} ${styles['icon--light']}`
  );

  useEffect(() => {
    if (isOn) {
      setIconDarkClassName(`${styles.icon} ${styles['icon--dark']}`);
      setIconLightClassName(
        `${styles.icon} ${styles['icon--light']} ${styles['icon--hidden']}`
      );
    } else {
      setIconDarkClassName(
        `${styles.icon} ${styles['icon--dark']} ${styles['icon--hidden']}`
      );
      setIconLightClassName(`${styles.icon} ${styles['icon--light']}`);
    }
  }, [isOn]);

  return (
    <ButtonToggle
      name="dark-mode"
      id="dark-mode"
      checked={isOn}
      onChange={onChange}
    >
      <span className={iconDarkClassName}>🌙</span>
      <span className={iconLightClassName}>☀️</span>
    </ButtonToggle>
  );
};

export default ButtonDarkModeToggle;
