import {
  Dispatch,
  SetStateAction,
  FC,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react';

interface NavContextType {
  hidden: boolean;
  showNav: () => void;
  hideNav: () => void;
}

interface NavContextProviderProps {
  children: ReactNode;
}

export const NavContext = createContext<NavContextType>({
  hidden: true,
  showNav: () => {},
  hideNav: () => {},
});

export const NavContextProvider: FC<NavContextProviderProps> = ({
  children,
}) => {
  const [hidden, setHidden] = useState(true);

  return (
    <NavContext.Provider
      value={{
        hidden,
        showNav: () => setHidden(false),
        hideNav: () => setHidden(true),
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
