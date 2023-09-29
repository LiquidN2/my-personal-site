import { atom } from 'nanostores';

export const $navMenu = atom<{ isOpen: boolean }>({ isOpen: false });

export const toggleNavMenu = () =>
  $navMenu.set({ isOpen: !$navMenu.get().isOpen });

export const openNavMenu = () => $navMenu.set({ isOpen: true });

export const closeNavMenu = () => $navMenu.set({ isOpen: false });
