

const PopularProductsCarts = ({user}) => {
    const {img, price, product_name } = user;
    console.log(user);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-4/5 h-4/5" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_name}</h2>
                <p className="text-xl text-red-500">Price: ${price}</p>
            </div>
        </div>
    );
};

export default PopularProductsCarts;