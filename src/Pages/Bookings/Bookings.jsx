import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthCotext/AuthProvider";


const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBooking] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=>setBooking(data))
    },[url])
    return (
        <div>
            <h2 className="text-3xl">Booking: {bookings.length}</h2>
            
        </div>
    );
};

export default Bookings;