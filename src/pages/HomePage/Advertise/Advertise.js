import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertise = () => {
    const { isLoading, error, data: advertises } = useQuery({
        queryKey: ['advertises'],
        queryFn: () =>
            fetch('https://resale-server-blond.vercel.app/advertises').then(res =>
                res.json()
            )
    })

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;


    return (
        <div className='w-[92%] mx-auto mb-16'>
            {   advertises &&
                <h1 className='text-3xl font-bold text-center mb-16'>Featured Products</h1>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                advertises.map(advertise => <div className="card shadow-xl hover:bg-cyan-100">
                    <figure className='w-[100%]'><img className='w-[90%] h-72' src={advertise.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {advertise?.name}
                            <div className="badge badge-secondary">৳{advertise?.resalePrice}</div>
                        </h2>
                        <div>
                            <div>Condition: <div className="badge badge-outline">{advertise?.condition}</div></div>
                            <div>Years Of Use: <div className="badge badge-outline">{advertise?.yearsOfUse}</div></div>
                            <div>Location: <div className="badge badge-outline">{advertise?.location}</div></div>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Advertise;