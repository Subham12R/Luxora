import React, { useEffect } from 'react'
import {toast} from 'sonner';
import ProductGrid from './ProductGrid';
const ProductDetails = () => {
    const selectedProduct = {
        name: "Classic White T-Shirt",
        price: 29.99,
        originalPrice: 39.99,
        description: "A timeless classic white t-shirt made from 100% organic cotton. Perfect for any casual occasion.",
        brand: "EcoWear",
        material: "100% Organic Cotton",
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Black", "Gray"],
        images: [{
            url: "https://picsum.photos/500/500?random=1",
            altText: "Classic White T-Shirt",
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Classic White T-Shirt",
        },
        ],
    };
    const similarProducts = [
        {
            _id: "1",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylish Jacket",
                },
            ],
        },
        {
            _id: "2",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Stylish Jacket",
                },
            ],
        },
        {
            _id: "3",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Stylish Jacket",
                },
            ],
        },
        {
            _id: "4",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Stylish Jacket",
                },
            ],
        },
    ];
    const [mainImage, setMainImage] = React.useState("");
    const [selectedSize, setSelectedSize] = React.useState("");
    const [selectedColor, setSelectedColor] = React.useState("");
    const [quantity, setQuantity] = React.useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select size and color before adding to cart.", {duration: 1000});
            return;
        }
        setIsButtonDisabled(true);

        setTimeout(() => {
            toast.success("Product added to cart!", {duration: 1000});
            setIsButtonDisabled(false);
        }, 500);
        
    }
    const handleQuantityChange = (action) => {
        if (action === "plus") {
            setQuantity((prev) => prev + 1);
        }
        if (action === "minus" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    }
    useEffect(() => {
        if (selectedProduct?.images?.length > 0 && !mainImage) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct, mainImage]);
  return (
    <div className='p-6'>
        <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
            <div className='flex flex-col md:flex-row'>
                <div className='hidden md:flex flex-col space-y-4 mr-6'>
                    {selectedProduct.images.map((img, index) => (
                        <img onClick={()=> setMainImage(img.url)} key={index} src={img.url} alt={img.altText || `Thumbnail ${index}`} className={`w-20 h-20 object-cover cursor-pointer border rounded ${mainImage === img.url ? "border-black" : "border-gray-300"}`} />
                    ))}
                </div>
                <div className='md:w-1/2'>
                <div className='mb-4'>
                    <img src={mainImage} alt="Main Product"
                    className='w-full h-auto object-cover rounded-lg' />
                </div>
                <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
                    {selectedProduct.images.map((img, index) => (
                        <img onClick={()=> setMainImage(img.url)} key={index} src={img.url} alt={img.altText || `Thumbnail ${index}`} className={`w-20 h-20 object-cover cursor-pointer border rounded ${mainImage === img.url ? "border-black" : "border-gray-300"}`} />
                    ))}
                </div>
                </div>
                <div className='md:w-1/2 md:ml-10'>
                    <h1 className='text-2xl md:text-3xl font-semibold mb-2'>{selectedProduct.name}</h1>
                    <p className='text-lg text-gray-600 mb-1 line-through'>{selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}</p>
                    <p className='text-xl font-bold text-gray-800 mb-2'>$ {selectedProduct.price}</p>
                    <p className='text-gray-600 mb-4'>{selectedProduct.description}</p>
                    <div className='mb-4'>
                        <p className='text-gray-700'>Color:</p>
                        <div className='flex gap-2 mt-2'>
                            {selectedProduct.colors.map((color) => (
                                <button key={color} 
                                onClick={() => setSelectedColor(color)}
                                className={`w-8 h-8 rounded-full border ${selectedColor === color ? 'border-2 border-black p-2' : 'border-gray-300'}`} 
                                style={{ backgroundColor: color.toLowerCase() }}></button>
                            ))}
                        </div>
                    </div>
                        <div className='mb-4'>
                            <p className='text-gray-700 mt-4'>Size:</p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.sizes.map((size) => (
                                    <button key={size}
                                     onClick={() => setSelectedSize(size)}
                                     className={`px-4 py-2 border border-gray-300 rounded hover:bg-gray-200 transition ${selectedSize === size ? 'bg-black text-white' : 'bg-white'}`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='mb-6'>
                            <p className='text-gray-700'>Quantity:</p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button 
                                onClick={() => handleQuantityChange("minus")}
                                className='px-2 py-1 bg-gray-200 rounded text-lg'>-</button>
                                <span className='text-lg'>{quantity}</span>
                                <button
                                onClick={() => handleQuantityChange("plus")}
                                className='px-2 py-1 bg-gray-200 rounded text-lg'>+</button>
                            </div>
                        </div>
                        <button 
                        onClick={handleAddToCart}
                        disabled={isButtonDisabled}
                        className={` text-white w-full mb-4  py-2 px-6 rounded ${isButtonDisabled ? 'bg-gray-700 cursor-not-allowed' : 'bg-black hover:bg-gray-900 transition'}`}>
                         {isButtonDisabled ? 'Adding...' : 'ADD TO CART'}
                        </button>
                       
                       <div className='mt-10 text-gray-700'>
                        <h3 className='text-xl font-bold mb-4'>Characteristics: </h3>
                        <table className='w-full text-left text-sm text-gray-600'>
                            <tbody>
                                <tr>
                                    <td className='py-1'>Brand</td>
                                    <td className='py-1'>{selectedProduct.brand}</td>
                                </tr>
                                <tr>
                                    <td className='py-1'>Material</td>
                                    <td className='py-1'>{selectedProduct.material}</td>
                                </tr>
                            </tbody>
                        </table>
                       </div>
                   
                </div>
            </div>
            <div className='mt-20'>
                <h2 className='text-2xl text-center font-medium mb-4'>
                    You may also like
                </h2>
                <ProductGrid products={similarProducts} />
            </div>
        </div>
    </div>
  )
}

export default ProductDetails