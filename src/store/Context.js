import { createContext, useState } from "react";

export const FirebaseContext=createContext(null)
export const Justvalue=createContext(null)
export const AuthContext=createContext(null)
export let c=45;

export default function Context({children}){
    const [user, setUser] = useState('')

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>

    )
}