import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import { useQuery } from '@tanstack/react-query';



const SignUp = () => {
    // const [data, setData] = useState({})
    const { register, handleSubmit } = useForm();
    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    // const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // fetch(`http://localhost:5000/users?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(userData => setData(userData))

    const onSubmit = data => {
        // console.log(data);
        saveUserToDb(data.name, data.email, data.phone, data.img, data.role);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                handleUpdateProfile(data.phone, data.name, data.img)
            })
            .catch(error => console.error(error));
    };

    const handleUpdateProfile = (phone, name, photoURL) => {
        const profile = {
            phoneNumber: phone,
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then((result) => {
                navigate('/')
                toast.success('New User Created Successfully.');
            })
            .catch(e => console.error(e))
    };


    const hangleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                // if (!data) {
                    saveUserToDb(user?.displayName, user?.email, user?.phone, user?.photoURL, 'buyer')
                // }
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // setError(errorMessage);
            });
    };



    // const uri = `http://localhost:5000/bookings?email=${user?.email}`;
    // const { isLoading, data: users } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: () =>
    //         fetch(uri).then(res =>
    //             res.json()
    //         )
    // })
    // if (isLoading) return 'Loading...';

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
                console.log(data);
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
                        <h3 className="text-2xl font-bold text-center">SignUp</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mt-4">
                                <div className="mt-4">
                                    <p className='text-center text-red-600'></p>
                                    <label className="block" htmlFor="name">Name</label>
                                    <input required type="text" {...register("name", { required: true })} placeholder="Name"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
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
                                <div className="mt-4">
                                    <label name='password' className="block">Phone Number</label>
                                    <input required type="text" {...register("phone", { required: true })} placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>
                                <div className="mt-4">
                                    <label name='password' className="block">Photo Url</label>
                                    <input required type="text" {...register("img", { required: true })} placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                </div>

                                <div className="mt-4">
                                    <label name='password' className="block mb-2">Select Type</label>
                                    <select {...register("role")} className="select select-bordered w-full">
                                        <option value="buyer" selected>Buyer</option>
                                        <option value="seller">Seller</option>
                                    </select>
                                </div>

                                <div className="flex">
                                    <button className="w-full my-4 text-white btn btn-sm btn-primary p-1">Sign Up</button>
                                </div>

                                <div className="mt-1 text-grey-dark mb-4">
                                    Don't have an account?
                                    <Link to='/login' className="text-blue-600 hover:underline" href="#">
                                        LogIn
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

export default SignUp;