import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const uri = `http://localhost:5000/bookings?email=${user?.email}`;

    const { isLoading, error, data: bookings } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () =>
            fetch(uri).then(res =>
                res.json()
            )
    })

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div>
            {
                bookings.length > 0 ?
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Product Info</th>
                                <th>UserName</th>
                                <th>UserEmail</th>
                                <th>Phone</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bookings.map((booking, i) => <tr>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={booking?.img} alt="booking product images" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{booking?.name}</div>
                                                <div className="text-sm opacity-50">৳{booking?.price}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {booking?.userName}
                                    </td>
                                    <td>{booking?.email}</td>
                                    <td>{booking?.phone}</td>
                                    <td>{booking?.location}</td>
                                    <td><button className='btn btn-primary btn-sm'>Pay</button> </td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
                :
                <h1 className='ml-40 mt-6 text-2xl font-bold'>You have no booking! Please add a booking! </h1>
            }


        </div>
    );
};

export default MyOrder;