
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import {ChatEngine} from "react-chat-engine"
import Auth from "../firebase"

import { useAuth } from "../contexts/AuthContext"
import axios from "axios"



const Chats = ()=>{

    const [loading, setLoading] = useState(true)
    const history = useHistory()
    const {user} = useAuth()
    
    console.log(user)
    const handleLogout = async ()=>{
            await Auth.signOut()

            history.push("/")
    }

    const getFile = async (url) =>{

        const response = await fetch(url)
        const data = await response.blob()

        return new File([data],"userPhoto.jpg", {type: "image/jpeg"})
    }

    useEffect(()=>{
        if(!user){
            history.push("/")

            return
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers:{
                "project-id":"4d4345d7-2d8d-49e7-a40e-a38c5eaabc43",
                "user-name": user.email,
                "user-secret":user.uid
            }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            let formData = new FormData()
            formData.append("email", user.email)
            formData.append("username", user.email)
            formData.append("secret", user.uid)

            getFile(user.photoURL)
            .then((avatar) =>{
                formData.append("avatar", avatar, avatar.name)

                axios.post("https://api.chatengine.io/users", formData, {headers:{"private-key":"7efbbc22-4fba-4719-8772-095a5b5e48f1" }})
                .then(()=> setLoading(false))
                .catch((error)=>console.log(error))
            })
        })

    },[user,history])

    if(!user || loading) return "loading"

    
    return(
        
        <div className="chats-page" >
            <nav className="nav-bar">
                <div className="logo-tab">
                    ChatBox
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div> 
            </nav>
            <div style={{ fontFamily: 'Arial' }}>
            
            <ChatEngine 
                height="91vh"         
                projectID= "4d4345d7-2d8d-49e7-a40e-a38c5eaabc43"
                userName={user.email}
                userSecret={user.uid} 
            />
            </div>
        </div>
    )


}

export default Chats