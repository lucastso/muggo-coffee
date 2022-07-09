import React, { useState } from "react";

const HomeCard = () => {
  const [option, setOption] = useState("Comprar");

  return (
    <div className="bg-white w-[40rem] rounded-2xl mt-60 drop-shadow-2xl p-10">
      <h1 className="flex items-center justify-center font-bold text-lg">
        Pesquise detalhadamente
      </h1>
      <div className="flex mt-10">
        <p
          className={`w-1/2 flex justify-center items-center font-bold cursor-pointer ${
            option == "Comprar" ? "" : "opacity-50"
          }`}
          onClick={() => setOption("Comprar")}
        >
          Comprar
        </p>
        <p
          className={`w-1/2 flex justify-center items-center font-bold cursor-pointer ${
            option == "Alugar" ? "" : "opacity-50"
          }`}
          onClick={() => setOption("Alugar")}
        >
          Alugar
        </p>
      </div>
      <form className="flex flex-col gap-4 mt-6">
        <input
          type="text"
          className="border-b border-gray-200 rounded-t-lg h-10 bg-gray-50 px-4 focus:outline-0"
          placeholder="Estado"
        />
        <input
          type="text"
          className="border-b border-gray-200 rounded-t-lg h-10 bg-gray-50 px-4 focus:outline-0"
          placeholder="Cidade"
        />
        <div className="flex gap-8 items-center justify-center w-full">
          <input
            type="text"
            className="border-b border-gray-200 rounded-t-lg h-10 bg-gray-50 px-4 focus:outline-0 w-full"
            placeholder={
              option == "Comprar"
                ? "Valor mínimo do imóvel"
                : "Valor mínimo do aluguel"
            }
          />
          <input
            type="text"
            className="border-b border-gray-200 rounded-t-lg h-10 bg-gray-50 px-4 focus:outline-0 w-full"
            placeholder={
              option == "Comprar"
                ? "Valor máximo do imóvel"
                : "Valor máximo do aluguel"
            }
          />
        </div>
        <button className="bg-custom-blue mt-6 h-12 w-40 self-end rounded-lg text-white font-bold">
          {option == "Comprar" ? "Comprar" : "Alugar"}
        </button>
      </form>
    </div>
  );
};

export default HomeCard;
