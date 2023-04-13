import { createContext } from "react";

export class State {
  email = "Bonheur Bushiri";
  fullname = "bonheurbushiri@gmail.com";
  score = 0;
}

export const Context = createContext(new State());
