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
                const response = await axios.get('http://localhost:8585/allservices');
                setAllServices(response.data); // Store the data in state
                console.log(response.data);
            } catch (error) {
                console.error('There was a problem with api call:', error);
            }
        };

        fetchData(); // Call the fetchData function
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="services-container">
            {/* <h1>It's here</h1> */}
            {allServices.map((singleService,idx)=>(
                <ServiceCard 
                    key={idx} 
                    id={singleService.id}
                    name={singleService.name}
                    desc={singleService.desc}
                    picture={singleService.picture}
                />
            ))}
        </div>
    )
}