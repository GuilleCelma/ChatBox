
import React from "react"
import {  Link } from "react-router-dom"
import { AppstoreAddOutlined, UsergroupAddOutlined, MessageOutlined  } from "@ant-design/icons"


const Home = () =>{


    return(
        <div>
            <section id="hero">
                <div id="heroText">
                    <h1>A  instant  messagin platform </h1>
                    <p>For people who likes to stay in touch</p>

                    <Link to="/login" id="getStarted">Get Started</Link>
                </div>
                <div id="heroImage">
                    <img src="/chat2.jpg" alt="people chating"/>
                </div>
            </section>
            <section id="intructions">
                <h2>How it works?</h2>

                <img src="/instructions.gif" alt="" />

            </section>  
            <section id="features">
                <h2>Features</h2>
                <div id="cardContainer">
                    <div className="card">

                        <AppstoreAddOutlined style={{ fontSize:"70px" }}/>
                        <h3>Create Rooms</h3>
                        <p>Create many private rooms for diferent porpuse and groups of people.</p> 
                        
                    </div>
                    <div className="card">

                        <UsergroupAddOutlined style={{ fontSize:"70px" }}/>
                        <h3>Add people</h3>
                        <p>Add as many people as you like in your private rooms, the more the better!</p> 

                    </div>
                    <div className="card">

                        <MessageOutlined style={{ fontSize:"70px" }}/>
                        <h3>Message others</h3>
                        <p>Message and send photos to other users in your room in real time.</p> 

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home