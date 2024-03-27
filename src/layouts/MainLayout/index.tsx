import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DefaultHead from "../default-head";

interface MainLayoutProps {
  children: any;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen w-full">
      <div className="">
        <DefaultHead />
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
