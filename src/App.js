import React from 'react'
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
const App = () => {
  return (
     <BrowserRouter>
      <Routes>
       <Route index element={<Login />} />
       <Route path="/" element={<Login />} />
       <Route path="/home" element={<Home />} />  
      </Routes> 
     </BrowserRouter>
      
  );
};

export default App;