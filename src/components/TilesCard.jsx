import Image from "next/image";
import Link from "next/link";
import React from "react";

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

      <div className="card-body px-2">
        <h2 className="card-title">
          {product.title}
          <div className="badge badge-secondary">
            {product.material}
          </div>
        </h2>

        <p className="line-clamp-3 text-gray-500">
          {product.description}
        </p>

        <div className="card-actions justify-between items-center mt-3">
          <div className="badge badge-outline">
            ${product.price}
          </div>

          <Link href={`/all-tiles/${product.id}`}>
            <button className="btn bg-pink-600 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TilesCard;