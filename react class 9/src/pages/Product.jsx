import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function Product({ products = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-2xl text-ink">Product not found</h2>
        <Link to="/" className="text-accent mt-4 inline-block">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <button onClick={() => navigate(-1)} className="text-sm text-ink/60 hover:text-ink mb-6">&larr; Back</button>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#f4f2ee]">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="text-xs text-ink/50 bg-[#f4f2ee] px-2 py-0.5 rounded">{product.category}</span>
          <h1 className="font-display text-3xl mt-3 text-ink">{product.name}</h1>
          <p className="mt-3 text-2xl font-semibold text-accent">Rs. {product.price}</p>
          <p className="mt-6 text-ink/60 max-w-md">
            A wardrobe staple, made from breathable fabric and finished for everyday wear.
          </p>
          <button className="mt-8 px-8 py-3 rounded-md bg-ink text-white text-sm hover:bg-accent-dark transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;