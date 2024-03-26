import React from "react";

export default function LightFastPowerful() {
  return (
    <div className="mt-[50px] md:mt-[500px] md:flex justify-between items-center">
      <div className="w-full text-center md:w-[50%]">
        <h2 className="text-[36px] font-[600] text-[#091133]">
          Light, Fast & Powerful
        </h2>
        <p className="mt-[20px] drop-shadow-md text-[#6F7CB2] font-[400] leading-[25px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="mt-[40px] flex gap-[20px]   ">
          <div className="w-full max-w-[260px]">
            <img src="" alt="" />
            <h5 className="font-[600] text-[#091133]">Title Goes Here</h5>
            <p className="text-[12px] text-[#5D6970] mt-[8px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
          <div className="w-full max-w-[260px]">
            <img src="" alt="" />
            <h5 className="font-[600] text-[#091133]">Title Goes Here</h5>
            <p className="text-[12px] text-[#5D6970] mt-[8px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%]">
        <img
          className="w-full mx-auto"
          src="/light-fast/mobile-img.png"
          alt=""
        />
      </div>
    </div>
  );
}
