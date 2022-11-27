import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    // const [data, setData] = useState({})
    // const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const { signIn, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation(); 

    const from = location.state?.from?.pathname || '/';

    // fetch(`http://localhost:5000/users?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(userData => setData(userData))

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                getUserToken(user.email);
                // console.log(user);
                toast.success('User Logged In Successfully.');
                navigate(from, { replace: true });
                // navigate(from, {replace: true});
            })
            .catch(error => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage);
            })
    };

    const hangleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                getUserToken(user.email);
                // console.log(user);
                    saveUserToDb(user?.displayName, user?.email, user?.phone, user?.photoURL, 'buyer')
                // navigate(from, { replace: true });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // setError(errorMessage);
            });
    };

    const saveUserToDb = (name, email, phone, img, role) => {
        const user = {
            name,
            email,
            phone,
            img,
            role
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                navigate(from, { replace: true });
            })
    };

    const getUserToken = email =>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
            }
        })
    }

    return (
        <div>
            <div className='lg:flex my-6 lg:my-10 items-center w-[92%] mx-auto'>
                <div>
                    <img className='w-[100%] rounded-xl' src="https://thumbs.dreamstime.com/b/electronics-store-sale-cartoon-vector-illustration-affordable-prices-modern-gadgets-special-offer-discount-cameras-happy-145443820.jpg" alt="" />
                </div>
                <div className='lg:w-[50%]'>
                    <div className="px-4 lg:px-8 py-6 lg:mx-4 mt-4 text-left bg-[#FFD068] rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-center">Signin</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mt-4">
                                <div className="mt-4">
                                    <p className='text-center text-red-600'></p>
                                    <label className="block" htmlFor="email">Email</label>
                                    <input required type="email" {...register("email", { required: true })} placeholder="Email"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="mt-4">
                                    <label name='password' className="block">Password</label>
                                    <input required type="password" {...register("password", { required: true })} placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>

                                <div className="flex">
                                    <button className="w-full my-4 text-white btn btn-sm btn-primary p-1">Log In</button>
                                </div>
                                {/* <div >
                                <label htmlFor="my-modal-3" className="cursor-pointer text-blue-600">forgot password?</label>
                            </div> */}
                                <div className="mt-1 text-grey-dark mb-4">
                                    Don't have an account?
                                    <Link to='/signUp' className="text-blue-600 hover:underline" href="#">
                                        SignUp
                                    </Link>
                                </div>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={hangleGoogleLogin} className='flex items-center btn btn-outline btn-secondary btn-sm w-full my-2'><FaGoogle /> <p className='ml-2'>Google Signin</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;