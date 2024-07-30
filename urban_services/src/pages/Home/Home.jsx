import logo from "../../res/logoUS.png";
import "./home.css";
import AllServices from "../../pages/allservices/AllServices";
import Footer from "../../components/footer/Footer";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WalletIcon from '@mui/icons-material/Wallet';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from "react-router-dom";
import { PlaceContext } from "../../contexts/PlaceContext";
import { useContext } from "react";

export function Home() {
  const navigate=useNavigate();
  const {setPlace}=useContext(PlaceContext);
  function goToService(e){
    setPlace(e.target.value);
    navigate('/allservices');
  }
  return (
    <>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <section className="hero-main">
        <div className="hero-main-content">
          <h1>Urban Services</h1>
          <h3>Quality home services, on demand</h3>
          <hr />
          <p>
            Experienced, hand-picked Professionals to serve you at your doorstep
          </p>
          <div className="location-selector">
            <label for="city-select">Where do you need a service?</label>
            <select id="city-select" onChange={(e)=>goToService(e)}>
              <option value="">Select City</option>
              <option value="Pune">Pune</option>
              <option value="Banglore">Banglore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>
        </div>
      </section>

    <section className="services-main">
      <section className="services-main-content">
        <h1>Introducing the ultimate platform <br/>for on demand services</h1>
        <hr />
        <p>
        We help customers book realiable & high quality services for your home on demand. These services are delivered by highly trained professionals at your time and schedule.
        </p>
      </section>
      <section className="grid-container">
        <div className="grid-item">
          <span className="icon bg-1">
            <AutoAwesomeIcon  style={{fontSize:"70px"}}/>
          </span>
          <h3>Quality Assurance</h3>
          <p>
            We use industry grade equipment for the best in class service. We
            pride in our quality of service and you cannot go wrong choosing us.
          </p>
        </div>
        <div className="grid-item">
          <span className="icon bg-2">
            <WalletIcon  style={{fontSize:"70px"}}/>
          </span>
          <h3>Affordable Prices</h3>
          <p>
            We cut hair not wallets. We clean homes not your accounts. We
            believe that living a comfortable life should not break any banks.
          </p>
        </div>
        <div className="grid-item">
          <span className="icon bg-3">
            <HowToRegIcon  style={{fontSize:"70px"}}/>
          </span>
          <h3>Trained Professionals</h3>
          <p>
            Our service personnel go through long training before they are
            approved to do your work. Whether it's cleaning, plumbing,
            maintenance, or grooming, our experts will handle it easily.
          </p>
        </div>
        <div className="grid-item">
          <span className="icon bg-4">
            <CalendarMonthIcon style={{fontSize:"70px"}}/>  
          </span>
          <h3>Schedule Friendly</h3>
          <p>
            We understand that your schedule is important, which is why we help
            you be as flexible as possible. Choose from the day and time you
            feel is the best for you in one click during our checkout.
          </p>
        </div>
      </section>
      <section className="services-main-content">
        <p>With a commitment to quality and customer satisfaction, we ensure that every service is delivered with the highest standards.</p>
        <h1>You could be a part of our journey. Interested?</h1>
      </section>
    </section>
      {/* <AllServices /> */}
      {/* <main className="services-main"></main> */}
      <Footer />
    </>
  );
}
