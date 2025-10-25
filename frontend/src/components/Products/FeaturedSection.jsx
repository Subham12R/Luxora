import React from 'react'
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2'

const FeaturedSection = () => {
  return (
    <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='flex flex-col items-center'>
                <div className='p-2 rounded-full mb-2'>
                    <HiShoppingBag className='text-3xl' />
                </div>
                <h4 className='tracking-tighter mb-2'>Free International Shipping</h4>
                <p className='tracking-tighter text-gray-600 text-sm'>On all orders over $100</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='p-2 rounded-full mb-2'>
                    <HiArrowPathRoundedSquare className='text-3xl' />
                </div>
                <h4 className='tracking-tighter mb-2'>45 Days Return</h4>
                <p className='tracking-tighter text-gray-600 text-sm'>Money back gurantee</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='p-2 rounded-full mb-2'>
                    <HiOutlineCreditCard className='text-3xl' />
                </div>
                <h4 className='tracking-tighter mb-2'>Secure Payment</h4>
                <p className='tracking-tighter text-gray-600 text-sm'>100% secure payment</p>
            </div>
        </div>
    </section>
  )
}

export default FeaturedSection