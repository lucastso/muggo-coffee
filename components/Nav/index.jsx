import React from "react";

const Nav = () => {
  return (
    <nav className="w-screen xs:h-auto lg:h-[5.375rem] backdrop-blur-xl bg-custom-black flex xs:flex-col lg:flex-row justify-between items-center xs:px-4 lg:px-40 absolute top-0 left-0 text-white xs:py-8 lg:py-0 xs:gap-8 lg:gap-0">
      <div className="flex xs:gap-8 lg:gap-12">
        <img src="/logo.svg" alt="logo" />
        <div className="w-px bg-white opacity-25 rounded-full"></div>
        <a href="/" className="xs:text-base lg:text-lg font-bold">
          Home
        </a>
        <a href="/sobre" className="xs:text-base lg:text-lg font-bold">
          Sobre
        </a>
      </div>
      <button className="flex items-center justify-center py-2 px-6 rounded-full bg-custom-orange xs:w-full lg:w-auto">
        <a href="/search" className="font-bold text-lg">
          Pesquisar
        </a>
      </button>
    </nav>
  );
};

export default Nav;
