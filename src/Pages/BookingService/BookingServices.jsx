import { useContext } from "react";
// import checkoutIng from '../../assets/images/checkout/checkout.png'
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthCotext/AuthProvider";
import Swal from "sweetalert2";


const BookingServices = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    console.log(service);
    const { title, _id, price, img, } = service;
    const handleBookingService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const booking = { customerName: name, img, date, email, price, service: title, service_id: _id}
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'success!',
                    'Service book successfully',
                    'success'
                  )
                  
            }
        })

    }
    return (
        <div className="mx-auto">
            {/* <img src={checkoutIng} alt="" className="w-full" /> */}
            <h2 className="text-2xl font-bold text-center">Book Service: {title} </h2>
            <form onSubmit={handleBookingService} className="card-body bg-slate-400 rounded-lg mx-auto w-full">
                <div className="w-3/5 mx-auto">
                    <div className="flex gap-4 w-full">
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bbookinged" defaultValue={user?.displayName} required />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Data</span>
                            </label>
                            <input type="date" name="date" placeholder="date" className="input input-bbookinged" required />
                        </div>
                    </div>
                    <div className="flex gap-4 w-full">
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Due amount</span>
                            </label>
                            <input type="text" name="price" placeholder="Your Phone" defaultValue={'$'+price} className="input input-bbookinged" required />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bbookinged" required />
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="booking Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookingServices;