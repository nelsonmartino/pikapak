const RoleCard = ({ info }) => {
  return (
    <div className="flex flex-col my-6  p-4 items-center text-[#3e047c] rounded-xl shadow-xl group border-2 -gray-300  xl:w-72 w-[80%] ">

      <div className="flex p-4 overflow-hidden text-white w-full justify-center xl:h-[17rem] h-full">
        <img src={info.image} className="xl:w-auto w-[70%] p-2" alt={info.title} />
      </div>

      <div className="flex flex-col justify-between  flex-grow h-full">

        <div className="flex flex-col items-center  m-auto ">

          <p className="leading-normal xl:font-medium text-xl text-pretty h-20 ">
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
          <p className="leading-normal font-medium text-pretty text-2xl xl:text-xl ">
            {info.postDescription}
          </p>
          <h3
            className="p-2 w-full mt-[1rem] text-center xl:text-2xl  text-3xl font-semibold text-[#ffb200]  uppercase "
          >
            {info.title}
          </h3>
        </div>


        <div className="flex flex-col pb-4 w-full">
          <button className="mb-4" type="button">
            <img src={info.action} className="xl:w-[70%] w-[40%] m-auto" alt="logo Google PLay" />
          </button>
          <div className="flex justify-end">
            <a
              className="p-2 m-1 text-center xl:text-xl  text-3xl font-semibold text-[#3e047c] hover:text-[#ffb200] w-[30%]"
              href={info.href}
            >
              + info
            </a>

          </div>
        </div>

      </div>
    </div >
  )
}

export default RoleCard
