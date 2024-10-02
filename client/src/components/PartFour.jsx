function PartFour({ info }) {
  return (
    <div
      className="flex flex-col items-center text-center text-[#3e047c] max-w-full p-4"
      id={info.id}
    >
      <div className="font-extrabold text-3xl w-fit p-3">{info.header}</div>
      <div className="font-semibold text-lg  my-2">
        {info.description}
      </div>
      <button className="bg-[#3e047c] border border-2 border-[#3e047c] text-white shadow-md hover:shadow-lg hover:bg-transparent hover:text-[#3e047c] w-80 mt-2">
        Descargá la App de Playstore y registrate como {info.role}
      </button>
      <div className="w-80 mb-2">Nosotros te calificamos y te habilitamos </div>
      <div className="flex w-full my-2 justify-evenly">
        <div className="border border-2 border-[#3e047c] w-60 p-1">
          {info.label1}
        </div>
        <div className="border border-2 border-[#3e047c] w-60 p-1">
          {info.label2}
        </div>
        <div className="border border-2 border-[#3e047c] w-60 p-1">
          <div>
            <div className="font-semibold">Listo!</div>
            {info.label3}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartFour
