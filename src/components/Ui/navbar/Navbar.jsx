import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context';
import { MyButton } from '../button/MyButton';

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const [showUser, setShowUser] = useState('');

  useEffect (() => {
    const mailUser = JSON.parse(localStorage.getItem('mailUser'));
    if(mailUser !== null)
    setShowUser(Object.values(mailUser));
  }, [isAuth])

  const logOut = () => {
    isAuth ? setIsAuth(false): setIsAuth(true)
    localStorage.removeItem('auth');
    localStorage.removeItem('mailUser');
  }
  console.log(showUser[0]);
  return (
  <div className='navbar'>
      { isAuth ? (
      <>
        <MyButton onClick={logOut} >
          Выйти
        </MyButton>
        <div className='user__mail'>
          {showUser[0]}
        </div>
      </> )
        : ''}
    <div className='navbar__links'>
      <Link to='/about'><MyButton>О сайте</MyButton></Link>
      <Link to='/posts'><MyButton>Посты</MyButton></Link>
    </div>
  </div>
  );
};
