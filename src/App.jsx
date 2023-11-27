import { useState } from 'react';
import React from 'react';
import Sidebar from './sidebar'
import Dashboard from './assets/dashboard';
import Create from './create';
import Edit from './Edit';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Accounts from './assets/Nestedcomponents/Accounts';
import Products from './assets/Nestedcomponents/Products';
import Receipts from './assets/Nestedcomponents/Receipts';
import Staffs from './assets/Nestedcomponents/Staffs';
import Nestedcomponents from './assets/Nestedcomponents';
import UseRef from './assets/UseRef';

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
        <Route path='use-Ref' element={<UseRef/>}/>
        <Route path='nested-components' element={<Nestedcomponents/>}>
          <Route path='accounts' element={<Accounts/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='receipts' element={<Receipts/>}/>
          <Route path='staffs' element={<Staffs/>}/>
        </Route>
        <Route path='*' element={<Navigate to='/dashboard'/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
