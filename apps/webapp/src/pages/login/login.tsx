import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.login(email, password);
      if (isLogged) {
        navigate('/home');
      }
    }
  }

  return (
    <div className="login-container">
      <h2>Página Fechada</h2>
      <input className="inputLegal" type="text" value={email} onChange={handleEmailInput} placeholder="Digite seu e-mail"/>
      <input type="password" value={password} onChange={handlePasswordInput} placeholder="Digite sua senha"/>
      <button onClick={handleLogin}>Logar</button>
    </div>
  );
}
