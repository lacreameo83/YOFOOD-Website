"use client";

import React, { useState } from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import CopyrightIcon from "@mui/icons-material/Copyright";


function Header() {
  const [isClicked, setButtonClick] = useState(false);

  return (
    <div className="h-[100px] sticky top-0 bg-black px-[16px] sm:px-[120px] flex items-center justify-between w-full">
      {/* Logo */}
      <div>
        <p className="text-[#FFFFF0] w-[72.54px] h-[13px] text-[13px]">
          YOFOOD
        </p>
      </div>

      {/* Navigation (Hidden on small screens) */}
      <div className="hidden sm:block w-[435px] h-[26px]">
        <ul className="text-[#FFFFF0] Poppinsfonts leading-[26px] text-[16px] gap-[32px] font-[400] flex items-center">
          <li className="hover:text-[#FFD722] transition-colors duration-300 ease-in-out">
            Menu
          </li>
          <li className="hover:text-[#FFD722] transition-colors duration-300 ease-in-out">
            Services
          </li>
          <li className="hover:text-[#FFD722] transition-colors duration-300 ease-in-out">
            Reservation
          </li>
          <li className="hover:text-[#FFD722] transition-colors duration-300 ease-in-out">
            Blog
          </li>
          <li className="hover:text-[#FFD722] transition-colors duration-300 ease-in-out">
            Contact
          </li>
        </ul>
      </div>

      {/* Cart Icon and Button */}
      <div className="hidden sm:flex items-center justify-center h-[100px] gap-[8px]">
        <div className="relative w-[38px] h-[36px] flex items-center justify-center">
          <div className="h-[24px] w-[24px] bg-[#FF0000] border-[2px] border-black absolute left-5 bottom-4 rounded-full flex items-center justify-center">
            <p className="text-[10px] text-white font-[400]">5</p>
          </div>
          <LocalMallOutlinedIcon className="text-[#FFFFF0] h-[23.33px] w-[21px] hover:text-[#FFD722] transition-transform duration-300 ease-in-out" />
        </div>
        <button className="bg-[#FFD722] text-[#000000] border Poppinsfonts text-[16px] font-[400] w-[145px] h-[56px] p-[8px] rounded-[30px] transition-all duration-300 ease-in-out hover:bg-[#FFBF00] hover:scale-105">
          Reservation
        </button>
      </div>
      <div className="block sm:hidden">
        <ReorderOutlinedIcon
          className="text-[#FFFFF0] h-[23.33px] w-[21px] hover:text-[#FFD722] transition-transform duration-300 ease-in-out"
          onClick={() => setButtonClick(true)}
        />
      </div>

      {/* Mobile Navigation Menu */}
      {isClicked && (
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col px-[20px] py-[10px] ${
            isClicked ? "scale-in" : "scale-out"
          }`}
        >
          {/* Header Section */}
          <div className="h-[56px] text-[#FFFFF0] w-[375px] flex items-center justify-between">
            <p className="w-[72.54px] h-[13px]">YOFOOD</p>
            <button
              onClick={() => setButtonClick(false)}
              className="border-[1px] text-[13px] font-[500] text-[#FFFFF0] w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-[#FFD722] hover:text-black transition-transform duration-300 ease-in-out"
              aria-label="Close menu"
            >
              x
            </button>
          </div>

          {/* Navigation Links */}
          <div className="h-[346px] flex flex-col gap-[24px]">
            <ul className="Poppinsfonts font-[400] text-[40px] leading-[50px] text-[#FFFFF0]">
              <li className="hover:text-[#FFD722] transition-colors duration-300 ease-in-out">
                Menu
              </li>
              <li className="hover:text-[#FFD722] transition-colors duration-300 ease-in-out">
                Services
              </li>
              <li className="hover:text-[#FFD722] transition-colors duration-300 ease-in-out">
                Reservation
              </li>
              <li className="hover:text-[#FFD722] transition-colors duration-300 ease-in-out">
                Blog
              </li>
              <li className="hover:text-[#FFD722] transition-colors duration-300 ease-in-out">
                Contact
              </li>
            </ul>
          </div>

          {/* Buttons Section */}
          <div className="w-[335px] h-[120px] flex flex-col items-center gap-[16px] mt-[24px]">
            <div className="bg-[#000000] border-[1px] justify-center flex items-center gap-2 border-[#DDDDDD] text-white Poppinsfonts text-[16px] font-[400] w-full h-[56px] p-[8px] rounded-[30px] transition-all duration-300 ease-in-out hover:bg-[#FFBF00] hover:scale-105">
              <LocalMallOutlinedIcon /> <p>Bucket</p>
            </div>
            <button className="bg-[#FFD722] text-[#000000] Poppinsfonts text-[16px] font-[400] w-full h-[56px] p-[8px] rounded-[30px] transition-all duration-300 ease-in-out hover:bg-[#FFBF00] hover:scale-105">
              Reservation
            </button>
          </div>
          <p className="item-center text-[12px] h-[250px] m-auto font-[400] leading-[16px] text-[#5B5B5B] mb-4 flex">
            FOODIN
            <span>
              <CopyrightIcon className=" text-[#5B5B5B]  Poppinsfonts text-[14px] sm:text-[16px]  font-[400]  " />
            </span>
            2021-2022,ALL RIGTHS RESERVED
          </p>
        </nav>
      )}
    </div>
  );
}

export default Header;
