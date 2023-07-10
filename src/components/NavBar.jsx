import { useState } from "react";

import iconMemu from "../assets/images/icon-menu.svg";
import iconMemuClose from "../assets/images/icon-menu-close.svg";

export const NavBar = () => {
  const [showMenu, setshowMenu] = useState(false);

  const handleClick = () => {
    setshowMenu(!showMenu);
  };

  return (
    <>
      <ul
        className={`${
          showMenu ? "" : "hidden"
        } xl:text-[16px absolute right-0 top-0 h-screen w-[256px] bg-white p-[24px] text-[18px] tracking-wide xl:relative xl:flex xl:h-auto xl:w-auto xl:items-center xl:justify-evenly xl:gap-x-7 xl:p-0 xl:text-xl`}
      >
        <li
          className={`${
            showMenu ? "" : "hidden"
          } flex cursor-pointer  place-content-end xl:hidden`}
        >
          <img
            className="h-8 w-8"
            src={iconMemuClose}
            onClick={handleClick}
            alt=""
          />
        </li>
        <li className="mb-8 xl:mb-0">
          <a className="hover:text-SoftRed" href="#">
            Home
          </a>
        </li>
        <li className="mb-8 xl:mb-0">
          <a className="hover:text-SoftRed" href="#">
            New
          </a>
        </li>
        <li className="mb-8 xl:mb-0">
          <a className="hover:text-SoftRed" href="#">
            Popular
          </a>
        </li>
        <li className="mb-8 xl:mb-0">
          <a className="hover:text-SoftRed" href="#">
            Trending
          </a>
        </li>
        <li className="mb-8 xl:mb-0">
          <a className="hover:text-SoftRed" href="#">
            Categories
          </a>
        </li>
      </ul>
      <img
        className={`${
          showMenu ? "hidden" : ""
        } h-4 w-10 cursor-pointer xl:hidden`}
        src={iconMemu}
        onClick={handleClick}
        alt=""
      />
    </>
  );
};
