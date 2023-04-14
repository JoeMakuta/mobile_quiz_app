import { createContext } from "react";

export class State {
  email = "";
  fullname = "";
  score = 0;
}

export const Context = createContext(new State());
