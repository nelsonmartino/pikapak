import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuItem, MenuItems, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../index.css'
import logo from '../assets/imgs/logo.png';
import { Link } from 'react-router-dom';



const navigation = [
    { name: 'UNIRTE', href: '#unite', current: true },
    { name: 'QUIERO TRANSPORTAR', href: '#transportista', current: false },
    { name: 'QUIERO ENVIAR', href: '#quieroEnviar', current: false },
    { name: 'QUIERO ALMACENAR', href: '#hub', current: false },
    { name: 'COMO FUNCIONA', href: '#comoFunciona', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function NavBar() {



    return (
        <Disclosure as="nav" className="fixed  w-full bg-[url('./assets/imgs/Background_header.png')] bg-cover bg-center drop-shadow-lg bg-no-repeat shadow-lg z-50 opacity-95">
            <div className=" xl:w-[100%] flex sm:px-6">
                <div className="relative flex  h-16 items-center w-full   xl:space-x-20 ">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-4  text-gray-400 hover:bg-[#3C047B] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>

                    {/* LOGO Y MENU */}
                    <div className="flex items-center xl:w-min-full sm:items-stretch sm:justify-start xl:justify-between">

                        {/* LOGO Y SLOGAN */}
                        <div className="flex items-center xl:flex-col xl:w-[20%] w-screen justify-end xl:justify-start">
                            <a href="#home" className="flex h-full flex-col justify-items-end  relative right-14  items-start">
                                <img
                                    alt="logo_Pikapak"
                                    src={logo}
                                    className="flex justify-self-start h-16  sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto "
                                />
                                <p className='flex xl:justify-self-start  relative top-[-1rem] xl:left-6 left-7 z-10 flex-col  text-white text-xs'>A todos lados, mas rápido</p>
                            </a>
                        </div>


                        {/* Menú de Navegación */}
                        <div className='xl:flex xl:items-center xl:relative xl:left-10 xl:w-min-[50%]' >

                            <div className='xl:flex   w-full  '>
                                <div className="hidden sm:block w-full ">
                                    <div className="flex space-x-4 ">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-[#3C047B]  text-[#ffb200] content-center'
                                                        : 'text-gray-300 hover:border-[#3C047B] hover:text-[#ffb200]',
                                                    'rounded-md px-3 py-2 text-xs lg:text-sm font-medium ',
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Botones */}
                                {/* <div className=" xl:w-[30%] h-[4rem] flex justify-end items-center border">
                                        <div className='hidden sm:block xl:block md:block  justify-end ' > */}
                                <ul className="xl:flex xl:relative xl:left-[4rem] xl:w-[40%] items-center hidden ">
                                    <li className='h-[3rem] w-full   text-[14px] font-semibold text-white  hover:font-semibold hover:text-[#7D0DDA] p-4  ml-4'>
                                        <Link to="/auth">ACCESO</Link> </li>

                                    {/* <div className='hidden sm:block xl:block md:block   justify-end '> */}
                                    <li className=' w-full h-full text-[12px] bg-transparent text-[#fff] text-center leading-[17px] transition-all easy-in duration-[0.15s] inline-block mt-2 px-[10px] p-4 no-underline uppercase rounded-sm outline-none tracking-[2px] font-extrabold whitespace-nowrap hover:bg-[#3C047B] hover:text-white hover:shadow-lg hover:shadow-indigo-400/60'>
                                        <a href="#contact" >EMPEZAR </a> </li>
                                </ul>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>




                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                        {/* <button
                            type="button"
                            className="border-solid border-2 border-whiterelative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button> */}

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            {/* <div>
                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="h-8 w-8 rounded-full"
                                    />
                                </MenuButton>
                            </div> */}
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in "
                            >
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Your Profile
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Settings
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Sign out
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-[#3C047B]  text-white ' : 'text-gray-300 hover:bg-[#3C047B]  hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
                <nav className="xl:w-full  flex justify-end">
                    <ul className='sm:hidden xl:block md:block 2xl:block w-full flex justify-center items-center'>
                        <li>
                            <Link to="/auth" className='h-[3rem] w-[15.5rem]  font-semibold text-white  hover:font-semibold hover:text-[#3C047B] '>ACCESO</Link>
                        </li>
                    </ul>
                    <ul className='sm:hidden xl:block  md:block 2xl:block w-full'>
                        <li className='h-[3rem] w-[14.4rem] font-semibold w-full bg-[#3C047B] text-pink-300 hover:bg-[#3C047B] hover:text-white font-sans  flex justify-center items-center'>
                            <a href="#contact">EMPEZAR</a></li>

                    </ul>
                </nav>
            </DisclosurePanel>
        </Disclosure >

    )
}
export default NavBar;