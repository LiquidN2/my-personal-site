import { FC, MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';

import styles from './button.module.scss';

interface ButtonProps {
  type: 'button';
  onClick: MouseEventHandler;
  children: ReactNode;
  theme: 'default' | 'primary';
}

interface LinkProps {
  type: 'link';
  href: string;
  children: ReactNode;
  theme: 'default' | 'primary';
}

const Button: FC<ButtonProps | LinkProps> = props => {
  const className =
    props.theme === 'primary' ? styles['btn--primary'] : styles.btn;

  if (props.type === 'link')
    return (
      <Link href={props.href} legacyBehavior>
        <a className={className}>{props.children}</a>
      </Link>
    );

  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
