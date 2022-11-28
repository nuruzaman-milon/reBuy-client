import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';



const Products = () => {
    const [product, setProduct] = useState({});
    const allProducts = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const img = form.img.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        // console.log(name, price, userName, email, phone, location);
        const bookings = {
            name,
            price,
            img,
            userName,
            email,
            phone,
            location
        }
        fetch('https://resale-server-blond.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // console.log(bookings);
                toast.success('Your Item is Booked')
                form.reset();
                setProduct(null);
            })


    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[92%] mx-auto my-16 gap-8'>
            {
                allProducts.map(product => <div key={product._id} product={product} className="card bg-base-100 shadow-xl">
                    <figure><img className='w-[86%] rounded-md' src={product.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {product?.name}
                            <div className="badge badge-secondary">{product.location}</div>
                        </h2>
                        <p>Total Use of Years: <div className="badge badge-primary py-2">{product?.yearsOfUse}</div></p>
                        <p>Original Price: <div className="badge badge-primary py-2">৳{product?.originalPrice}</div></p>
                        <p>Resale Price: <div className="badge badge-primary py-2">৳{product?.resalePrice}</div></p>
                        <p>Seller Name: <div className="badge badge-outline">{product?.sellerName}</div></p>
                        <div className="card-actions justify-end mt-2">
                            <label onClick={() => setProduct(product)} htmlFor="bookModal" className="btn btn-primary btn-sm w-full">Book Now</label>
                        </div>
                    </div>
                </div>)
            }

            {/* modal content data */}
            {
                product && <>
                    <input type="checkbox" id="bookModal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="bookModal" className="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handleSubmit}>
                                <input required name='name' value={product?.name} disabled type="text" className="input input-bordered w-full mb-2" />
                                <input required name='price' value={product?.resalePrice} disabled type="text" className="input input-bordered w-full mb-2" />
                                <input required name='userName' value={user?.displayName} disabled type="text" className="input input-bordered w-full mb-2" />
                                <input required name='email' value={user?.email} disabled type="email" className="input input-bordered w-full mb-2" />
                                <input required name='img' value={product?.img} disabled type="text" className="input input-bordered w-full mb-2 hidden" />
                                <input required name='phone' type="text" placeholder='Enter Phone Number' className="input input-bordered w-full mb-2" />
                                <input required name='location' type="text" placeholder='Enter Your Location' className="input input-bordered w-full mb-2" />
                                <button type='submit' className='btn btn-primary w-full'>Submit</button>
                            </form>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Products;