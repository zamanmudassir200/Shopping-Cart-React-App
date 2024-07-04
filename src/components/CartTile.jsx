import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlices";

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.id));
  };
  return (
    <>
      <div className="flex flex-wrap items-center  sm:flex-row flex-col justify-between p-5 bg-red-500 my-2 rounded-xl">
        <div className="flex flex-wrap gap-3 items-center justify-cemter p-3 ">
          <img
            className="w-40 rounded-lg "
            src={cartItem?.image}
            alt={cartItem?.title}
          />

          <div className=" ">
            <h1 className="text-xl text-white font-bold">
              <span className="text-black">Title: </span> {cartItem?.title}
            </h1>
            <p className="text-xl text-white font-bold">
              <span className="text-black">Price: </span> {cartItem?.price} Rs
            </p>
          </div>
        </div>
        <div className="">
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTile;
