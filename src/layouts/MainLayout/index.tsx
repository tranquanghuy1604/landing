import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: any;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen w-full">
      <div className="">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
