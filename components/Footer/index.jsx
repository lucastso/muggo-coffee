import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen bg-gray-800 flex justify-between items-center px-40 py-20 text-white mt-20">
      <img src="logo.svg" alt="logo" />
      <div className="flex flex-col gap-2 justify-start items-start">
        <h1 className="font-bold text-lg mb-4">Páginas</h1>
        <a href="/">Home</a>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start">
        <h1 className="font-bold text-lg mb-4">Informações</h1>
        <a href="mailto:example@email.com">example@email.com</a>
        <p>99-999-9999</p>
        <p>Second av. Third floor bulding. 234. Upper east sides</p>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start">
        <h1 className="font-bold text-lg mb-4">Privacidade</h1>
        <a href="/" className="underline">
          Políticas
        </a>
      </div>
    </footer>
  );
};

export default Footer;
