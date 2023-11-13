import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart/ServiceCart";


const Services = () => {
    const [asc, setAsc] = useState(true)
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [asc])
    return (
        <div>
            <div className="text-center space-y-5">
                <h3 className="text-2xl font-bold text-rose-700">Service</h3>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <button onClick={()=>setAsc(!asc)} className="btn btn-secondary">
                    {asc? 'Price: High to Low' : 'Price: Low to High'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    service.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;