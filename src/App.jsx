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
import UseReducer from './assets/UseReducer';
import UserContext, { UserDataContext } from './Context/UserContext';
import DashboardContext from './Context/DashboardContext';
import Home from './assets/Home';
import ProtectedRoute from './Context/ProtectedRoute';

function App() {
  // let [data,setData]= useState([
  //   {
  //  name:"ajith",
  //  email:"abc@gmail.com",
  //  Mobile:"9495959595",
  //  username:"ajithabc",
  //  batch:"b46",
  // },
  // {
  //   name:"bala",
  //   email:"mrf@gmail.com",
  //   Mobile:"9495959596",
  //   username:"balaabc",
  //   batch:"b46",
  //  }])
  return(
    <>
    <div id='wrapper'>
      <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={
         <ProtectedRoute>
         <UserContext>
           <DashboardContext>
               <Sidebar/>
               <Dashboard/>  
           </DashboardContext>
         </UserContext>
     </ProtectedRoute>}/>
        
        <Route path='/create' element={
           <ProtectedRoute>
        <UserContext>
          <><Sidebar /><Create/></>
        </UserContext>
        </ProtectedRoute>}/>
        <Route path='/Edit/:id' element={
          <ProtectedRoute>
        <UserContext>
          <><Sidebar /><Edit/></>
        </UserContext>
      </ProtectedRoute>}/>

        <Route path='use-Ref' element={<ProtectedRoute><><Sidebar /><UseRef/></></ProtectedRoute>}/>
        <Route path='use-Reducer' element={<ProtectedRoute><><Sidebar /><UseReducer/></></ProtectedRoute>}/>
        <Route path='nested-components' element={<ProtectedRoute><><Sidebar /><Nestedcomponents/></></ProtectedRoute>}>
          <Route path='accounts' element={<Accounts/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='receipts' element={<Receipts/>}/>
          <Route path='staffs' element={<Staffs/>}/>
        </Route>
        <Route path='/' element={<UserContext><Home/></UserContext>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
