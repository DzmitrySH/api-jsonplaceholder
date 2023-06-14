import React from 'react';
import { useForm } from 'react-hook-form';
import { MyButton } from '../components/Ui/button/MyButton';
import { MuInput } from '../components/Ui/input/MuInput';
import { useContext } from 'react';
import { AuthContext } from '../context';
import { Message } from '../components/Ui/message/Message';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({mode: "onBlur"});

  const login = (data) => {
    reset();
    setIsAuth(!isAuth);
    localStorage.setItem('auth', 'true');
    localStorage.setItem('mailUser', JSON.stringify(data));
  }

  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,15}$/;

  return (
    <div className='signup'>
      <h3>Страница логин</h3>
      <form action="submit" onSubmit={handleSubmit(login)}>
        <MuInput 
          placeholder="mail" 
          type="text"
          {...register('email', {
            required: { value: true, message: "Электронная почта" },
            pattern: { value: emailRegEx, message: "Может: mail@mail.com" },
          })}
        />
        {errors.email && <Message message={errors.email.message} />}
        <MuInput 
          placeholder="pass" 
          type="password "
          {...register('password', {
            required: { value: true, message: "Введите пароль" },
            pattern: { value: passwordRegEx, message: "Может: Abc123$e"}
          })} 
          />
          {errors.password && <Message message={errors.password.message} />}
        <MyButton type="submit">Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;