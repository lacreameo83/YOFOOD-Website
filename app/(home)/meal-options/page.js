import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

function Page() {
  return (
    <div className="flex items-center h-[80vh] w-full justify-center">
      <div className="h-auto sm:h-[530px] py-3 flex flex-col sm:grid sm:grid-cols-2 w-[90%] sm:w-[80%] gap-6 sm:gap-0">
        {/* Image Section */}
        <div className="order-1 sm:order flex justify-center">
          <div className="bg-[#D9D9D9] flex items-center justify-center h-[240px] w-[240px] sm:h-[521px] sm:w-[526px] rounded-full">
            <PlayCircleFilledIcon className="text-[#f8f5f5] text-[60px] sm:text-[100px]" />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex sm:order-1 justify-center">
          <div className="w-[90%] sm:w-[570px] h-auto flex flex-col gap-6 sm:gap-[22px]">
            {/* Title */}
            <p className="text-[#FFFFFF] text-center sm:text-left leading-[34px] sm:leading-[70px] SerifTextfonts font-[400] text-[30px] sm:text-[54px] sm:text-[74px]">
              Whole wheat bread with avocado sauce
            </p>

            {/* Ingredients List */}
            <ol className="text-[#FFFFFF] Poppinsfonts font-[400] text-[13px] sm:text-[18px] leading-[17px] sm:leading-[27px] list-disc list-inside">
              <li>2 slices of whole wheat bread</li>
              <li>2 eggs (can be domestic or native chicken)</li>
              <li>1 avocado</li>
              <li>Enough black pepper</li>
              <li>Enough chili powder</li>
              <li>Enough salt</li>
              <li>As needed parsley dry powder</li>
              <li>2 tbsp olive oil for frying bread and eggs</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
