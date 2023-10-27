import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const services = useLoaderData();
    const {title} = services;
    return (
        <div>
            <h2>Book Service: {title} </h2>
        </div>
    );
};

export default Checkout;