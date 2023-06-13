import React from 'react';
import { MyButton } from '../components/Ui/button/MyButton';
import { MuInput } from '../components/Ui/input/MuInput';
import { useContext } from 'react';
import { AuthContext } from '../context';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  
  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h3>Страница логин</h3>
      <form onSubmit={login}>
        <MuInput type="text" placeholder='введите логин'/>
        <MuInput type="text " placeholder='введите пароль'/>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;