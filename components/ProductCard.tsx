import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="bg-white border border-zinc-100 rounded-sm overflow-hidden transition-all duration-500 ease-out transform group-hover:scale-[1.05] group-hover:shadow-2xl">
        <div className="aspect-[4/5] overflow-hidden bg-zinc-50">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          />
        </div>
        
        <div className="p-6 bg-white">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-bold">{product.category}</p>
              <h3 className="text-lg font-bold tracking-tight text-black">{product.name}</h3>
            </div>
            <p className="font-bold text-sm text-black">₹{product.price.toLocaleString()}</p>
          </div>
          <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed font-light">
            {product.description}
          </p>
          
          <button className="mt-6 w-full py-3 border border-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
