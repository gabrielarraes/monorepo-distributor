import { createContext } from 'react';
import {User} from "./model/User";

export type AuthContextType = {
  //user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, username: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);
