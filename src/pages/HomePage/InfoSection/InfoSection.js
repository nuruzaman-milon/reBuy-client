import React from 'react';

const InfoSection = () => {
    const data = [
        {
            id: 1,
            img: 'https://buyomo.com.bd/images/Browse.svg',
            title: 'Browse',
            details: 'Our Top Quality products from the best suppliers Locally & globally.'
        },
        {
            id: 2,
            img: 'https://buyomo.com.bd/images/Share%20And%20Earn.svg',
            title: 'Share and Sell',
            details: 'To your customers on Facebook, Imo, Instagram and your own website. Set the product price by deciding your margin.'
        },
        {
            id: 3,
            img: 'https://buyomo.com.bd/images/Earn.svg',
            title: 'Earn',
            details: 'Earn profit on every order. Get your margin earnings directly in your bank account or B-kash,Rocket,Nogod.'
        },
        {
            id: 4,
            img: 'https://buyomo.com.bd/images/Earn%20Life%20time.svg',
            title: 'Lifetime earnings',
            details: 'You can earn life long by joining our referral program, where you can refer to some specific resellers and get benefited from their earnings.'
        },
    ]
    return (
        <div className='mb-20'>
            <h1 className='text-center text-3xl font-extrabold my-9'>Start Reselling with ReBuy in Four Simple Steps</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[92%] mx-auto'>
                {
                    data.map(singleInfo => <div key={singleInfo.id} singleInfo={singleInfo} className="card bg-base-100 shadow-xl hover:bg-cyan-100">
                        <figure className="px-10 pt-10">
                            <img src={singleInfo.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">{singleInfo.title}</h2>
                            <p>{singleInfo.details}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default InfoSection;