import React from "react";

export default function LightsTwo() {
  return (
    <div className="mt-[200px] md:flex items-center justify-between">
      <div className="w-full md:w-[50%]">
        <img
          className="w-[80%] mx-auto"
          src="/light-fast/women-hand-up-letter.png"
          alt=""
        />
      </div>
      <div className="mt-[20px] md:mt-0 w-full text-center md:w-[50%] md:max-w-[450px] mx-auto">
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
      </div>
    </div>
  );
}
