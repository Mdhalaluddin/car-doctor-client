import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthCotext/AuthProvider';

const SingUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSingUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {name, email, password}
        console.log(newUser);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row mr-5">
                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-serif font-bold mt-6">Sing Up
                    </h1>
                    <form onSubmit={handleSingUp} className="card-body  space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <input className="btn btn-primary w-full" type="submit" value="SingUp" />
                        </div>
                    </form>
                    <p className='text-center font-medium my-6'>Already have a accounts <Link to='/login'> <span className='btn-link text-red-500'> Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;