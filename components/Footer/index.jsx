import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen bg-custom-blue flex justify-between items-start xs:px-4 lg:px-40 py-20 text-white mt-20 xs:flex-col lg:flex-row xs:gap-8 lg:gap-0">
      <img
        src="logo.svg"
        alt="logo"
        className="xs:w-full xs:mb-12 lg:w-auto lg:mb-0"
      />
      <div className="flex flex-col gap-2 justify-start items-start">
        <h1 className="font-bold text-lg mb-2">Páginas</h1>
        <a href="/" className="xs:ml-2 lg:ml-0">
          Home
        </a>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start">
        <h1 className="font-bold text-lg mb-2">Informações</h1>
        <a href="mailto:example@email.com" className="xs:ml-2 lg:ml-0">
          example@email.com
        </a>
        <p className="xs:ml-2 lg:ml-0">99-999-9999</p>
        <p className="xs:ml-2 lg:ml-0">
          Second av. Third floor bulding. 234. Upper east sides
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start">
        <h1 className="font-bold text-lg mb-2">Privacidade</h1>
        <a href="/" className="underline xs:ml-2 lg:ml-0">
          Políticas
        </a>
      </div>
    </footer>
  );
};

export default Footer;
