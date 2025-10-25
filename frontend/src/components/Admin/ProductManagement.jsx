import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "sonner";


const ProductManagement = () => {
    const products = [
        {
            _id: 1,
            name: "Product 1",
            sku: "SKU123",
            price: 100,
        },
        {
            _id: 2,
            name: "Product 2",
            sku: "SKU456",
            price: 200,
        },

    ];

    const handleDelete = (productId) => {
        if(window.confirm('Are you sure you want to delete this product?')){
            console.log({id: productId});
            toast.success('Product deleted successfully!');
        }
    }
  return (
    <div className="max-w-full mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Product Management</h2>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full text-left text-gray-500">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                    <tr>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Price</th>
                        <th className="py-3 px-4">SKU</th>
                        <th className="py-3 px-4">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product._id} className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                                <td className="py-3 px-4 text-black font-medium">{product.name}</td>
                                <td className="py-3 px-4">${product.price}</td>
                                <td className="py-3 px-4">{product.sku}</td>
                                <td className="py-3 px-4 flex gap-2">
                                    <Link to={`/admin/products/${product._id}/edit`} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-amber-600 mr-2 flex items-center">
                                        <FaEdit className="mr-2" /> Edit
                                    </Link>
                                    <button  onClick={() => handleDelete(product._id)}
                                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 flex items-center">
                                        <FaTrash className="mr-2" /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No products found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductManagement