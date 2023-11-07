import { useState } from 'react';
import React from 'react';
import Sidebar from './sidebar'
import Dashboard from './assets/dashboard';
import Create from './create';
import Edit from './Edit';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  let [data,setData]= useState([
    {
   name:"ajith",
   email:"abc@gmail.com",
   Mobile:"9495959595",
   username:"ajithabc",
   batch:"b46",
  },
  {
    name:"bala",
    email:"mrf@gmail.com",
    Mobile:"9495959596",
    username:"balaabc",
    batch:"b46",
   }])
  return(
    <>
    <div id='wrapper'>
      <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard data={data} setData={setData}/>}/>
        <Route path='/create' element={<Create data={data} setData={setData}/>}/>
        <Route path='/Edit/:id' element={<Edit data={data} setData={setData}/>}/>
        <Route path='*' element={<Navigate to='/dashboard'/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
