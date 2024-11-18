import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import AutoList from './components/AutoList';
import Login from './components/account/Login';
import Registration from './components/account/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='autos' element={<AutoList/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Registration/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;