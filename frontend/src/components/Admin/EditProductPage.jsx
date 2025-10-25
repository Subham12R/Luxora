import React, { useState } from 'react'
import { toast } from 'sonner';

const EditProductPage = () => {
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: 0,
        countInStock: 0,
        sku: '',
        category: '',
        brand: '',
        sizes: [],
        color: [],
        collections: "",
        material: "",
        gender: "",
        images: [
            {
                url: "https://picsum.photos/500/500?random=1",
            },
            {
                url: "https://picsum.photos/500/500?random=2",
            },
            {
                url: "https://picsum.photos/500/500?random=3",
            },
            {
                url: "https://picsum.photos/500/500?random=4",
            },

        ],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(productData);
        toast.success('Product updated successfully!');
    }
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
        <h2 className='text-3xl font-bold mb-6'>
            Edit Product
        </h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-6'>
                <label className="block font-semibold mb-2">Product Name</label>
                <input 
                type="text"
                name='name'
                value={productData.name}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-md p-2'
                required
                 />
            </div>


            <div className='mb-6'>
                <label className="block font-semibold mb-2">Description</label>
                <textarea 
                name="description" 
                value={productData.description}
                className='w-full border border-gray-300 rounded-md p-2'
                onChange={handleChange}
                rows={4}
                required
                >

                </textarea>
            </div>

            <div className='mb-6'>
                <label className="block font-semibold mb-2">Price</label>
                <input 
                type="number"
                name='price'
                value={productData.price}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-md p-2'
                required
                 />
            </div>

            <div className='mb-6'>
                <label className="block font-semibold mb-2">Count in Stock</label>
                <input 
                type="number"
                name='countInStock'
                value={productData.countInStock}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-md p-2'
                required
                 />
            </div>
            
            <div className='mb-6'>
                <label className="block font-semibold mb-2">SKU</label>
                <input 
                type="number"
                name='sku'
                value={productData.sku}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-md p-2'
                required
                 />
            </div>

            <div className='mb-6'>
                <label className="block font-semibold mb-2">Sizes (separated by commas)</label>
                <input 
                type="text"
                name='sizes'
                value={productData.sizes.join(', ')}
                onChange={(e) => setProductData({ ...productData, sizes: e.target.value.split(',').map(size => size.trim()) })}
                className='w-full border border-gray-300 rounded-md p-2'
                required
                 />
            </div>

            <div className='mb-6'>
                <label className="block font-semibold mb-2">Colors (separated by commas)</label>
                <input 
                type="text"
                name='colors'
                value={productData.colors.join(', ')}
                onChange={(e) => setProductData({ ...productData, colors: e.target.value.split(',').map(color => color.trim()) })}
                className='w-full border border-gray-300 rounded-md p-2'
                required
                 />
            </div>


            <div className="mb-6">
                <label className='block font-semibold mb-2'>Upload Image</label>
                <input type="file" onChange={handleImageUpload} className='bg-zinc-900 text-white p-2 rounded-md' />
                <div className='flex gap-4 mt-4'>
                    {productData.images.map((image, index) => (
                        <div key={index}>
                        <img src={image.url} alt={image.altText || 'Product Image'} className='w-20 h-20 object-cover rounded shadow-md' />
                        </div>
                    ))}
                </div>
            </div>

            <button type='submit' className='w-full bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-500'>Update Product</button>
        </form>
    </div>
  )
}

export default EditProductPage