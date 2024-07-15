import logo from '../../res/logoUS.png';
import Navbar from '../../components/navbar/Navbar';
export function Home(){
    
    return (
        <>
            <Navbar/>
            <img src={logo} className="App-logo" alt="logo" />
        </>
    )
}