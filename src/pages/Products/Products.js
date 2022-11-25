import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const allProducts = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-[92%] mx-auto my-16 gap-16'>
            {
                allProducts.map(product => <div className="card bg-base-100 shadow-xl">
                    <figure><img className='w-[86%] rounded-md' src={product.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {product.name}
                            <div className="badge badge-secondary">{product.location}</div>
                        </h2>
                        <p>Total Use of Years: <div className="badge badge-primary py-2">{product.yearsOfUse}</div></p>
                        <p>Original Price: <div className="badge badge-primary py-2">৳{product.originalPrice}</div></p>
                        <p>Resale Price: <div className="badge badge-primary py-2">৳{product.resalePrice}</div></p>
                        <p>Seller Name: <div className="badge badge-outline">{product.sellerName}</div></p>
                        <div className="card-actions justify-end mt-2">
                            <button className='btn btn-primary btn-sm w-full'>Book Now</button>

                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Products;