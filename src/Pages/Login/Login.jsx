import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthCotext/AuthProvider';
import axios from 'axios';

const Login = () => {
    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { email, password }
        console.log(newUser);
        singIn(email, password)
        .then(result => {
            const loginUser = result.user;
            console.log(loginUser);
            const user ={email};
            
        axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
        .then(res =>{ 
            console.log(res.data)
            if(res.data.success){
                navigate(location?.state? location?.state: "/")
            }
        })
    })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row mr-5">
                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold mt-6">Login</h1>
                    <form onSubmit={handleLogin} className="card-body  space-y-4">
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
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center font-medium my-6'>New to Car Doctors <Link to='/signup'> <span className='btn-link text-red-500'> Sign Up</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;