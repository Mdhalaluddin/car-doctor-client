import { RiArrowRightLine } from 'react-icons/ri';

const ServiceCart = ({ service }) => {
    const { img, price, title } = service;
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
                        <button className=" text-red-500 text-2xl"><RiArrowRightLine></RiArrowRightLine></button>
                    </div>
            </div>
        </div>
    );
};

export default ServiceCart;