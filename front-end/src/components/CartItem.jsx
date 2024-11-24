import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/Card";

const CartItem = ({ data, products = [] }) => {
  // Safely handle data destructuring
  const productId = data?.productId;
  const quantity = data?.quantity;
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();

  // Debugging
  console.log("Products:", products);
  console.log("Data:", data);

  useEffect(() => {
    // Check if products is a valid array
    if (Array.isArray(products)) {
      const findDetail = products.find((product) => String(product.id) === String(productId));
      setDetail(findDetail || {});
    }
  }, [productId, products]);

  // Safe return if data is missing
  if (!data) {
    return <p className="text-red-500">Error: Cart data is missing.</p>;
  }

  // Show loading if products are not available
  if (!Array.isArray(products) || products.length === 0) {
    return <p>Loading products...</p>;
  }

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(
        changeQuantity({
          productId,
          quantity: quantity - 1,
        })
      );
    }
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="bg-[#c73659] text-[#eeeeee] rounded-lg shadow-lg p-4 flex flex-col sm:flex-row sm:items-center gap-4">
      {detail?.name ? (
        <>
          <img
            src={detail.image}
            alt={detail.name}
            className="w-24 h-24 object-cover rounded-md border-2 border-[#a91d3a]"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold">{detail.name}</h3>
            <p className="mt-2 text-sm font-semibold">{`LKR ${detail.price * quantity}`}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="bg-[#a91d3a] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#911733] transition duration-200"
              onClick={handleMinusQuantity}
            >
              -
            </button>
            <span className="font-semibold text-lg">{quantity}</span>
            <button
              className="bg-[#a91d3a] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#911733] transition duration-200"
              onClick={handlePlusQuantity}
            >
              +
            </button>
          </div>
        </>
      ) : (
        <p className="text-red-500 font-medium">Product not found.</p>
      )}
    </div>
  );
};

CartItem.defaultProps = {
  products: [],
};

export default CartItem;
