import TilesCard from '@/components/TilesCard';
import React from 'react';

const AllTiles = async() => {

    const res = await fetch('https://home-tiles-dukan-fvxj.vercel.app/data.json');

    const tiles = await res.json() ;

    console.log(tiles)
    return (
        <div>

            <div className='grid grid-cols-3 gap-3'>
                {
                    tiles.map(product => <TilesCard key={product.id} product={product}></TilesCard>)
                }

            </div>


            
        </div>
    );
};

export default AllTiles;