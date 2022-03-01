import React, { FC } from "react";
import "./App.css";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Course from "./components/pages/Course";
import TaggedCourse from "./components/pages/Lecture/[id]"
import Demo from "./components/pages/Demo";
import Admin from "./components/pages/Admin";
import AuthProvider from "./components/wrapper/AuthProvider";
import {FC} from "react"

const App: FC = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/course/:id" element={<TaggedCourse />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
