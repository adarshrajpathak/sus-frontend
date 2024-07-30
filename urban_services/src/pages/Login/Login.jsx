import { NavLink } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomerContext } from '../../contexts/CustomerContext';
import { useContext } from 'react';

export default function Login() {
    const navigate=useNavigate();
    function goToHome(){
      navigate('/');
    }
    
    const {setCustomer}=useContext(CustomerContext);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const clearForm = () => {
        setFormData({
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
            email: formData.email,
            password: formData.password
        };

        try {
            const response = await axios.post('https://smart-utility-services.adarshrajpathak.dev:8585/login', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            e.target.reset();
            if (response.data.customer) {
                setCustomer(response.data.customer);
                alert('Login successful');
                goToHome();
            } else {
                alert('Login failed');
            }
            // console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
            alert('An error occurred during Login');
        }
        clearForm();
    };
    return (
        <div className='form-container'>
            <form className="form" onSubmit={handleSubmit}>
                <div className="flex-column">
                    <label>Email</label>
                </div>
                <div className="inputForm">
                    <input type="text" className="input" placeholder="Enter your Email" name="email" onChange={handleChange}/>
                </div>

                <div className="flex-column">
                    <label>Password</label>
                </div>
                <div className="inputForm">
                    <input type="password" className="input" placeholder="Enter your Password" name="password" onChange={handleChange}/>
                </div>

                <div className="flex-row">
                    {/* <span className="span">Forgot password?</span> */}
                </div>
                <button className="button-submit">Sign In</button>
            </form>
            <p className="p">Don't have an account? 
                <NavLink to="/signup" className="nav-link">
                    <span className="span">Sign Up</span>
                </NavLink>
            </p>
        </div>
    );
}
