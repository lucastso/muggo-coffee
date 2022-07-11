import React from "react";

const Nav = () => {
  return (
    <nav className="w-screen h-[5.375rem] backdrop-blur-xl bg-custom-black flex justify-between items-center px-40 absolute top-0 left-0 text-white">
      <div className="flex gap-12">
        <img src="/logo.svg" alt="logo" />
        <div className="w-px bg-white opacity-25 rounded-full"></div>
        <a href="/" className="text-lg font-bold">
          Home
        </a>
        <a href="/sobre" className="text-lg font-bold">
          Sobre
        </a>
      </div>
      <button className="flex items-center justify-center py-2 px-6 rounded-full bg-custom-orange">
        <a href="/search" className="font-bold text-lg">
          Pesquisar
        </a>
      </button>
    </nav>
  );
};

export default Nav;
