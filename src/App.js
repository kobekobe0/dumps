import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/home/Home'
import { AuthProvider } from './context/authContext'
import PrivateRoute from './components/PrivateRoute'
import Profile from './components/profile/Profile'

function App() {
    return (
        <AuthProvider>
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute exact path="/profile" component={Profile} />
                </Switch>
            </div>
        </AuthProvider>
    )
}

export default App