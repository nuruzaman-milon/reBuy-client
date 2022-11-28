import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {
    const { isLoading, error, data: users, refetch } = useQuery({
        queryKey: ['users', 'seller'],
        queryFn: () =>
            fetch('http://localhost:5000/users/buyer').then(res =>
                res.json()
            )
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if (data.deletedCount === 1) {
                    toast.success('buyer deleted successfully')
                    refetch();
                }
            })
        }
    }

    return (
        <div>
            {
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, i) => <tr>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user?.img} alt="booking product images" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    {
                                        user?.phone ? <td>{user?.phone}</td> : <td>N/A</td>
                                    }
                                    <td><button onClick={() => handleDelete(user?._id)} className='btn btn-primary btn-sm'>Delete</button> </td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            }
        </div>
    );
};

export default AllBuyer;