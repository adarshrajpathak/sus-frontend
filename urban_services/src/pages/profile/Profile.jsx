import React, { useContext, useState } from "react";
import { CustomerContext } from "../../contexts/CustomerContext";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./profile.css";
import LogoutIcon from '@mui/icons-material/Logout';

function Profile() {
  const { customer,setCustomer } = useContext(CustomerContext);
  const [showPassword, setShowPassword] = useState(false);

  if (!customer) {
    return <div>Please log in to see your profile.</div>;
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function logoutProfile(){
    setCustomer(null);
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <PersonIcon style={{ fontSize: 100, marginBottom:"-35px" }} />
        <h1>Profile</h1>
        <button className="boton-elegante" onClick={logoutProfile}><LogoutIcon/> Logout</button>
      </div>
      <div className="profile-details">
        <div className="full-name">
          <div className="profile-field">
            <label>First Name</label>
            <input type="text" value={customer.first_name} readOnly />
          </div>
          <div className="profile-field">
            <label>Last Name</label>
            <input type="text" value={customer.last_name} readOnly />
          </div>
        </div>
        <div className="profile-field">
          <label>Email</label>
          <input type="email" value={customer.email} readOnly />
        </div>
        <div className="profile-field">
          <label>Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              value={customer.password}
              readOnly
            />
            <button onClick={togglePasswordVisibility} className="icon-button">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
