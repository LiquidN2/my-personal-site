'use client';

import { FC, MouseEventHandler } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from '@/components/ui/button/button-icon.component';

interface HeaderNavToggleProps {
  onClick: MouseEventHandler;
}

const HeaderNavToggle: FC<HeaderNavToggleProps> = ({ onClick }) => {
  return <ButtonIcon icon={faBars} onClick={onClick} theme="primary" />;
};

export default HeaderNavToggle;
