import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import UserProfile from './pages/UserProfile';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { useMemo, useState } from 'react';
import { themeSetting } from './theme';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
function Root() {
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
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </>
  );
}

