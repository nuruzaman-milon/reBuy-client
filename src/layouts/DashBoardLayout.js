import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Footer from '../shared/Footer/Footer';
import NavBar from '../shared/NavBar/NavBar';

const DashBoardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    // console.log(user);
    // console.log(user?.role);

    // const { isLoading, error, data:roleUser } = useQuery({
    //     queryKey: ['users',user.email],
    //     queryFn: () =>
    //       fetch(`https://resale-server-blond.vercel.app/users?email=${user.email}`).then(res =>
    //         res.json()
    //       )
    //   })
    
    //   if (isLoading) return 'Loading...'
    
    //   if (error) return 'An error has occurred: ' + error.message

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
                        {
                           isBuyer && 
                            <>
                            <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
                            </>
                        }
                        {
                            isSeller && 
                            <>
                            <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                            <li><Link to='/dashboard/myProduct'>My Product</Link></li>
                            </>
                        }
                        {
                            isAdmin && 
                            <>
                            <li><Link to='/dashboard/allSeller'>All Seller</Link></li>
                            <li><Link to='/dashboard/allBuyer'>All Buyer</Link></li>
                            </>
                        }
                       
                        
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;