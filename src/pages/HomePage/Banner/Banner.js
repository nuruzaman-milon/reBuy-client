import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex items-center w-[92%] mx-auto mt-6 mb-9'>
            <div className='lg:w-[50%] mb-6 lg:mb-0 text-center'>
                <h1 className='text-5xl font-extrabold mb-2 line'>Start Your Business from Home With Zero Investment!</h1>
                <p className='text-gray-500 font-semibold'>
                The online biggest marketplace in Bangladesh. Buy and sell everything from second-hand cars to mobile phones, or even find a new home. Find a great deal close to you, or search all of Bangladesh. Do Post, Do Sell, Do Buy. Thanks
                </p>
            </div>
            <div className='lg:w-[50%]'>
                <img className='w-full' src="http://st2.depositphotos.com/1636517/8609/i/450/depositphotos_86097638-Sell.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;