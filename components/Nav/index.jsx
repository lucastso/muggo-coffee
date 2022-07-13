import React from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav
      className={`w-screen xs:h-auto lg:h-[5.375rem] flex xs:flex-col lg:flex-row justify-between items-center xs:px-4 lg:px-40 absolute top-0 left-0 xs:py-8 lg:py-0 xs:gap-8 lg:gap-0 ${
        router.pathname == "/"
          ? "backdrop-blur-xl bg-custom-black text-white"
          : "text-black border-b border-gray-200"
      }`}
    >
      <div className="flex xs:gap-8 lg:gap-12">
        {router.pathname == "/" ? (
          <img src="/logo.svg" alt="logo" />
        ) : (
          <img src="/darklogo.svg" alt="logo" />
        )}
        <div
          className={`w-px opacity-25 rounded-full ${
            router.pathname == "/" ? "bg-white" : "bg-black"
          }`}
        ></div>
        <a href="/" className="xs:text-base lg:text-lg font-bold">
          Home
        </a>
        <a href="/sobre" className="xs:text-base lg:text-lg font-bold">
          About
        </a>
      </div>
      <div className="flex items-center xs:gap-8 lg:gap-12">
        <p className="xs:text-base lg:text-lg font-bold text-center">
          9 9999 9999
        </p>
        <button className="flex items-center justify-center py-2 px-6 rounded-full bg-custom-orange xs:w-full lg:w-auto">
          <a href="/products" className="font-bold text-lg text-white">
            Location
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
