import React from 'react'
import { useNavigate } from 'react-router-dom'

function UseLogout() {
    let Navigate= useNavigate()
  return ()=>{
    Navigate('/Home')
  }
}

export default UseLogout