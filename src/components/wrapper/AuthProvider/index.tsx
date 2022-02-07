import { createContext, useState, useContext, FC, useEffect } from 'react';
import { auth } from '../../../firebase'
import {User} from '../../../type'
import {AuthContext,useAuthContext} from "../../../context"

type Value = {
    user: User
}

const AuthProvider:FC = ({children}) => {

    const [user,setUser] = useState<any>(null)
    const value = {
        user
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((usr) => {
            setUser(usr)
        })
        return () => {
            unsubscribe()
        }
    },[])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;