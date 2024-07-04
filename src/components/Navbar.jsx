import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 text-white flex items-center w-full h-[100px] bg-red-500">
      <nav className="flex justify-between sm:flex-row flex-col gap-4 container px-7 items-center  mx-auto ">
        <div className="">
          <Link className="font-bold text-2xl " to="/">
            {" "}
            SHOPPING CART
          </Link>
        </div>
        <ul className="flex gap-5 font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cart"> Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
