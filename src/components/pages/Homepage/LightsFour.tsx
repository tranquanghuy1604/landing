import React from "react";

export default function LightsFour() {
  return (
    <div className="mt-[200px] md:flex items-center justify-between">
      <div className="w-full md:w-[50%]">
        <img
          className="w-[80%] mx-auto"
          src="/light-fast/mention-img.png"
          alt=""
        />
      </div>
      <div className="md:w-[50%] mt-[20px] md:mt-0 w-full md:max-w-[450px] mx-auto text-center">
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
        <button className="text-white mt-[50px] px-[50px] py-[10px] bg-[#111B47] border-[1px] borer-solid border-[#000000] rounded-md">
          Purchase Now
        </button>
      </div>
    </div>
  );
}
