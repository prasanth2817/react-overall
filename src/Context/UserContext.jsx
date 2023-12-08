import React,{useState} from 'react'
export const UserDataContext= React.createContext(null)
function UserContext({children}) {
const URL_MK='https://65709b8409586eff6641b2e4.mockapi.io/whitenotes/personalnotes'
  return <UserDataContext.Provider value={{URL_MK}}>
    {children}
    </UserDataContext.Provider>
}

export default UserContext