import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChangeScroll = () => {
    if (window.scrollY >= 60) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeScroll);
  }, []);
  return (
    <div
      className={`sticky top-0 z-[10] ${
        isScroll ? "bg-[#E7ECFF]" : "bg-transparent"
      }
    `}
    >
      <div
        className={`flex items-center h-[60px] justify-between max-w-[1200px] p-4 mx-auto`}
      >
        <div
          onClick={() => setOpen(true)}
          className="md:hidden text-[18px] cursor-pointer"
        >
          <FaBars className="w-[50px] text-[30px]" />
        </div>
        <Menu open={open} onClose={() => setOpen(false)} />
        <div className="md:flex gap-[40px] hidden">
          <Link href="/" className="text-[#5050f98] text-[14px]">
            Home
          </Link>
          <Link href="/about" className="text-[#5050f98] text-[14px]">
            About
          </Link>
          <Link href="/contact" className="text-[#5050f98] text-[14px]">
            Contact
          </Link>
        </div>
        <div className="text-[#37447E] text-[32px] font-[800] hidden md:block">
          Landing
        </div>
        <button className="bg-[#111B47] border-[1px] border-solid border-[#000000] rounded-lg text-white py-[10px] px-[60px] shadow-md">
          Buy now
        </button>
      </div>
    </div>
  );
}

function Menu({ open, onClose }: any) {
  return (
    <>
      {open && (
        <div className="pt-[20px] text-black absolute left-0 top-0 min-h-screen bg-[#E7ECFF] w-[300px] duration-500 animate-wave">
          <div
            className="float-right text-[18px] pr-[30px] cursor-pointer"
            onClick={onClose}
          >
            <FaX className="text-[30px]" />
          </div>

          <div className="mt-[40px] text-center">
            <Link href="/" className="text-[#5050f98] text-[20px]">
              Home
            </Link>
          </div>
          <div className="mt-[40px] text-center">
            <Link href="/" className="text-[#5050f98] text-[20px]">
              About
            </Link>
          </div>
          <div className="mt-[40px] text-center">
            <Link href="/" className="text-[#5050f98] text-[20px]">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
