import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import './allservices.css';

export default function Allservices(){
    //state
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
            console.log("function is here");
            try {
                const response = await axios.get('http://15.207.179.46:8585/utilities');
                setAllServices(response.data); // Store the data in state
                console.log(response.data);
            } catch (error) {
                console.error('There was a problem with api call:', error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array means this effect runs once on mount
    async function selectorHandler(tos){
        const apiCallResponse=await axios.get(`http://15.207.179.46:8585/utilities?typeofservice=${tos}`);
        setAllServices(apiCallResponse.data);
        console.log(apiCallResponse.data);
    }

    return (
        <>
        <div className="hero">
            <label for="typeofservice">Choose a Service Type:</label>
            <select name="typeofservice" id="typeofservice" onChange={(e) => selectorHandler(e.target.value)}>
                <option value="" disabled selected>All Services</option>
                <option value="home">Home Utility Services</option>
                <option value="personal">Personal Utility Services</option>
                <option value="eventsnweddings">Events and Weddings</option>
                <option value="healthnwellness">Health and Wellness</option>
                <option value="lessons">Lessons</option>
                <option value="business">Business</option>
            </select>
        </div>
        <div className="services-container">
            {allServices.map((singleService,idx)=>(
                <ServiceCard 
                    key={idx} 
                    id={singleService.id}
                    name={singleService.name}
                    desc={singleService.desc}
                    picture={singleService.pictures}
                    price={singleService.price}
                />
            ))}
            {/* <h1>It's here</h1> */}
        </div>
        </>
    )
}