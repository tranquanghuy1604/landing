import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[#E7ECFF] py-[50px]">
      <div className="flex gap-[40px] justify-center">
        <Link href="#" className="cursor-pointer">
          <img className="h-[30px]" src="/homepage/fb-img.png" alt="" />
        </Link>
        <Link href="#" className="cursor-pointer">
          <img className="h-[30px]" src="/homepage/lin.png" alt="" />
        </Link>
        <Link href="#" className="cursor-pointer">
          <img className="h-[30px]" src="/homepage/twitter.png" alt="" />
        </Link>
        <Link href="#" className="cursor-pointer">
          <img className="h-[30px]" src="/homepage/youtube.png" alt="" />
        </Link>
        <Link href="#" className="cursor-pointer">
          <img className="h-[30px]" src="/homepage/Instagram.png" alt="" />
        </Link>
      </div>
      <div className="text-center text-[#939EA4 text-[14px] mt-[50px]">
        ©2023 Yourcompany
      </div>
    </div>
  );
}
