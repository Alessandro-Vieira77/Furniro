import { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

// img
import logo from "/img/logofuni.png";

export function Header() {
  const [sing, setSing] = useState(true);
  const [product, setProduct] = useState(6);
  setProduct;
  setSing;

  return (
    <header className=" hidden items-center justify-between px-20 py-4 md:flex">
      <img src={logo} alt="logo furniro" />
      <nav className="flex justify-between font-medium w-full max-w-2xl px-3">
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <a href="#">About</a>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <div className="flex items-center gap-5">
        <div className="w-8 relative">
          <FaRegUser size={25} />
          {sing && (
            <p className="text-2xl font-medium absolute right-0 -top-2 text-red-500">
              !
            </p>
          )}
        </div>
        <div className="w-8 relative">
          <MdOutlineShoppingCart size={25} />
          {product > 0 && (
            <p className="w-4 h-4 text-xs text-white font-medium rounded-full bg-amber-500 flex justify-center items-center absolute right-0 -top-2">
              {product}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
