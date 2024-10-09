
function CardCarrussel({ title, description, image }) {
  return (
    <div className="relative flex justify-center items-center m-auto xl:w-[17rem] xl:h-[22rem] h-72 w-[90%] overflow-hidden rounded-xl shadow-xl group cursor-pointer  border-2 border-gray-300 ">
      <img
        src={image}
        alt={title}
        className="flex self-start xl:h-[65%] h-[90%] xl:mb-4 object-cover"
      />

      <div className="absolute xl:h-[13.5rem] bottom-0 left-0 right-0  bg-opacity-40 transition-transform duration-1000 xl:translate-y-[8rem] translate-y-[6rem] group-hover:translate-y-[2rem]  xl:group-hover:-translate-y-0  w-full group-hover:bg-opacity-20 transition-all xl:p-2 xl:flex xl:justify-center  xl:w-[100%]">
        <div className="w-full xl:w-[15rem]">
          <div className="flex justify-between ">
            <h2 className="font-extrabold xl:font-extrabold text-[1.3rem] flex self-start  mt-[-55px] pl-4 p-2 xl:w-full bg-gray-200 bg-opacity-60 ">{title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 flex-shrink-0 transform transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>

            </h2>
          </div>

          <div className="flex items-center transform translate-y-full bg-opacity-60 transition-transform duration-1000 group-hover:translate-y-0  transition-all ">
            <p className=" text-slate-900  p-4 pb-4  mb-6 bg-gray-200 bg-opacity-60">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCarrussel;