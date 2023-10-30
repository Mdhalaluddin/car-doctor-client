import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthCotext/AuthProvider";
import BookingRow from "../BookingsRow/BookingRow";
import Swal from "sweetalert2";
import axios from "axios";



const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBooking] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res =>{
            setBooking(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBooking(data))
    }, [url])
    const handleDelete = id => {
        const proceed = (
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
        )
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                   console.log(data)
                   if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const deleteConfrm = bookings.filter(booking=>booking._id !== id)
                        setBooking(deleteConfrm)
                        }
                   })
        }
    }

    const handleConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then (res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount>0){
                // update state
                const remaining = bookings.filter(booking=> booking._id !== id )
                const updated = bookings.find(booking => booking._id === id)
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBooking(newBookings)

            }
        })
    }
    return (
        <div>
            <h2 className="text-3xl">Booking: {bookings.length}</h2>
            <div className="mx-w-[92%] mx-auto">
                {
                    bookings.map(booking => <BookingRow key={booking._id} handleDelete={handleDelete} handleConfirm={handleConfirm}booking={booking}></BookingRow>)
                }
            </div>
        </div>
    );
};

export default Bookings;