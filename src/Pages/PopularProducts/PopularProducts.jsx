import { useEffect, useState } from "react";
import PopularProductsCarts from "../PopularProductsCards/PopularProductsCarts";


const PopularProducts = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('carEngines.json')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                console.log(data);
            })
    }, [])

    return (
        <div>
            <div className="text-center my-10 space-y-4">
                <h3 className="text-xl font-serif text-red-400 font-bold">Popular Products</h3>
                <h2 className="text-5xl font-semibold">Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">

                {
                    user.map(user => <PopularProductsCarts key={user._id} user= {user}></PopularProductsCarts>)
                }
            </div>


        </div>
    );
};

export default PopularProducts;