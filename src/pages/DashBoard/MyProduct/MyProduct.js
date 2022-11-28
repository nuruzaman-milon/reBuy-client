import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProduct = () => {
    // const [disabled, setDisabled] = useState(false)
    const { user } = useContext(AuthContext);
    const uri = `http://localhost:5000/products?email=${user?.email}`;

    const { isLoading, error, data: products } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () =>
            {
                const res = await fetch(uri, {
                    headers:{
                        authorization:`bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            } 
    })

    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if (data.deletedCount === 1) {
                    toast.success('product deleted successfully')
                }
            })
        }
    }

    const handleAdvertise = advertise => {

        const proceed = window.confirm('Are you sure you want to advertise?');
        if (proceed) {
            fetch('http://localhost:5000/advertises', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertise)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // setDisabled(true);
                    toast.success('advertise added successfully');
                }
            })
        }
    };


    return (
        <div>
            {
                products.length > 0 ?
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Product Info</th>
                                <th>Seller Phone</th>
                                <th>Seller Location</th>
                                <th>Status</th>
                                <th>Advertise</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products.map((product, i) => <tr>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product?.img} alt="booking product images" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product?.name}</div>
                                                <div className="text-sm opacity-50">৳{product?.resalePrice}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product?.phoneNumber}</td>
                                    <td>{product?.location}</td>
                                    <td>unsold</td>
                                    <td><button onClick={()=>handleAdvertise(product)} className='btn btn-primary btn-sm'>Advertise</button></td>
                                    <td><button onClick={()=>handleDelete(product?._id)} className='btn btn-primary btn-sm'>Delete</button> </td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
                :
                <h1 className='ml-40 mt-6 text-2xl font-bold'>You have no booking! Please add a booking! </h1>
            }
        </div>
    );
};

export default MyProduct;