import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import styles from './register.module.scss';
import beer from '../../assets/icons/beer-icon.svg'

export const Register = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState(
    {
      username: false,
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

  const handleUsernameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);

    setFieldErrors({...fieldErrors, username: event.target.value === '' })
  }

  const handleRegister = async () => {
    if (email && password) {
      const registered = await auth.register(email, password, username);
      if (registered) {
        navigate('/login');
      }
    }
  }

  const handleReturn = () => {
    navigate('/login')
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logo}>
        <img src={beer}  alt={'beer'}/>
      </div>

      <div className={styles.titleContainer}>
        <h4>Register</h4>
        <p>Fill in the fields to complete your registration.</p>
      </div>

      <p></p>

      <div className={styles.inputContainer}>
        <input itemType={fieldErrors.email ? 'error' : ''} type="text" value={email} onChange={handleEmailInput} placeholder="E-mail"/>
        <input itemType={fieldErrors.password ? 'error' : ''} type="password" value={password} onChange={handlePasswordInput} placeholder="Password"/>
        <input itemType={fieldErrors.username ? 'error' : ''} type="text" value={username} onChange={handleUsernameInput} placeholder="Name"/>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={handleRegister}>Registrar</button>
      </div>

      <p onClick={handleReturn} className={styles.return}>Return</p>

      <div className={styles.separator}></div>
    </div>
  );
}
