import React, {Fragment} from 'react';
import logo from "../assets/images/Logo.png"
import {Menu, Transition} from "@headlessui/react";
import {AiOutlineMenu} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import {homeLink} from "../partials/RouteLink";

const Header = () => {
	return (
		<div className='top-0 bg-white h-20 w-full py-5 px-5 lg:px-10 items-center flex border-b border-gray-400/10
			justify-between fixed z-50'>
			<NavLink
				to={homeLink}
				className='inline-flex items-center text-blue-500 font-semibold'>
				<img src={logo} alt="Building Drive" className='h-16' />
				<h3 className='hidden md:flex'>BUILDING DRIVE</h3>
			</NavLink>

			<div className='flex items-center'>
				<NavLink to='/'
				         className='text-blue-500 font-semibold tracking-widest hover:no-underline hover:text-yellow-500 uppercase px-3
				         hidden lg:block'
				>
					Service de conciergerie et de location courte durée
				</NavLink>
				<NavLink to='/devis/type'
				         className='text-blue-500 font-semibold tracking-widest hover:no-underline hover:text-yellow-500 uppercase px-3
				         hidden lg:block'
				>
					Service de nettoyage
				</NavLink>
				<div className="top-16 text-right block lg:hidden">
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 py-2.5 px-3 text-sm font-medium
								text-gray-400/20 border hover:bg-yellow-500/10 transition duration-500 ease-in-out"
							>

								<AiOutlineMenu
									className=" h-5 w-5 text-blue-500 hover:text-violet-100"
									aria-hidden="true"
								/>
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 mt-8 w-56 origin-top-right divide-y divide-gray-100
										rounded-md bg-white shadow-lg ">
								<div className="p-2">
									<Menu.Item>
										{({ active }) => (
											<NavLink
												to='/'
												className={`${
													active ? 'bg-yellow-500 text-white' : 'text-gray-400'
												} group flex w-full items-center rounded-md px-2 py-2 text-sm hover:no-underline`}
											>
												Service de conciergerie et de location courte durée

											</NavLink>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<NavLink
												to='/devis/type'
												className={`${
													active ? 'bg-yellow-500 text-white' : 'text-gray-400'
												} group flex w-full items-center rounded-md px-2 py-2 text-sm hover:no-underline`}
											>
												Service de nettoyage

											</NavLink>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>

						</Transition>
					</Menu>
				</div>
			</div>
		</div>
	);
};

export default Header;
