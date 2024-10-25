import { Link } from "react-router-dom"


function Tutos() {
    return (
        <>        <div className="xl:hidden flex justify-center items-center   w-full">
            <h1 className=" text-3xl font-semibold text-black my-2">
                <Link to="/" className="text-[#ffb200] hover:shadow-lg">
                    Pikapak
                </Link>
            </h1>
        </div>
            <div className="bg-[#6B14CF] text-center text-[#ffff] py-20 w-full h-screen text-4xl">

                <h1>Videos Tutoriales</h1>
            </div>
        </>

    )
}

export default Tutos