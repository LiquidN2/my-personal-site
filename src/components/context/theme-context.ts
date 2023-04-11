import { createContext } from 'react';

export enum Theme {
  Default = 'default',
  Dark = 'dark',
}

export interface ThemeContextType {
  theme: Theme;
  enableTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Default,
  enableTheme: _theme => {},
});
