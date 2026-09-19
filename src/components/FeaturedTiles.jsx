import TilesCard from '@/components/TilesCard';
import React from 'react';

const FeaturedTiles = async() => {

    const res = await fetch('https://home-tiles-dukan-fvxj.vercel.app/data.json');

    const tiles = await res.json() ;



    console.log(tiles)


    const topTiles = tiles.slice(0,4)
    return (
        <div>

              <h2 className='font-bold my-15 text-2xl'>FeaturedTiles</h2>

            <div className='grid grid-cols-4 gap-3 my-6'>

              
                {
                    topTiles.map(product => <TilesCard key={product.id} product={product}></TilesCard>)
                }

            </div>


            
        </div>
    );
};

export default FeaturedTiles;