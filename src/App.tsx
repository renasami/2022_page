import React, { FC } from 'react';
import './App.css';
import Login from "./components/pages/Login"
import Register from './components/pages/Register';
import Home from "./components/pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Course from './components/pages/Course';
import Demo from './components/pages/Demo';
import Admin from './components/pages/Admin';
const App:FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/course" element={<Course/>} />
        <Route path="/demo" element={<Demo/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
