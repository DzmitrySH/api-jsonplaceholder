import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context';
import { MyButton } from '../button/MyButton';

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logOut = () => {
    isAuth ? setIsAuth(false) : setIsAuth(true)
    localStorage.removeItem('auth');
  }

  return (
  <div className='navbar'>
    { isAuth ? 
      <MyButton onClick={logOut}>
        Выйти
      </MyButton> 
      : ''}
    <div className='navbar__links'>
      <Link to='/about'><MyButton>О сайте</MyButton></Link>
      <Link to='/posts'><MyButton>Посты</MyButton></Link>
    </div>
  </div>
  );
};
