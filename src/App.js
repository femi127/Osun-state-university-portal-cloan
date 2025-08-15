import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from './components/LeftPage';
import './App.css';
import PasswordReset from './components/PasswordReset';
import PracticePage from './components/PracticePage';
import FullPage from './components/FullPage';
import HeaderIMG from './components/HeaderIMG';

function App() {
  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FullPage />} />
      <Route path="/new" element={<AboutUs />} />
      <Route path="/passwordReset" element={<PasswordReset />} />
      <Route path="/void" element={<PracticePage />} />
      <Route path="/mainIMG" element={<HeaderIMG />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
