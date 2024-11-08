import { Link } from "react-router-dom"
import abeja from '../assets/imgs/p2.png'

function Tutos() {
    return (


        <div className="bg-[#6B14CF] text-center text-[#ffff] w-full h-screen text-4xl flex flex-col m-auto ">

            <h1 className="mt-[10%]">Proximamente en <span className="text-[#ffb200] text-5xl flex flex-col mt-4"><Link to="/">Pikapak ...  </Link> </span></h1>
            <div className="flex flex-col justify-center xl:mb-[15%] mb-[25%] items-center w-full h-full">

                <img src={abeja} alt="abeja pikapak" />
            </div>
        </div>


    )
}

export default Tutos