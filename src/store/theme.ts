import { persistentAtom } from '@nanostores/persistent';

type Theme = 'default' | 'dark';

export const $theme = persistentAtom<Theme>('theme', 'default', {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function setTheme(theme: Theme) {
  $theme.set(theme);
}
