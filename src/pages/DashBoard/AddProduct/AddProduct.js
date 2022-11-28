import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/dashboard/myProduct')
                toast.success('product added successfully')
            })
    };

    //load all category data
    const { isLoading, error, data: categories } = useQuery({
        queryKey: ['category'],
        queryFn: () =>
            fetch('http://localhost:5000/category').then(res =>
                res.json()
            )
    })

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;
    // console.log(categories[0]);

    const date = new Date();
    return (
        <div>
            <form className='w-[80%] mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center my-4 text-2xl font-bold'>Add Your Product</h1>
                <div className="mt-4">
                    <div className="mt-4">
                        <p className='text-center text-red-600'></p>
                        <label className="block" htmlFor="name">Product Name</label>
                        <input required type="text" {...register("name", { required: true })} placeholder="Product Name"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mt-4">
                        <p className='text-center text-red-600'></p>
                        <label className="block" htmlFor="price">Original Price</label>
                        <input required type="text" {...register("originalPrice", { required: true })} placeholder="Product Original Price"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mt-4">
                        <p className='text-center text-red-600'></p>
                        <label className="block" htmlFor="price">Resale Price</label>
                        <input required type="text" {...register("resalePrice", { required: true })} placeholder="Product Resale Price"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mt-4">
                        <label className="block">Location</label>
                        <input required type="text" {...register("location", { required: true })} placeholder="Location"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mt-4">
                        <label className="block">Years Of Use</label>
                        <input required type="text" {...register("yearsOfUse", { required: true })} placeholder="Years Of Use"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mt-4">
                        <label className="block">Product Photo Url</label>
                        <input required type="text" {...register("img", { required: true })} placeholder="Img Url"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mt-4">
                        <input value={date} hidden required type="text" {...register("time", { required: true })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>

                    <div className="mt-4">
                        <input value={user?.email} hidden required type="text" {...register("sellerEmail", { required: true })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>

                    <div className="mt-4">
                        <label className="block">Seller Name</label>
                        <input required type="text" {...register("sellerName", { required: true })}
                            placeholder="Seller Name"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mt-4">
                        <label className="block">Seller Phone Number</label>
                        <input required type="text" {...register("phoneNumber", { required: true })}
                            placeholder="Seller Phone Number"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>


                    <div className="mt-4">
                        <label className="block mb-2">Select Product Condition</label>
                        <select {...register("condition")} className="select select-bordered w-full">
                            <option value="excellent" selected>Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                        </select>
                    </div>
                    {/* categoy */}

                    <div className="mt-4">
                        <label className="block mb-2">Select Category</label>
                        <select {...register("category_id")} className="select select-bordered w-full">
                            {
                                categories.map(category => <option category={category} value={category?._id}>{category?.title}</option>)
                            }
                        </select>
                    </div>

                    <div className="flex">
                        <button className="w-full my-4 text-white btn btn-sm btn-primary p-1">Add Product</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;