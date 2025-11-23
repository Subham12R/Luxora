import React from 'react'

const OrderManagement = () => {
  const orders = [
    {
      _id: 112121,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Pending",
    }
  ]

  const handleStatusChange = (orderId, newStatus) => {
    console.log({id: orderId, status: newStatus});
  };
  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-6'>Order Management</h2>
      <div className='overflow-x-auto rounded-lg'>
        <table className='min-w-full text-left text-gray-500'>
          <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
            <tr>
              <th className='py-3 px-6'>Order ID</th>
              <th className='py-3 px-6'>User</th>
              <th className='py-3 px-6'>Total Price</th>
              <th className='py-3 px-6'>Status</th>
              <th className='py-3 px-6'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="5" className='py-12 px-6 text-center text-gray-500'>
                  No orders found
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className='bg-white border-gray-200 border-b hover:bg-gray-50'>
                  <td className='py-4 px-6'>{order._id}</td>
                  <td className='py-4 px-6'>{order.user.name}</td>
                  <td className='py-4 px-6'>${order.totalPrice}</td>
                  <td className='py-4 px-6'>
                    <select 
                      value={order.status} 
                      onChange={(e) => handleStatusChange(order._id, e.target.value)} 
                      className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className='py-4 px-6'>
                    <button 
                      onClick={() => handleStatusChange(order._id, "Delivered")} 
                      className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>  
      </div>
    </div>
  )
}

export default OrderManagement