import { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import { toast } from 'sonner';

const UserManagement = () => {
    const users = [
        {
            _id: 1,
            name: "John Doe",
            email: "l0t4w@example.com",
            role: "Admin",
        },
    ];

        const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'customer', //default role
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ name: '', email: '', password: '', role: 'customer' });
        toast.success('User added successfully!');
    }

    const handleRoleChange = (userId, newRole) => {
        console.log({id: userId, role:newRole});
        toast.success('Role updated successfully!');
    };

    const handleDeleteUser = (userId) => {
        if(window.confirm('Are you sure you want to delete this user?')){
            console.log({id: userId});
            toast.success('User deleted successfully!');
        }else{
            toast.error('User deletion failed!');
        }
    }
  return (
    <div className='max-w-full mx-auto p-2'>
        <h2 className='text-2xl font-bold mb-4'>User Management</h2>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
        <div className='p-6 rounded-lg mb-6 w-full lg:w-[60vh] border-blue-100 border-2'>
            <h3 className='text-lg font-bold mb-4'>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label className="block text-gray-700">Name</label>
                    <input type="text" 
                    name='name' 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder='Enter your name'
                    className='text-gray-500 rounded w-full p-2 border-gray-600 border' />
                </div>
                <div className='mb-6'>
                    <label className="block text-gray-700">Email</label>
                    <input type="email" 
                    placeholder='Enter valid email'
                    name='email' 
                    value={formData.email} 
                    onChange={handleChange} 
                    className='text-gray-500 rounded w-full p-2 border-gray-600 border' />
                </div>
                <div className='mb-6'>
                    <label className="block text-gray-700">Password</label>
                    <input type="password" 
                    name='password' 
                    value={formData.password} 
                    placeholder='Enter a secure password'
                    onChange={handleChange} 
                    className='text-gray-600 rounded w-full p-2 border-gray-600 border' />
                </div>
                <div className='mb-6'>
                    <label className="block text-gray-700">Role</label>
                    <select name="role" value={formData.role} onChange={handleChange} className='text-gray-600 rounded w-full p-2 border-gray-600 border'>
                        <option value="customer">Customer</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <button type='submit' className='bg-green-600 rounded w-full py-3 text-white hover:bg-emerald-600 transition-colors duration-300 ease-in cursor-pointer'>Add User</button>
            </form>
        </div>

        <div className='overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='text-left text-gray-500 min-w-full lg:w-[100vh]'>
                <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                    <tr>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Role</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} className='border-b border-gray-200 hover:bg-gray-100'>
                            <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
                                {user.name}
                            </td>
                            <td className='p-4 '>
                                {user.email}
                            </td>
                            <td className='p-4 '>
                                <select value={user.role} onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                    className='p-2 border rounded-xl text-left'>
                                        <option value="customer">Customer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                            </td>
                            <td className='p-4 '>
                                <button onClick={() => handleDeleteUser(user._id)} className='bg-red-500 text-white p-2 rounded-xl  hover:ring-4 hover:ring-red-200 transition-all gap-2 text-center flex items-center '><FaTrash size={16} /> Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}

export default UserManagement