// import './signup.css';
import '../Login/login.css'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function Signup() {
    const navigate=useNavigate();
    function goToLogin(){
      navigate('/login');
    }
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });
    const clearForm = () => {
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        });
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            password: formData.password
        };

        try {
            const response = await axios.post('https://smart-utility-services.adarshrajpathak.dev:8585/signup', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            e.target.reset();
            if (response.data.customer) {
                alert('Signup successful');
                goToLogin();
            } else {
                alert('Signup failed');
            }
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
            alert('An error occurred during signup');
        }
        clearForm();
    };
    return (
        <div className='form-container'>
            <form className="form" onSubmit={handleSubmit}>
            <div className="flex-column">
                    <label>First Name</label>
                </div>
                <div className="inputForm">
                    <input type="text" name="first_name" className="input" placeholder="Enter your First Name" onChange={handleChange} required/>
                </div>
                
                <div className="flex-column">
                    <label>Last Name</label>
                </div>
                <div className="inputForm">
                    <input type="text" name="last_name" className="input" placeholder="Enter your Last Name" onChange={handleChange}/>
                </div>
            
                <div className="flex-column">
                    <label>Email</label>
                </div>
                <div className="inputForm">
                    <input type="text" name="email" className="input" placeholder="Enter your Email" onChange={handleChange} required/>
                </div>

                <div className="flex-column">
                    <label>Password</label>
                </div>
                <div className="inputForm">
                    <input type="password" name="password" className="input" placeholder="Enter your Password" onChange={handleChange} required/>
                </div>

                <button className="button-submit">Sign Up</button>
            </form>
            <p className="p">Already have an account? 
                <NavLink to="/login" className="nav-link">
                    <span className="span">Log In</span>
                </NavLink>
            </p>
        </div>
    );
}
