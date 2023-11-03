import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthCotext/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },error=>{
            console.log('error in interceptors',error.response);
            if(error.response.status ===401 ||error.response.status ===403){
                console.log('logout the user');
            }
            logOut()
            .then(()=>{
                navigate('/login')
            })

        }
        )
    },[logOut, navigate])

   return axiosSecure;
};

export default useAxiosSecure;