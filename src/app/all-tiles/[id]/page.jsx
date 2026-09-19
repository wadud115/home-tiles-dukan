import React from 'react';
import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from 'next/image';

import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
const TilesDetails = async({params}) => {

    const {id} = await params;

    const res = await fetch ('https://home-tiles-dukan-fvxj.vercel.app/data.json')

    const tiles = await res.json();

    const tile = tiles.find(t => t.id == id)

    console.log(tile)
    return (
               <div className="flex gap-5 bg-base-100 shadow-sm w-2xl mx-auto p-5 my-15    ">


  <div className="w-80 relative">
    <Image className="rounded-xl object-cover" src={tile.image} fill alt={tile.title}
    
    ></Image>
  </div>

  <div className="card-body space-y-4">
    <h2 className="card-title font-bold text-2xl">{tile.title}</h2>
    <p>{tile.description}</p>
    <p><span className='font-semibold'> dimensions</span>  :{tile. dimensions}</p>
    <p><span className='font-semibold'>category:</span> <Button variant="secondary">{tile.category}</Button> </p>



       <div className="flex gap-5">
              <div className="flex items-center gap-2">
                
                <p>{tile.price}</p>
                
                </div>
    
                <Separator orientation="vertical"></Separator>
    
                <div>
                
                <p>{tile. currency}</p>
                
                </div>
          </div>
    


  </div>


</div>
    );
};

export default TilesDetails;