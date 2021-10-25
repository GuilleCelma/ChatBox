import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import  AuthProvider  from "../contexts/AuthContext"
import Chats from "./chats"
import Login from "./login"
import Home from "./home"



function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
         <AuthProvider> 
          <Switch>
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/chats" component={Chats} /> 
            <Route path="/" component={Home} />
          </Switch>
        </AuthProvider> 
      </Router>
    </div>
  )
}

export default App
