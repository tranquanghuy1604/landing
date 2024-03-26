import React from "react";

export default function PriceToSuit() {
  return (
    <div className="py-[150px] w-full bg-[url('/homepage/bg-pricetosuit.png')] bg-cover mx-auto text-center">
      <h2 className="text-[36px] text-[#091133] font-[600]">
        A Price To Suit Everyone
      </h2>
      <p className="text-[#6F7CB2] font-[400] mt-[20px] drop-shadow-md leading-[25px] w-full max-w-[600px] mx-auto">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus{" "}
      </p>
      <div className="mt-[30px]">
        <h4 className="text-[#222F65] text-[50px] font-[600]">$40</h4>
        <p className="text-[#37447E] font-[400]">UI Design Kit</p>
      </div>
      <div className="mt-[40px]">
        <p className="text-[14px] text-[#5D6970] font-[400]">
          See, One price. Simple.
        </p>
        <button className="mt-[15px] px-[70px] text-white bg-[#111B47] border-[1px] border-solid border-[#000000] rounded-md text-[14px] py-[10px]">
          Purchase Now
        </button>
      </div>
    </div>
  );
}
