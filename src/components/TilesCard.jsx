import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@heroui/react";

const TilesCard = ({ product }) => {
  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl p-4">
      <figure className="overflow-hidden rounded-xl">
        <Image
          className="w-full h-64 object-cover rounded-xl"
          src={product.image}
          alt={product.title}
          width={500}
          height={400}
        />
      </figure>

      <div className="card-body px-2 ">
        <h2 className="card-title flex gap-2 font-bold text-xl">
          {product.title}
          <div className="badge badge-secondary p-2">
            {product.material}
          </div>
        </h2>

        <p className="line-clamp-3 text-gray-500">
          {product.description}
        </p>

        <div className="card-actions flex justify-between items-center mt-3">


          <div className="badge badge-outline p-2 font-bold ">

           price ${product.price}
          </div>

          <Link href={`/all-tiles/${product.id}`}>
            <Button variant="outline" className="btn bg-pink-600 text-white rounded-2xl p-2 my-2">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TilesCard;