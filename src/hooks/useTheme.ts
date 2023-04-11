import { MutableRefObject, useContext, useEffect } from 'react';
import { Theme, ThemeContext } from '@/components/context/theme-context';

interface ClassNamesType {
  [key: string]: string;
}

export const useTheme = (
  elementRef: MutableRefObject<HTMLElement | HTMLDivElement | null>,
  classNames: ClassNamesType
) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!elementRef.current) return;

    switch (theme) {
      case Theme.Dark:
        elementRef.current.className = classNames[Theme.Dark];
        break;
      case Theme.Default:
      default:
        elementRef.current.className = classNames[Theme.Default];
        break;
    }
  }, [theme, elementRef, classNames]);
};
