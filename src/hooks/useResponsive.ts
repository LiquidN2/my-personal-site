import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const [respondMobile, setRespondMobile] = useState(false);
  const [respondDesktopOrLaptop, setRespondDesktopOrLaptop] = useState(false);

  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 412px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  useEffect(() => {
    setRespondMobile(isMobile);
    setRespondDesktopOrLaptop(isDesktopOrLaptop);
  }, [isMobile, isDesktopOrLaptop]);

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina,
    respondMobile,
    respondDesktopOrLaptop,
  };
};
