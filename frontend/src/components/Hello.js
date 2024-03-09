import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Hello() {
    const location = useLocation();
    const username = location.state.username;
    const Role = location.state.Role;
    return (
        <div>
            <center><h1>Welcome {username}</h1></center>
            <center><h2>You are a { Role }</h2></center>
        </div>
    )
}