import { useLoaderData } from "react-router-dom";
import checkoutIng from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthCotext/AuthProvider";


const Checkout = () => {
    const { user } = useContext(AuthContext)
    const services = useLoaderData();
    console.log(services);
    const { title } = services;
    const handleCheckoutBtn = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const newCheckout ={name, date, email, phone, message}
        console.log(newCheckout);


    }
    return (
        <div className="mx-auto">
            <img src={checkoutIng} alt="" className="w-full" />
            <h2 className="text-2xl font-bold text-center">Book Service: {title} </h2>
            <form onSubmit={handleCheckoutBtn} className="card-body bg-slate-400 rounded-lg mx-auto w-full">
                <div className="w-3/5 mx-auto">
                    <div className="flex gap-4 w-full">
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user.displayName} placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Data</span>
                            </label>
                            <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-4 w-full">
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/3">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user.email} placeholder="Your Email" className="input input-bordered" required />
                        </div>
                    </div>
                </div>
                <div>
                    <textarea placeholder="Your Message" name="message" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;