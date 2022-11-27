import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import NavBar from '../shared/NavBar/NavBar';

const DashBoardLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>  
                </div>
                <div className="drawer-side bg:primary">
                    <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;