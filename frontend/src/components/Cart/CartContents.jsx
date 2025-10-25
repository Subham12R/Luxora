import React from 'react'
import { RiDeleteBin2Line } from 'react-icons/ri';

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-Shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 19.99,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 2,
            name: "Jeans",
            size: "M",
            color: "Blue",
            quantity: 1,
            price: 19.99,
            image: "https://picsum.photos/200?random=2"
        },
    ]; // Placeholder for cart products
  return (
    <div>
        {
            cartProducts.map((product, index) => (
                <div key={index} 
                className='flex items-start justify-between py-4 border-b border-gray-200'>
                    <div className='flex items-start'>
                        <img src={product.image} alt={product.name} className='w-20 h-24 object-cover rounded mr-4' />
                        <div>
                            <h3 className='text-md font-medium'>{product.name}</h3>
                            <p className='text-sm text-gray-500'>size: {product.size}| color: {product.color}</p>
                            <div className='flex items-center mt-2'>
                                <button className='border border-gray-300 rounded px-2 py-1 text-xl font-medium'>-</button>
                                <span className='mx-4'>{product.quantity}</span>
                                <button className='border border-gray-300 rounded px-2 py-1 text-xl font-medium'>+</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-medium'>$ {product.price.toLocaleString()}</p>
                        <button>
                            <RiDeleteBin2Line className='h-6 w-6 mt-2 text-red-500' />
                        </button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CartContents