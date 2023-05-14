import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices]= useState([]);
    

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data=> setServices(data))
    },[])
    
    return (
        <div className="mt-6">
            <div className="text-center">
                <p className="font-bold text-orange-500 text-xl">Service</p>
                <h2 className="text-3xl font-bold ">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by 
                    <br /> injected humour, or randomised words which  look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard 
                    key={service._id}    
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;