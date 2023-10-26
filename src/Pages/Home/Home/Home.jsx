import PopularProducts from "../../PopularProducts/PopularProducts";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Servises/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;