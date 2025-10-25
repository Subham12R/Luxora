import {useState, useEffect, useRef } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';
const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidearOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidearOpen);
    }

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    }
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside); 
      }
      
    }, []);
    useEffect(() => {
        setTimeout(() => {
        const fetchedProducts = [
            {
                _id: "1",
                name: "Stylish Jacket",
                price: 120,
                images: [
                    {
                        url: "https://picsum.photos/500/500?random=12",
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
                        url: "https://picsum.photos/500/500?random=11",
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
                        url: "https://picsum.photos/500/500?random=10",
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
                        url: "https://picsum.photos/500/500?random=9",
                        altText: "Stylish Jacket",
                    },
                ],
            },
                    {
                _id: "5",
                name: "Stylish Jacket",
                price: 120,
                images: [
                    {
                        url: "https://picsum.photos/500/500?random=5",
                        altText: "Stylish Jacket",
                    },
                ],
            },
            {
                _id: "6",
                name: "Stylish Jacket",
                price: 120,
                images: [
                    {
                        url: "https://picsum.photos/500/500?random=6",
                        altText: "Stylish Jacket",
                    },
                ],
            },
            {
                _id: "7",
                name: "Stylish Jacket",
                price: 120,
                images: [
                    {
                        url: "https://picsum.photos/500/500?random=7",
                        altText: "Stylish Jacket",
                    },
                ],
            },
            {
                _id: "8",
                name: "Stylish Jacket",
                price: 120,
                images: [
                    {
                        url: "https://picsum.photos/500/500?random=8",
                        altText: "Stylish Jacket",
                    },
                ],
            },
        ];
        setProducts(fetchedProducts);
        }, 1000);
    }, []);
  return (
    <div className='flex flex-col lg:flex-row'>
        {/* Mobile Filter */}
        <button 
        onClick={toggleSidebar}
        className='lg:hidden border p-2 flex justify-center items-center'>
            <FaFilter className='mr-2'/> Filters
        </button>

        <div ref={sidebarRef} className={`${isSidearOpen ? "traslate-x-0" : "-translate-x-full"} fixed inset-y-0
        left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
            <FilterSidebar />
        </div>
        <div className='flex-grow p-4'>
            <h2 className='text-2xl uppercase mb-4'>All Collection</h2>

            {/* Sort Options */}
            <SortOptions />

            {/* Product Grid */}
            <ProductGrid products={products} />
        </div>
    </div>
  )
}

export default CollectionPage