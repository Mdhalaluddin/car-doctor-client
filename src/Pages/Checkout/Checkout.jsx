import { useLoaderData } from "react-router-dom";
import checkoutIng from '../../assets/images/checkout/checkout.png'


const Checkout = () => {
    const services = useLoaderData();
    console.log(services);
    const { title } = services;
    return (
        <div className="mx-auto">
            <img src={checkoutIng} alt="" className="w-full" />
            <h2>Book Service: {title} </h2>
            <form className="card-body bg-slate-400 rounded-lg mx-auto w-full">
                <div className="flex gap-4">
                    <div className="form-control w-1/3">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/3">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-4">
                <div className="form-control w-1/3">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/3">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;