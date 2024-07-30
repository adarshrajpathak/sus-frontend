import './App.css';
import { SuspenseHome } from './components/suspense/SuspenseHome';
import { Home } from './pages/Home/Home';
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllServices from './pages/allservices/AllServices';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar/Navbar';
import Booking from './pages/booking/Booking';
import MyBookings from './pages/mybookings/MyBookings';
import { useState } from 'react';
import { CustomerContext } from './contexts/CustomerContext';
import { PlaceContext } from './contexts/PlaceContext';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [customer, setCustomer] = useState(null);
  const [place, setPlace] = useState("Pune");

  const handleLoading = () => {
    setTimeout(()=>{
      setIsLoading(false);
    },2000)
  }
  useEffect(()=>{
    window.addEventListener("load",handleLoading);
    return () => window.removeEventListener("load",handleLoading);
  },[])

  return (
    <div className="App">
      <header className='App-header'>
        {/* //context provider */}
        <CustomerContext.Provider value={{customer, setCustomer}}>
          <PlaceContext.Provider value={{place, setPlace}}>
          <BrowserRouter>
            {isLoading?null:<Navbar/>}
            <Routes>
                <Route path="/" element={isLoading?<SuspenseHome/>:<Home/>} />
                <Route path="booking" element={<Booking />} />
              <Route path="allservices" element={<AllServices/>} />
              <Route path="login" element={<Login/>}/>
              <Route path="signup" element={<Signup/>}/>
              <Route path="profile" element={<Profile />} />
              {/* <Route path="booking" element={<Booking />} /> */}
              <Route path="mybookings" element={<MyBookings />} />
            </Routes>
          </BrowserRouter>
          </PlaceContext.Provider>
        </CustomerContext.Provider>
      </header>
    </div>
  );
}

export default App;
