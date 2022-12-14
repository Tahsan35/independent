import { useEffect, useState } from 'react';
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'> Our Services</h2>
        <div className="row">
        {
            services.map(service => <Service
                key={service.id}
                service={service}
            >
            </Service>)
        }
        </div>
        </div>
    );
};

export default Services;