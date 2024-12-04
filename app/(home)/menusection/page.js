import { data } from "@/lib/mongodb";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Page() {
  return (
    <div className="text-white flex flex-col gap-20 items-center justify-center w-full py-8">
      <div className="flex flex-col items-center gap-20">
        <p className="text-center w-[283px] h-[120px] sm:h-[74px] sm:w-[740px] text-[56px] SerifTextfonts sm:text-[74px] leading-[78.66px] font-[400] text-white">
          Choose Our Menu
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-[80px] sm:gap-[73px] w-full sm:w-[1184px]">
          {data.map((el) => (
            <div
              key={el.id}
              className="flex flex-col justify-between bg-[#262626] pb-4 h-[400.6px] rounded-[20px]   w-[286px] sm:h-[373px]  sm:w-[269px] mx-auto"
            >
              <div className="h-[230px] w-[230px] sm:h-[230px] sm:w-[230px] rounded-full bg-[#D9D9D9] ml-[-27.5px]  mt-[-28px]"></div>
              <div className="flex flex-col justify-between   mx-6 sm:w-[219.14px] h-[120px] sm:h-[134.96pxpx]">
                <p className="text-2xl sm:text-xl leading-tight SerifTextfonts font-normal text-white">
                  {el.meal}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-[#FFD722] SerifTextfonts font-normal text-[32px] sm:text-[40px]">
                    ${el.price}
                  </p>
                  <AddCircleIcon className="text-[#FFFFF0] h-[45px] text-[16px]  w-[45px] sm:w-[37.5px] sm:h-[37.5px] hover:text-[#FFD722] transition-colors duration-300 ease-in-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-[#FFD722] text-[#000000] Poppinsfonts font-[400] text-[18px] px-[8px] py-[24px] leading-[30px] w-[335px] h-[53px] text-center sm:w-[125px] sm:h-[56px] rounded-[10px] flex items-center justify-center  ">
          SEE ALL
        </button>
      </div>
    </div>
  );
}

export default Page;
