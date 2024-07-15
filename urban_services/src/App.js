import './App.css';
import { SuspenseHome } from './components/suspense/SuspenseHome';
import { Home } from './pages/Home/Home';
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

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
          {/* <Home/> */}
        {isLoading?<SuspenseHome/>:<Home/>}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
