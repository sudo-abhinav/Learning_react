import  {useState} from 'react'

import userContext from './UserContext'



const UserContextProvider = ({children})=>{
    const [User , setUser] = useState(null)
    return(
        <userContext.Provider value={{User , setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider