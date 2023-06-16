import React, {useEffect, useMemo, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import './styles/App.css';
import { Navbar } from './components/Ui/navbar/Navbar';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
    setLoading(false);
  }, [])

   return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  );
}
 
export default App;
