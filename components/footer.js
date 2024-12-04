import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Fooder() {
  return (
    <div className="h-screen sm:h-[240px] sm:my-10 sm:mt-[200px] gap-8 w-full flex flex-col items-center justify-center p-6 md:p-12 bg-black text-white">
      <p className="text-[34px] leading-[40.8px] text-[#FFFFFF]  sm:text-[50px] sm:leading-[56.5px] SerifTextfonts font-[400] mb-6  ">
        YOfoood@gmail.com
      </p>
      <div className="w-full Poppinsfonts grid grid-cols-1  max-w-7xl sm:flex sm:items-start sm:justify-between">
        <div className="  flex flex-col gap-5">
          <div>
            <h2 className="text-xl font-[500] text-[16px] sm:text-[18px] leading-[30px] mb-2">
              Address
            </h2>
            <ul className="space-y-2">
              <li className="text-[14px] Poppinsfonts sm:text-[16px]  hover:text-[#F5DEB3] transition-colors duration-300">
                Number 3891 Ranchview Dr. Richardson
              </li>
              <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
                California 62639, USA
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-[500] text-[16px] sm:text-[18px] leading-[30px] mb-2">
              Reservation
            </h2>
            <ul className="space-y-2">
              <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
                (613)-9811-2476
              </li>
              <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
                (613)-6354-7238
              </li>
            </ul>
          </div>
        </div>
        <div className=" col-span-2">
          <h2 className="text-xl font-[500] text-[16px] sm:text-[18px] leading-[30px] mb-2">
            Opening
          </h2>
          <ul className="space-y-2">
            <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
              Everyday - 10 AM - 9 PM
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-[500] text-[16px] sm:text-[18px] leading-[30px] mb-2">
            General
          </h2>
          <ul className="space-y-2">
            <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
              Menu
            </li>
            <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
              Services
            </li>
            <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
              Reservation
            </li>
            <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
              Blog
            </li>
            <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-[500] text-[16px] sm:text-[18px] leading-[30px] mb-2">
            Support
          </h2>
          <ul className="space-y-2">
            <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
              FAQ
            </li>
            <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
              Online Chat
            </li>
            <li className="hover:text-[#F5DEB3] text-[14px] Poppinsfonts sm:text-[16px] transition-colors duration-300">
              Call
            </li>
          </ul>
        </div>
      </div>
      <p className="item-center text-[#5B5B5B] text-[16px] mb-4 flex">
        FOODIN
        <span>
          <CopyrightIcon className=" text-[#5B5B5B]  Poppinsfonts text-[14px] sm:text-[16px]  font-[400]  " />
        </span>
        2021-2022,ALL RIGTHS RESERVED
      </p>
    </div>
  );
}

export default Fooder;
