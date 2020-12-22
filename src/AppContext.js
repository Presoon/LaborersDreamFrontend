import { createContext } from "react";

export const defaultObject = {
  isUserLogged: false,
  toggleLoggedState: () => {},
};

export const AppContext = createContext(defaultObject);
