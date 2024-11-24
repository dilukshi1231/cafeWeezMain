import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import { products } from '../products';

const Fooddetail = () => {
  const { slug } = useParams(); // Get the product slug from the URL
  const [detail, setDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // Fetch product details based on the slug
  useEffect(() => {
    const findDetail = products.find((product) => product.slug === slug);
    if (findDetail) {
      setDetail(findDetail);
    } else {
      window.location.href = '/'; // Redirect to home if product is not found
    }
  }, [slug]);

  // Adjust quantity
  const handleMinusQuantity = () => {
    setQuantity((prev) => (prev - 1 < 1 ? 1 : prev - 1));
  };

  const handlePlusQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Add to cart functionality
  const handleAddToCart = () => {
    if (detail) {
      dispatch(addToCart({ productId: detail.id, quantity }));
    }
  };

  // Return loading message if detail is not yet loaded
  if (!detail) {
    return <p className="text-center mt-10 text-xl">Loading product details...</p>;
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">PRODUCT DETAIL</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={detail.image}
            alt={detail.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          {/* Product Name */}
          <h1 className="text-4xl font-bold uppercase">{detail.name}</h1>

          {/* Product Price */}
          <p className="text-3xl font-semibold text-gray-800">
            ${detail.price}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-100 w-10 h-10 rounded-lg text-xl font-bold flex items-center justify-center"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="bg-gray-200 w-10 h-10 rounded-lg text-xl font-bold flex items-center justify-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 w-10 h-10 rounded-lg text-xl font-bold flex items-center justify-center"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="bg-slate-900 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-slate-700 transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          {/* Product Description */}
          <p className="text-gray-700">{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Fooddetail;
