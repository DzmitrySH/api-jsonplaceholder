import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostidPage from '../pages/PostidPage';
import Login from '../pages/Login';
import { AuthContext } from '../context/index';
import { NotFound } from '../pages/NotFound';
import { Loader } from './Ui/loader/Loader';
import { Layout } from './Layout';
import { Start } from "../pages/Start";

export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if(isLoading) {
    return <Loader />
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Start />} />
        <Route path="/posts" element={isAuth ? <Posts /> : <Navigate to="/login" />}/>
        <Route path="/posts/:id" element={<PostidPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/posts" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
