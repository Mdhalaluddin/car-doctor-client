import aboutImg1 from '../../../assets/images/about_us/parts.jpg'
import aboutImg2 from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                <img src={aboutImg2} className="lg:w-3/4 rounded-lg shadow-2xl" />
                <img src={aboutImg1} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white" />
                </div>
                <div className="w-1/2 space-y-5 p-4">
                    <h3 className="text-3xl font-bold text-orange-500 font-serif">About Us</h3>
                    <h1 className="text-5xl font-bold p-2">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-[#ef4928] text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;