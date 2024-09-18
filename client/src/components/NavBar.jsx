import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuItem, MenuItems, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../index.css'

const navigation = [
    { name: 'COMO FUNCIONA', href: '#comoFunciona', current: true },
    { name: 'UNIRTE', href: '#unite', current: false },
    { name: 'QUIERO TRANSPORTAR', href: '#quieroTransportar', current: false },
    { name: 'QUIERO ENVIAR', href: '#quieroEnviar', current: false },
    { name: 'QUIERO ALMACENAR', href: '#quieroAlmacenar', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function NavBar() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between  space-x-10">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-4  text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-between  sm:items-stretch sm:justify-start  ">
                        <div className="flex items-center w-[11rem] mr-[8rem]">
                            <div className=' flex-col items-center h-14 pl-72 xl:pl-0  xl:ml-4  min-w-[27rem] '>

                                <img
                                    alt="logo_Pikapak"
                                    src="../src/assets/logo.png"
                                    className="h-16 w-auto my-[-14px]  mr-24 "
                                />
                                <p className='flex flex-col w-52  text-white text-xs'>A todos lados, mas rápido</p>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block mt-2 ">
                            <div className="flex  space-x-6 items-center mt-2   buttonNab ">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md font-normal px-4 w-[7rem] h-[3rem] flex text-xs items-center justify-center text-center cursor-pointer',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className=" w-full h-[4rem] flex justify-end items-center mt-[10px]">
                            <div className='hidden sm:block xl:block md:block 2xl:hidden justify-end' >
                                <button className='h-[3rem] w-[8rem] font-semibold text-slate-100  hover:font-semibold hover:text-slate-400 '>LOG IN</button>
                            </div>

                            <div className='hidden sm:block xl:block md:block  2xl:hidden justify-end'>
                                <button className='h-[3.7rem] w-[8rem] mt-[-7px] font-semibold text-slate-100 hover:bg-slate-950 hover:text-white'>GET STARTED</button>
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
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
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
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
                <div className="w-full flex ">
                    <div className='sm:hidden xl:block md:block 2xl:block w-full '>
                        <button className='h-[3rem] w-[15.5rem] font-semibold text-slate-400 hover:text-slate-300'>LOG IN</button>
                    </div>

                    <div className='sm:hidden xl:block  md:block 2xl:block w-full'>
                        <button className='h-[3rem] w-[16.9rem] font-semibold bg-slate-900 text-slate-400 hover:bg-slate-950 hover:text-white'>GET STARTED</button>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure >
    )
}
export default NavBar;