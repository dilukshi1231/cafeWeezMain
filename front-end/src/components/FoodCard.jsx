import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/Card'; // Ensure the Redux action is correctly imported

const FoodCard = ({ item }) => {
  const carts = useSelector((store) => store.cart?.items || []);
  const dispatch = useDispatch();

  // Destructure item
  const { id, name, price, image } = item;

  if (!id || !name || !price || !image) {
    return (
      <div className="text-red-500 text-center p-4">
        Error: Missing product details.
      </div>
    );
  }

  const handleAddToCart = () => {
    try {
      // Check if the item is already in the cart using the correct key
      if (carts.some((cartItem) => cartItem.productId === id)) {
        alert('This item is already in your cart.');
      } else {
        dispatch(
          addToCart({
            productId: id, // Ensure this matches the field used in the cart
            quantity: 1,
          })
        );
        alert('Item added to cart successfully!');
      }
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      alert('An error occurred while adding the item to the cart.');
    }
  };

  return (
    <div>
      <div className="card bg-[#151515] h-[30vh] sm:h-[60vh] w-40 sm:w-48 md:w-56 shadow-xl hover:shadow-2xl hover:shadow-[#A91D3A] transition-shadow duration-300 p-4 rounded-3xl">
        {/* Image Section */}
        <figure className="w-full h-24 sm:h-32 flex justify-center items-center mb-4">
          <img
            src={image}
            alt={name}
            className="object-contain h-full w-full rounded-md"
          />
        </figure>
        {/* Card Body */}
        <div className="card-body flex flex-col justify-between">
          {/* Title */}
          <h2 className="card-title text-[#EEEEEE] text-sm sm:text-base md:text-lg font-bold line-clamp-2 text-center">
            {name}
          </h2>
          {/* Price and Button */}
          <div className="space-y-3 mt-4">
            <div className="font-semibold text-[#C73659] text-sm sm:text-base text-center">
              {price} LKR
            </div>
            <div className="card-actions mb-0 justify-center">
              <button
                className="text-xs sm:text-sm md:text-base btn bg-[#A91D3A] text-[#EEEEEE] border-none hover:bg-[#C73659] hover:scale-105 transition-transform duration-300 px-3 py-2 rounded-3xl"
                onClick={handleAddToCart} // Add to cart functionality
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
