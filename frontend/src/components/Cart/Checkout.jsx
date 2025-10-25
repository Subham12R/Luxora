import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PayPalButton from "./PayPalButton";

const cart = {
    products: [
        {
            name: "Product 1",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 19.99,
            image: "https://picsum.photos/150?random=1",
        },
        {
            name: "Product 2",
            size: "M",
            color: "Blue",
            quantity: 1,
            price: 19.99,
            image: "https://picsum.photos/150?random=2",
        },
    ],
    totalPrice: 39.98,
};
const Checkout = () => {
    const navigate = useNavigate();
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
        phone: "",
    });
    const [checkoutId, setCheckoutId] = useState(null);
    const handleCreateCheckout = (e) => {
        e.preventDefault();
        setCheckoutId("checkout_123");
    }

    const handlePaymentSuccess = (details) => {
        toast.success("Payment successful!");
        console.log("Payment details:", details);
        navigate("/order-confirmation");
    }

    const handlePaymentError = () => {
        toast.error("Payment failed!");
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl uppercase mb-6">Checkout</h2>
            <form onSubmit={handleCreateCheckout}>
                <h3 className="text-lg mb-4">Contact Details</h3>
                <div className="mb-4">
                    <label className="block text-gray-500">Email</label>
                    <input type="email" value="user@example.com" className="w-full p-2 border border-gray-300 rounded" disabled />
                </div>
                <h3 className="text-lg mb-4">Delivery</h3>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-500">First Name</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" 
                        value={shippingAddress.firstName} 
                        onChange={(e) => setShippingAddress({
                            ...shippingAddress,
                            firstName: e.target.value
                        })}/>
                    </div>
                    <div>
                        <label className="block text-gray-500">Last Name</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" 
                        value={shippingAddress.lastName} 
                        onChange={(e) => setShippingAddress({
                            ...shippingAddress,
                            lastName: e.target.value
                        })}/>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-500">Address</label>
                    <input type="text"  
                    value={shippingAddress.address}
                    onChange={(e) => setShippingAddress({
                        ...shippingAddress,
                        address: e.target.value
                    })}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                    />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                                  <div>
                        <label className="block text-gray-500">City</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" 
                        value={shippingAddress.city} 
                        onChange={(e) => setShippingAddress({
                            ...shippingAddress,
                            city: e.target.value
                        })}/>
                    </div>
                    <div>
                        <label className="block text-gray-500">Postal Code</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" 
                        value={shippingAddress.postalCode} 
                        onChange={(e) => setShippingAddress({
                            ...shippingAddress,
                            postalCode: e.target.value
                        })}/>
                    </div>
                </div>
                                    <div className="mb-4">
                    <label className="block text-gray-500">Country</label>
                    <input type="text"  
                    value={shippingAddress.country}
                    onChange={(e) => setShippingAddress({
                        ...shippingAddress,
                        country: e.target.value
                    })}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-500">Phone No.</label>
                    <input type="text"  
                    value={shippingAddress.phone}
                    onChange={(e) => setShippingAddress({
                        ...shippingAddress,
                        phone: e.target.value
                    })}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                    />
                </div>
                <div className="mt-6">
                    {!checkoutId ? (
                        <button type="submit" className="w-full bg-black rounded text-white py-3 hover:bg-gray-800">Continue to payment</button>
                    ) : (
                        <div>
                             <h3 className="text-lg mb-4">Pay with Paypal</h3>
                             <PayPalButton 
                             amount={cart.totalPrice} 
                             onSuccess={handlePaymentSuccess}
                             onError={handlePaymentError}
                             />
                        </div>
                       
                        
                    )}
                </div>
            </form>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg mb-4">Order Summary</h3>
            <div className="border-t py-4 mb-4">
                {cart.products.map((product, index) => (
                    <div key={index} className="flex items-start justify-between py-2 border-b">
                        <div className="flex items-start">
                            <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4 rounded" />
                            <div>
                                <h3 className="text-md">{product.name}</h3>
                                <p className="text-sm text-gray-500">Size: {product.size}</p>
                                <p className="text-sm text-gray-500">Color: {product.color}</p>
                            </div>
                        </div>
                            <p className="text-xl">${product.price?.toLocaleString()}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center text-lg mb-4">
                <p>Subtotal:</p>
                <p>${cart.totalPrice?.toLocaleString()}</p>
            </div>
            <div className="flex items-center text-lg justify-between">
                <p>Shipping</p>
                <p>Free</p>
            </div>
            <div className="flex items-center text-lg justify-between mt-4 border-t pt-4">
                <p>Total Price:</p>
                <p>${cart.totalPrice?.toLocaleString()}</p>
            </div>
        </div>
    </div>

  )
}

export default Checkout