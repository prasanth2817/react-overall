import React,{useState} from 'react'
export const UserDataContext= React.createContext(null)
function UserContext({children}) {
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
  return <UserDataContext.Provider value={{data,setData}}>
    {children}
    </UserDataContext.Provider>
}

export default UserContext