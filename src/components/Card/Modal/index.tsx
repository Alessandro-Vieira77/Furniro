import { IoShareSocialOutline } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

export function Modal() {
  return (
    <div className="w-full h-443 flex flex-col justify-center items-center gap-5 bg-black/50  absolute top-0 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200">
      <button className="w-48 py-4 text-center bg-white font-medium text-titleOrange rounded-lg cursor-pointer">
        Add to cart
      </button>
      <div className="flex gap-3 items-center text-white font-medium">
        <p className="flex gap-1.5 items-center">
          <IoShareSocialOutline color="#FFFF" size={15} />
          Shere
        </p>
        <p className="flex gap-1.5 items-center">
          <GoArrowSwitch color="#FFFF" size={15} />
          Compare
        </p>
        <p className="flex gap-1.5 items-center">
          <MdOutlineFavoriteBorder color="#FFFF" size={15} />
          Like
        </p>
      </div>
      <Link
        to={"/detail/9"}
        className="flex gap-1.5 items-center text-white font-medium"
      >
        <HiOutlineViewfinderCircle color="#FFFF" size={25} /> View
      </Link>
    </div>
  );
}
