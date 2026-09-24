import React from "react";
import { Link } from "react-router-dom";

function Women({ products = [] }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <span className="text-accent text-sm">Womenswear</span>
      <h1 className="font-display text-3xl mt-1 mb-8 text-ink">Women's Collection</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link to={`/women/${item.id}`} key={item.id} className="rounded-lg border border-black/10 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all overflow-hidden block">
            <div className="aspect-[4/5] bg-[#f4f2ee]">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <span className="text-xs text-ink/50 bg-[#f4f2ee] px-2 py-0.5 rounded">{item.category}</span>
              <h3 className="mt-2 font-medium text-ink">{item.name}</h3>
              <p className="mt-1 font-semibold text-accent">Rs. {item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Women;