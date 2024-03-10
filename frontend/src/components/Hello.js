import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Hello() {
    const location = useLocation();
    var username = "";
    var Role = ""; 
    try {
        username = location.state.username;
        Role = location.state.Role;
    }
    catch{
        username = "Guest";
        Role = "Guest";
    }

return (
        <div className='helloBackground'>
            <center><h1>Welcome {username}</h1></center>
            <center><h2>You are a { Role }</h2></center>
        </div>
    )
}