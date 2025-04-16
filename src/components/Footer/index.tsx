import { Link } from "react-router-dom";

// icons
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="w-full h-full px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between w-full pb-12 gap-5">
        <div className="flex flex-col gap-2.5 md:gap-12">
          <h2 className="text-2xl font-bold">Furniro.</h2>
          <p className="text-base text-zinc-400">
            400 University Drive Suite 200 Coral
            <br />
            Gables,
            <br />
            FL 33134 USA
          </p>
          {/* social */}
          <div className="flex gap-4">
            <a target="_blank" href="https://www.facebook.com/">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:shadow-orange-500 hover:shadow-xl">
                <TiSocialFacebook size={20} />
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg  hover:shadow-orange-500 hover:shadow-xl">
                <IoLogoInstagram size={20} />
              </div>
            </a>
            <a target="_blank" href="https://x.com/?lang=pt">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg  hover:shadow-orange-500 hover:shadow-xl">
                <FaTwitter size={20} />
              </div>
            </a>
            <a target="_blank" href="https://www.linkedin.com/">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg  hover:shadow-orange-500 hover:shadow-xl">
                <RiLinkedinFill size={20} />
              </div>
            </a>
          </div>
        </div>

        <div className=" flex flex-col gap-2 md:gap-12 font-medium">
          <h2 className="text-zinc-500 ">Links</h2>
          <nav className="flex md:flex-col w-full justify-between md:gap-12">
            <Link to={"/"}>Home</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={""}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-2 md:gap-12 font-medium">
          <h2 className="text-zinc-500">Help</h2>
          <div className="flex md:flex-col w-full justify-between md:gap-12">
            <Link to={""}>Payment Options</Link>
            <Link to={""}>Returns</Link>
            <Link to={""}>Privacy Policies</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-12 font-medium">
          <h2 className="text-zinc-500">Newsletter</h2>
          <form className="flex gap-2.5">
            <input
              className=" outline-none border-b-2 w-full max-w-50"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button
              type="submit"
              className=" border-b-2 font-medium cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="font-medium border-t-2 border-zinc-400 py-9">
        2023 furino. All rights reverved
      </div>
    </footer>
  );
}
