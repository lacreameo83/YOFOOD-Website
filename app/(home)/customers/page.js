import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Image from "next/image";
import humanimage from '../../../public/humanImage.png'

function Page() {
  return (
    <div className="flex flex-col  sm:gap-10 items-center sm:h-[80vh] w-full justify-center">
      <div className="w-[335px] h-[180px ]  sm:w-[477px]  text-white mb-[100px] h-[158px]">
        <p className="text-[#FFFFFF] text-[56px] leading-[59.53px] text-center SerifTextfonts text-current sm:text-[74px]  sm:leading-[78.66px] font-[400]">
          what our customers say
        </p>
      </div>
      <div className="h-[504px] w-[305px] bg-[#262626]  sm:h-[40vh]  flex flex-col sm:flex-row  sm:w-[70%] items-center px-6 rounded-[30px] gap-[25px] sm:gap-0">
        {/* Image Section */}
        <div className="w-[299px] sm:w-[570px] h-auto flex flex-col gap-[40px] sm:gap-0">
          <div className="  sm:w-[568px] flex flex-col  gap-7 h-[212px]">
            <p className="text-[#FFFFFF] text-start sm:text-left    Poppinsfonts font-[400] text-[13px] sm:text-[18px] ">
              {`" You won't find a restaurant in Greenland that serves
              such amazing food. Their new menu surprised me. All new, never
              seen and tasted such food before in my life. keep on creating new
              menus I'm really looking forward to it  "`}
            </p>
            <div>
              <p className="text-[#FFFFFF]  font-[400] text-[13px] sm:text-[18px] leading-[17px] sm:leading-[27px] list-disc SerifTextfonts list-inside">
                Raihan Rahardika
              </p>
              <p className="text-[#FFFFFF]  font-[400] text-[13px] sm:text-[16px] opacity-9 leading-[17px] sm:leading-[27px] list-disc Poppinsfonts list-inside">
                Students
              </p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="  h-[83vh]">
          <Image
            src={humanimage}
            alt="Human icon"
            width={800}
            height={800}
            // priority
            // layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
