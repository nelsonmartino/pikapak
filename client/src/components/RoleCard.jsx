const RoleCard = ({ info }) => {
  return (
    <div className="flex flex-col my-6  p-4 items-center text-[#3e047c] rounded-xl shadow-xl group border-2 border-gray-300  xl:w-72 xl:h-[90%] w-[70%] h-full">
      <div className="flex p-6 h-[100%] content-end overflow-hidden text-white w-full justify-center">
        <img src={info.image} className=" w-full" alt={info.title} />
      </div>


      <div className="flex flex-col mt-4 justify-between flex-grow h-full">
        <div className="p-2 flex flex-col items-center flex-grow">
          <p className=" leading-normal font-medium text-pretty h-20">
            {info.description}
          </p>
          <svg
            className="-rotate-90 w-[72px] h-[72px] mb-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#ffbb00"
              d="m10 256 200 150v-80h156V186H210v-80zM394 186h40v140h-40zM462 186h40v140h-40z"
            />
          </svg>
          <p className=" leading-normal font-medium text-pretty">
            {info.postDescription}
          </p>
          <a
            className="bg-[#3e047c] p-2 m-1 w-full border border-2 border-[#3e047c] text-center text-xs font-semibold text-white text-nowrap transition-all shadow-md uppercase hover:shadow-lg hover:bg-transparent hover:text-[#3e047c]"
            type="button"
            href={info.href}
          >
            {info.title}
          </a>
        </div>
        <div className="flex flex-col  pb-4 w-full ">
          <button className="my-2 " type="button">
            <img src={info.action} className="w-[70%] m-auto" alt="logo Google PLay" />
          </button>
          <a
            className="bg-[#3e047c] p-2 m-1 border border-2 border-[#3e047c] text-center text-xs font-semibold text-white text-nowrap transition-all shadow-md uppercase hover:shadow-lg hover:bg-transparent hover:text-[#3e047c]"
            type="button"
            href={info.href1}
          >
            + info
          </a>
        </div>

      </div>
    </div>
  )
}

export default RoleCard
