import React from 'react';
import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from 'next/image';



const TilesDetails = async({params}) => {

    const {id} = await params;

    const res = await fetch ('https://home-tiles-dukan-fvxj.vercel.app/data.json')

    const tiles = await res.json();

    const tile = tiles.find(t => t.id == id)

    console.log(tile)
    return (
               <div className="flex gap-10 bg-base-100 shadow-sm w-2xl max-w-3xl h-100 mx-auto p-5 my-15    ">


  <div className="w-80 relative">
    <Image className="rounded-xl object-cover" src={tile.image} fill alt={tile.title}
    
    ></Image>
  </div>

  <div className="card-body space-y-4 flex flex-col justify-center">
    <h2 className="card-title font-bold text-2xl">{tile.title}</h2>
    <p>{tile.description}</p>
    <p><span className='font-semibold'> dimensions</span>  :{tile. dimensions}</p>
    <p><span className='font-semibold'>category:</span> <Button className='text-pink-500' variant="secondary">{tile.category}</Button> </p>
    <p><span className='font-semibold'>material:</span> <Button className='bg-pink-500' variant="primary">{tile.material}</Button> </p>


              <div className="flex items-center gap-2">
                
                <p > <span className='font-bold'>price : </span>{tile.price}$</p>
                
                </div>
    
        
    


  </div>


</div>
    );
};

export default TilesDetails;