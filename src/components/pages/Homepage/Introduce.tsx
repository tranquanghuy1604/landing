import React from "react";

export default function Introduce() {
  return (
    <div>
      <div className="pt-[10px] md:pt-[15%] justify-between pb-[50px] md:pb-[150px]">
        <div className="w-full max-w-[550px] pt-[60px] text-center md:text-start">
          <h3 className="text-[#091133] font-[700] text-[50px]">
            Introduce Your Product Quickly & Effectively
          </h3>
          <p className="mt-[15px] text-[#505F98] text-[18px] font-[400] drop-shadow-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="mt-[30px] flex items-center">
            <button className="w-full md:w-[50%] bg-[#111B47] text-white py-[10px] border-[1px] border-solid border-[#091133] rounded-md">
              Purchase UI Kit
            </button>
            <button className="w-full md:w-[50%] ml-[50px] bg-[#fff] text-black  py-[10px] border-[1px] border-solid border-[#091133] rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="md:absolute top-[5%] right-0">
        <img className="w-full" src="/homepage/study-img.png" alt="" />
      </div>
      <div className="absolute top-0 right-0 z-[-10]">
        <img className="w-full" src="/homepage/shadow-img.png" alt="" />
      </div>
    </div>
  );
}
