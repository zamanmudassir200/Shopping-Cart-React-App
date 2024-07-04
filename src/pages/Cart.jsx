import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, totalCart);

  return (
    <div className="flex justify-center sm:flex-row flex-col px-10 items-start">
      {cart && cart.length ? (
        <>
          <div className="min-h-[20vh] grid md:grid-cols-2 max-w-6xl mx-auto ">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="flex  flex-col justify-center items-center p-5 gap-5 ">
            <h1 className="self-start font-bold text-xl text-red-800">
              Your Cart Summary
            </h1>
            <div className="bg-red-200 p-2 rounded-lg flex flex-col gap-2 text-gray-800 text-xl font-bold">
              <span> Total Items: {cart.length}</span>
              <span className="text-gray-800 font-bold">
                Total Amount: {Math.floor(totalCart)} Rs
              </span>
            </div>
            <p className="text-gray-800 font-bold text-xl"></p>
          </div>
        </>
      ) : (
        <div className="h-[calc(100vh-100px)] mx-auto flex   flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-2xl mb-2">
            Your Cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
