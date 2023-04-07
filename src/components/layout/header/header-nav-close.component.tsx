import { FC, MouseEventHandler } from 'react';
import { faX } from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from '@/components/ui/button-icon.component';

interface HeaderNavCloseProps {
  onClick: MouseEventHandler;
}

const HeaderNavClose: FC<HeaderNavCloseProps> = ({ onClick }) => {
  return (
    <div style={{ margin: '2rem' }}>
      <ButtonIcon icon={faX} onClick={onClick} />
    </div>
  );
};

export default HeaderNavClose;
