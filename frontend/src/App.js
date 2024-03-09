import './App.css';
import React from 'react';
import Header from './components/Header';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
// import Counsellor from './components/Counsellor';
// import Visitor from './components/Visitor';
import Login from './components/Login';
// import Appointment from './components/Appointment';
// import ContactUs from './components/ContactUs';
// import About from './components/About';
import FetchRegistration from './components/Fetch Registration';
import MuiBar from './components/MuiBar';

import Hello from './components/Hello';

function App() {
  return <React.Fragment>
    <header>
      {/* <Header /> */}
      <MuiBar />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/signup" element={<Signup />} exact/>
        <Route path="/login" element={<Login />} exact/>
        <Route path="/flights" element={<Home />} exact/>
        {/* <Route path="/appointment" element={<Appointment />} exact/> */}
        {/* <Route path="/counsellor" element={<Counsellor />} exact/> */}
        {/* <Route path="/visitor" element={<Visitor />} exact/> */}
        {/* <Route path="/contactus" element={<ContactUs />} exact/> */}
        
        {/* <Route path="/about" element={<About />} exact/> */}
        <Route path="/fetchregistrations" element={<FetchRegistration />} exact/>
        <Route path="/hello" element={<Hello />} exact/>  

      </Routes>
    </main>
    </React.Fragment>
}

export default App;
