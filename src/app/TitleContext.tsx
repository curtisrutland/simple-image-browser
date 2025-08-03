import { createContext, PropsWithChildren, useContext, useState } from "react";

const defaultTitle = "Simple Image Browser";

interface TitleContextValue {
  title: string;
  setTitle: (newTitle: string) => void;
}

export const TitleContext = createContext<TitleContextValue>({
  title: defaultTitle,
  setTitle: () => {},
});

export default function TitleContextProvider(props: PropsWithChildren) {
  const { children } = props;
  const [title, setTitle] = useState(defaultTitle);

  function handleSetTitle(value: string) {
    setTitle(`${defaultTitle} - ${value}`);
  }

  const value: TitleContextValue = { title, setTitle: handleSetTitle };

  return <TitleContext.Provider value={value}>{children}</TitleContext.Provider>;
}

export function useTitle(): TitleContextValue {
  const context = useContext(TitleContext);
  return context;
}
