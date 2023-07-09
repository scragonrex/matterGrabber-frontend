import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import UserProfile from './pages/UserProfile';
import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { useMemo, useState } from 'react';
import { themeSetting } from './theme';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
function Root() {

  const isAuth = Boolean(useSelector(state=>state.auth.token));
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    if (mode === "light")
      setMode("dark");
    else
      setMode("light");
  }

  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);
  return (
    <>
        <CssBaseline />
        {isAuth && <Navbar/>}
        <Routes>
          <Route path='/' element={<Login pageType="login"/>} />
          <Route path='/signup' element={<Signup pageType="register"/>} />
          {/* <Route path='/home' element={isAuth ? <Home/> : <Navigate to='/'/>} /> */}
          <Route path='/home' element={<Home/>} />
          <Route path='/product' element={isAuth ? <Product /> : <Navigate to='/'/>} />
          <Route path='/cart' element={isAuth ? <Cart /> : <Navigate to='/'/>} />
          <Route path='/UserProfile' element={isAuth ? <UserProfile /> : <Navigate to='/'/>} />
        </Routes>
        </>
  );
}

