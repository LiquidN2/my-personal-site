'use client';

import { FC, ReactNode, useState } from 'react';
import { Theme, ThemeContextType, ThemeContext } from './theme-context';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.Default);

  const context: ThemeContextType = {
    theme: currentTheme,
    enableTheme: (t: Theme) => setCurrentTheme(t),
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
