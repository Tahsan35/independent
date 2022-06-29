import React from 'react';
import Service from '../Service/Service';
import useServices from './../hooks/useServices';

const Services = () => {
    const [services] = useServices();
    return (
        <div className='container'>
            <h1 className='text-primary text-center'>Our services </h1>
            <div className='row'>
                {
                    services.map(service => <Service key={service.id}
                        service={service} ></Service> )
                }
            </div>
        </div>
    );
};

export default Services;