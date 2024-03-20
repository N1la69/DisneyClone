import React from 'react';
import { productionHouseList } from '.';

const ProductionHouse = () => {
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
      {productionHouseList.map((item) => (
        <div key={item.id} className='border-[2px] border-gray-600 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out
             cursor-pointer relative shadow-xl shadow-black'>
          <video src={item.video} autoPlay loop playsInline className='w-full object-cover absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50' />
          <img src={item.image} alt="img" className='w-full z-[1]' />
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse