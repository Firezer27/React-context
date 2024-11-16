import { createContext, useState } from "react"


//create a context
const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user,setUser] = useState({name:"john Doe"});

    const updateUser =(newName)=>{
        setUser({name:newName})
    }
  return (
    <UserContext.Provider value={{user,updateUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default {UserContext,UserProvider};