import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { isLoading, error, data: categoriesData } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            fetch('http://localhost:5000/category').then(res =>
                res.json()
            )
    });

    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[92%] mx-auto my-24'>
            {
                categoriesData.map(category => <div key={category._id} category={category} className="card shadow-xl image-full">
                    <figure><img src={category.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{category.title}</h2>
                        <p>{category.description}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/category/${category._id}`} ><button className="btn btn-primary text-white">View Product</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Categories;