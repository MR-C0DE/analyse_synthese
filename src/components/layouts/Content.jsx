import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import About from '../../pages/About';
import Register from '../../pages/Register';
import Login from '../../pages/Login';

const Content = () => {
  return (
    <div className='Content'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  );
}

export {Content}