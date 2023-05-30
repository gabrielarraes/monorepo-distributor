

import { Route, Routes, Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Login } from "../pages/login/login";
import { RequireAuth } from "../auth/RequireAuth";
import styles from './app.module.scss'

export function App() {
  const auth = useContext(AuthContext);

  // const handleLogout = async () => {
  //   await auth.signout();
  //   window.location.href = window.location.href;
  // }

  return (
    <div className={styles.App}>
      <hr />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/private" element={
          <RequireAuth>
            <div>
              <p>teste</p>
            </div>
          </RequireAuth>
        }/>
      </Routes>
    </div>
  );
}

export default App;
