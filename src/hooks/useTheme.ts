import { MutableRefObject, useContext, useEffect, useRef } from 'react';
import { Theme, ThemeContext } from '@/components/context/theme-context';

interface ClassNamesType {
  [key: string]: string;
}

export const useTheme = (
  elementRef: MutableRefObject<
    HTMLElement | HTMLDivElement | HTMLParagraphElement | HTMLSpanElement | null
  >,
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

export { Theme } from '@/components/context/theme-context';

export const useThemes = <T extends HTMLElement>(
  classNames: ClassNamesType
): MutableRefObject<T | null> => {
  const elementRef = useRef<T | null>(null);

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

  return elementRef;
};
