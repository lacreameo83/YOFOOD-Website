import React from "react";

function Page() {
  return (
    <div className="h-screen sm:h-[448px] w-full flex flex-col items-center gap-10 justify-center">
      <div className="w-full sm:w-[462px] sm:h-[288px] gap-2 flex flex-col items-center justify-center">
        <div className="h-[158px] w-[346.37px] sm:w-[646.37px]">
          <p className="font-normal SerifTextfonts text-[44px] sm:text-[64px] text-white leading-[48.66px] sm:leading-[68.66px] text-center">
            We Have a Service That Can Satisfy You
          </p>
        </div>

        <p className="text-[16px] sm:text-[18px] Poppinsfonts font-normal sm:leading-[30px] text-center text-white">
          Our restaurant has good service to make our customers more comfortable
          to come back again. Our goal is to create some healthy and fresh food
          for you to enjoy. We are looking forward to having you visit our
          restaurant.
        </p>
      </div>
      <div className="text-white">
        <div className="w-full sm:w-[773px] h-[62px]">
          <ul className="grid grid-cols-2 sm:flex items-center gap-2">
            <li className="w-[145px] h-[62px] rounded-[10px] border p-4 border-[#505050] text-white text-center transition-all duration-300 ease-in-out hover:bg-[#505050] hover:text-black">
              Online Order
            </li>
            <li className="w-[145px] h-[62px] rounded-[10px] border p-4 border-[#505050] text-white text-center transition-all duration-300 ease-in-out hover:bg-[#505050] hover:text-black">
              24/7 Service
            </li>
            <li className="w-[145px] h-[62px] rounded-[10px] border p-4 border-[#505050] text-white text-center transition-all duration-300 ease-in-out hover:bg-[#505050] hover:text-black">
              Reservation
            </li>
            <li className="w-[145px] h-[62px] rounded-[10px] border p-4 border-[#505050] text-white text-center transition-all duration-300 ease-in-out hover:bg-[#505050] hover:text-black">
              Super Chef
            </li>
            <li className="w-full col-span-2 sm:w-[145px] sm:col-span-2 h-[62px] rounded-[10px] border p-4 border-[#505050] text-white text-center transition-all duration-300 ease-in-out hover:bg-[#505050] hover:text-black">
              Free Food Box
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
