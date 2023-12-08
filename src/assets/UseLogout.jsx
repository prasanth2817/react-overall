import React from 'react'
import { useNavigate } from 'react-router-dom'

function UseLogout() {
    let Navigate= useNavigate()
  return ()=>{
    sessionStorage.clear()
    Navigate('/')
  }
}

export default UseLogout