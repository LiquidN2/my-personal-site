import type { FC, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './button-icon.module.scss';

interface ButtonIconProps {
  icon: IconProp;
  onClick: MouseEventHandler;
  theme?: 'primary' | 'default';
}

const ButtonIcon: FC<ButtonIconProps> = ({
  icon,
  onClick,
  theme = 'default',
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <FontAwesomeIcon
        className={`${styles.icon} ${
          theme === 'primary' ? styles['icon--primary'] : ''
        }`}
        icon={icon}
      />
    </button>
  );
};

export default ButtonIcon;
