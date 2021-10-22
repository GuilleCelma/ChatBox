import { auth } from "firebase"
import React, {useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import Auth from "../firebase.js"

const AuthContext = React.createContext()


export const useAuth = ()=> useContext(AuthContext)

const AuthProvider = ({children})=>{
    const[loading, setLoading] = useState(true)
    const[user, setUser] = useState(null)
    const history= useHistory()

    useEffect(()=>{
        Auth.onAuthStateChanged((user)=>{
            setUser(user)
            setLoading(false)
            
            if(user)history.push("/chats")
        })

    },[user, history])

    const value = {user}


    return(
        <AuthContext.Provider value={value}>

            {!loading && children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
