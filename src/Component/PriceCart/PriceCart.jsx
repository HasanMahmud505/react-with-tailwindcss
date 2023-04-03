import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded p-4 flex flex-col'>
            <h2 className='text-center'>
            <span className='text-5xl text-purple-700 font-extrabold'>{price.price}</span>
            <span className='text-2xl text-white font-bold'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold text-center mt-6'>{price.name}</h5>
            <p className='font-bold text-white underline text-3xl'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className='w-full mt-auto bg-green-500 py-2 rounded-md text-white font-bold hover:bg-orange-500'>Buy Now</button>
        </div>
    );
};

export default PriceCart;