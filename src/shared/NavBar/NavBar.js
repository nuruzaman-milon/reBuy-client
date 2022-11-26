import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className=' bg-primary text-white'>
            <div className="navbar w-[92%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-8 mr-1' src="favicon.png" alt="" />ReBuy</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signUp'>SignUp</Link></li>  
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;