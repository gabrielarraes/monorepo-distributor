import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from 'react-router-dom';


export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!localStorage.getItem("token")) {
    return <Navigate to={{ pathname: '/'}} />
  }

  return children;
}
