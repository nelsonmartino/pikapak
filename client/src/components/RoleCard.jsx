const RoleCard = ({ info }) => {
  return (
    <div className="flex flex-col my-3 items-center text-[#3e047c] border-4 border-[#3e047c] w-56">
      <div className="flex h-20 m-2.5 overflow-hidden text-white rounded-md w-full justify-center">
        <img src={info.image} />
      </div>
      <div className="p-1 flex flex-col items-center">
        <p className=" leading-normal font-medium text-pretty h-20">
          {info.description}
        </p>
        <svg
          className="-rotate-90 w-[72px] h-[72px]"
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
      <div className="flex flex-col justify-evenly pb-4 pt-0 w-full">
        <button className="mx-12" type="button">
          <img src={info.action} alt="Google PLay" />
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
  )
}

export default RoleCard
