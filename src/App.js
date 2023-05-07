import Axios from 'axios';
import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route, BrowserRouter as Router, useNavigate, Navigate } from 'react-router-dom';
import Login from './Login';
import Quizscreen from './components/quizscreen';


function App() {
  
  let isAccountVerified = false;
  let nav = useNavigate();

  const accountVerified = () => {
    isAccountVerified = true;
    console.log("truei");
    nav("/quiz");
  }

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Login accountVerified={accountVerified} />}/>
        <Route path='/quiz' element={<Quizscreen />}/>
      </Routes>
    </div>
  )
}
export default App;
