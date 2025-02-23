import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <Link to="/">
        <img className="w-44 cursor-pointer" src={assets.logo} alt="logo" />
      </Link>

      <ul className="hidden md:flex items-start gap-5 font-medium ">
        <NavLink to={"/"}>
          <li className="py-1">HOME</li>
          <hr className="border-non outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/service"}>
          <li className="py-1">SERVICE</li>
          <hr className="border-non outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/gallery"}>
          <li className="py-1">GALLERY</li>
          <hr className="border-non outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1">ABOUT</li>
          <hr className="border-non outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1">CONTACT</li>
          <hr className="border-non outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="bg-primary text-white px-8 py-3 rounded-full font-semibold hidden md:block hover:bg-hoverPrimary transition-colors duration-300 ease-in-out"
        >
          Create Account
        </Link>
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />

        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="cross icon"
            />
          </div>

          <ul className="flex flex-col items-center gap-2 mt-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/service">
              <p className="px-4 py-2 rounded inline-block">Services</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/gallery">
              <p className="px-4 py-2 rounded inline-block">Gallery</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
