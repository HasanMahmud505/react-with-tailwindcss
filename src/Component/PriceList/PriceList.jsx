import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {

    const [prices, setPrices] = useState([])

    useEffect(() => {
        fetch('Prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])

    return (
        <div className='mx-14'>
            <h2 className='text-5xl text-center text-white bg-purple-400 py-4 mt-4' >Awesome Affordable Price</h2>

            <div className='grid md:grid-cols-3 gap-3'>
                {
                    prices.map(price => <PriceCart
                        key={price.id}
                        price={price}
                    ></PriceCart>)
                }
            </div>
        </div>
    );
};

export default PriceList;