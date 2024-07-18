import './App.css';
import { SuspenseHome } from './components/suspense/SuspenseHome';
import { Home } from './pages/Home/Home';
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllServices from './pages/allservices/AllServices';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isLoading?<SuspenseHome/>:<Home/>} />
            <Route path="allservices" element={<AllServices/>} />
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
