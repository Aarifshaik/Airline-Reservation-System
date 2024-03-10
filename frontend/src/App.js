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
import About from './components/About';
import Hello from './components/Hello';
import AddFlight from './components/AddFlight';

function App({Role='Admin'}) {
  const userRole = Role;
  const isLoggedIn = false;
  if(Role!=='Guest'){
    const isLoggedIn = true;
  }
  console.log(userRole);
  let header;
  if (userRole === 'Admin') {
    header = <Header />;
  } else if (userRole === 'Customer') {
    header = <MuiBar isLoggedIn={isLoggedIn}/>;
  } else {
    header = <MuiBar />;
  }

  return <React.Fragment>
    <header>
      {header}
    </header>
    <main>
      <Routes>
        <Route path="/home" element={<Home />} exact/>
        <Route path="/signup" element={<Signup />} exact/>
        <Route path="/" element={<Login />} exact/> 
        <Route path="/login" element={<Login />} exact/>
        <Route path="/flights" element={<Home />} exact/>
        <Route path="/add_flight" element={<AddFlight />} exact/>
        {/* <Route path="/appointment" element={<Appointment />} exact/> */}
        {/* <Route path="/counsellor" element={<Counsellor />} exact/> */}
        {/* <Route path="/visitor" element={<Visitor />} exact/> */}
        {/* <Route path="/contactus" element={<ContactUs />} exact/> */}
        
        {/* <Route path="/about" element={<About />} exact/> */}
        <Route path="/fetchregistrations" element={<FetchRegistration />} exact/>
        <Route path="/hello" element={<Hello />} exact/>  
        <Route path="/about" element={<About />} exact/>

      </Routes>
    </main>
    </React.Fragment>
}

export default App;
