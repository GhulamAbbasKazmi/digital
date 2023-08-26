import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';




function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="Home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;