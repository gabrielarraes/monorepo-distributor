import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import styles from './login.module.scss';
import beer from '../../assets/icons/beer-icon.svg'

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
    <div className={styles.loginContainer}>
      <div className={styles.logo}>
        <img src={beer}  alt={'beer'}/>
      </div>

      <div className={styles.titleContainer}>
        <h4>Login</h4>
        <p>Bem vindo de volta !</p>
      </div>

      <div className={styles.inputContainer}>
        <input  itemType={'error'} type="text" value={email} onChange={handleEmailInput} placeholder="Digite seu e-mail"/>
        <input type="password" value={password} onChange={handlePasswordInput} placeholder="Digite sua senha"/>
      </div>

      <p className={styles.forgotPassword}>Esqueci a senha</p>

      <div className={styles.buttonContainer}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogin}>Registrar</button>
      </div>

      <div className={styles.separator}></div>
    </div>
  );
}
