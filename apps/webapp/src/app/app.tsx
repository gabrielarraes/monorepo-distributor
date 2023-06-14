

import {Route, Routes, Link, useNavigate} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Login } from "../pages/login/login";
import { RequireAuth } from "../auth/RequireAuth";
import styles from './app.module.scss'
import {Register} from "../pages/register/register";
import {Home} from "../pages/home/home";

export function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate('/login')
    //window.location.href = window.location.href;
  }

  return (
    <div className={styles.App}>
      <hr />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }>
          <Route path="teste" element={<p onClick={handleLogout}>teste</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
