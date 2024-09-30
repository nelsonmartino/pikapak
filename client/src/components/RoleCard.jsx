const RoleCard = ({ info }) => {
  return (
    <div className="flex flex-col my-3 items-center text-[#3e047c] border-4 border-[#3e047c] w-56">
      <div className="flex h-20 m-2.5 overflow-hidden text-white rounded-md w-full justify-center">
        <img src={info.image} />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-xl font-semibold h-10">{info.title}</h6>
        <p className=" leading-normal font-medium text-pretty h-20">
          {info.description}
        </p>
      </div>
      <div className="flex flex-col justify-evenly pb-4 pt-0 w-full">
        <button className="mx-12" type="button">
          <img src={info.action} alt="Google PLay" />
        </button>
        <a
          className="bg-[#3e047c] p-2 m-1 border border-2 border-[#3e047c] text-center text-xs font-semibold text-white text-nowrap transition-all shadow-md uppercase hover:shadow-lg hover:bg-transparent hover:text-[#3e047c]"
          type="button"
          href={info.href}
        >
          + info
        </a>
      </div>
    </div>
  )
}

export default RoleCard
