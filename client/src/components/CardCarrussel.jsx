
function CardCarrussel({ title, description, image }) {
  return (
    <div className="relative w-84 h-96 overflow-hidden rounded-lg shadow-lg group cursor-pointer ml-4 p-4 ">
      <img
        src={image}
        alt={title}
        className="w-full xl:h-64 h-full object-cover"
      />

      <div className="absolute bottom-10 left-0 right-0 p-6 bg-white bg-opacity-90 transition-transform duration-1000 translate-y-[6.5rem] group-hover:-translate-y-0  group-hover:bg-opacity-70 hover:mb-[-20px] transition-all p-4 ">
        <h2 className="font-extrabold xl:font-extrabold ">{title}</h2>
        <div className="flex items-center transform translate-y-full  bg-opacity-60 transition-transform duration-1000 group-hover:translate-y-0">
          <p className=" text-slate-900 p-2 ">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardCarrussel;