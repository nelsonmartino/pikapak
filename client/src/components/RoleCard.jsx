const RoleCard = ({ info }) => {
  return (
    // <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full items-center">
    <div className="flex flex-col my-6 bg-white items-center w-10/12">
      <div className="flex h-56 m-2.5 overflow-hidden text-white rounded-md w-full justify-center">
        <img src={info.image} />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          {info.title}
        </h6>
        <p className="text-slate-600 leading-normal font-light text-pretty">
          {info.description}
        </p>
      </div>
      <div className="flex flex-row justify-evenly pb-4 pt-0 mt-2 w-full">
        <button
          className="rounded-md bg-slate-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          {info.action}
        </button>
        <button
          className="rounded-md bg-slate-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          + info
        </button>
      </div>
    </div>
  )
}

export default RoleCard
