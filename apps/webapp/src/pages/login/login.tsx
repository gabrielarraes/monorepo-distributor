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
  const [fieldErrors, setFieldErrors] = useState(
    {
      email: false,
      password: false
    }
  )

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    setFieldErrors({...fieldErrors, email: event.target.value === '' })
  }

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    setFieldErrors({...fieldErrors, password: event.target.value === '' })
  }

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.login(email, password);
      if (isLogged) {
        navigate('/home');
      }
    }
  }

  const handleRegisterNavigation = () => {
    navigate('/register')
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logo}>
        <img src={beer}  alt={'beer'}/>
      </div>

      <div className={styles.titleContainer}>
        <h4>Login</h4>
        <p>Welcome back !</p>
      </div>

      <div className={styles.inputContainer}>
        <input itemType={fieldErrors.email ? 'error' : ''} value={email} onChange={handleEmailInput} placeholder="E-mail"/>
        <input itemType={fieldErrors.password ? 'error' : ''} type="password" value={password} onChange={handlePasswordInput} placeholder="Password"/>
      </div>

      <p className={styles.forgotPassword}>Forgot password</p>

      <div className={styles.buttonContainer}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegisterNavigation}>Register</button>
      </div>

      <div className={styles.separator}></div>
    </div>
  );
}
