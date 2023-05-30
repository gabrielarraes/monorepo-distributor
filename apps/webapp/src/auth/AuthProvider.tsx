import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "./model/User";
import { useAuthApi } from "../hooks/useAuthApi";


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  //const [user, setUser] = useState<User | null>(null);
  const authApi = useAuthApi();

  const setToken = (token: string) => { localStorage.setItem('token', token) }

  const login = async (email: string, password: string) => {
    const data = await useAuthApi().signin(email, password);

    if (data && data.accessToken) {
      setToken(data.accessToken);
      return true;
    }

    return false;
  }

  const register = async (email: string, password: string, username: string) => {
    return await useAuthApi().register(email, password, username);
  }

  const logout = async () => {
    setToken('');
  }

  return (
    <AuthContext.Provider value={{ login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
