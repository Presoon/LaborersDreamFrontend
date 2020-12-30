import { createContext } from "react";

export const defaultContext = {
  userLogged: {
    login: "",
  },
  isUserLogged: false,
  toggleLoggedState: () => {},
};

export const AppContext = createContext(defaultContext);
