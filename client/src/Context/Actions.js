import { createContext } from "react";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE)

const const ContextProvider = ({children})