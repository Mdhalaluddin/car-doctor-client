import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
    const { _id,img, price, title } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body mt-2">
                    <div>
                        <h2 className="card-title text-lg">{title}</h2>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-[#FF3811]  font-semibold'>Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                        <button className=" text-red-500 text-2xl"><RiArrowRightLine></RiArrowRightLine></button>
                        </Link>
                    </div>
            </div>
        </div>
    );
};

export default ServiceCart;