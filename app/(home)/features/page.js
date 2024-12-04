import React from "react";

function Page() {
  return (
    <div className="text-white flex h-[953px] items-center justify-center w-full sm:h-[753px]  ">
      <div className="flex flex-col justify-around h-[756px] w-[1140px] items-center">
        {/* Header Section */}
        <div className="w-[334.89px] h-[118px] sm:w-[515px]  sm:h-[242px] flex flex-col justify-between items-center">
          <div className="text-[36px] sm:text-[74px] text-center SerifTextfonts leading-[46px] sm:leading-[76.66px] font-[400]">
            <p>Try Our New Food Menu</p>
          </div>
          <div className="text-[#FFFFFF] text-center Poppinsfonts font-[400] text-[14px] sm:text-[18px] ">
            <p>
              We create food with new characteristics and extraordinary taste
            </p>
          </div>
        </div>

        {/* Image and Description Section */}
        <div className="flex flex-col sm:flex-row  sm:h-[268px]   items-center gap-20 justify-center">
          {/* Circular Image Placeholder */}
          <div className="h-[288px] w-[288px] sm:h-[288px] sm:w-[292px] mt-11 sm:mt-0 rounded-full bg-[#D9D9D9]"></div>

          {/* Text Content */}
          <div className="flex flex-col justify-between  w-[335.27px]  h-[247px] sm:h-[268px] sm:max-w-[470px] text-center sm:text-left">
            <div className="w-[335.27px] h-[82px]  sm:w-[470.37px] sm:h-[112px]  ">
              <p className="text-[32px] sm:text-[50px] text-start SerifTextfonts leading-[36px] sm:leading-[56px] font-[400]">
                Fried Rice With Meat and Vegetables
              </p>
            </div>
            <div className="w-[335.27px] h-[78px] sm:w-[470.37px] sm:h-[60px] ">
              <p className="text-[#FFFFFF]  text-start Poppinsfonts font-[400] text-[16px] sm:text-[18px]">
                The combination of traditional recipes with international
                flavors creates our newest menu.
              </p>
            </div>
            <div className="w-[61px] h-[55px] sm:w-[77px] sm:h-[55px] ">
              <p className="text-[#FFD722] text-start SerifTextfonts font-[400] text-[40px] sm:text-[50px]">
                $23
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
