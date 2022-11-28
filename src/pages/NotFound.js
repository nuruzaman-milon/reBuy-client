import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='h-[100vh] relative'>
            <div className='absolute top-[100px] left-[400px]'>
                <h1 className='font-extrabold text-[140px]'>Ooops!</h1>
                <h3 className='font-bold text-3xl mb-2'>404 - Page Not Found</h3>
                <p className='font-semibold mb-2'>The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable.</p>
                <button className='btn btn-primary ml-28 mt-4' onClick={() => { navigate('/') }}>GO TO HOMEPAGE</button>
            </div>
        </div>
    );
};

export default NotFound;