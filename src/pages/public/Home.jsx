import React, {Fragment, useState} from 'react';
import Header from "../../components/Header";
import imgHome1 from "../../assets/images/A1.jpg"
import imgHome2 from "../../assets/images/A2.jpg"
import imgHome3 from "../../assets/images/A3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Combobox, Listbox, Transition} from "@headlessui/react";
import {HiOutlineChevronUpDown} from "react-icons/hi2";
import {AiFillStar, AiOutlineCheck} from "react-icons/ai";

import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import {BiBath, BiBed, BiUser} from "react-icons/bi";
import {FaVectorSquare} from "react-icons/fa";
import CardApartment from "../../components/cardApartment";


const people = [
	{ id: 1, name: 'France' },
	{ id: 2, name: 'Italie' },
	{ id: 3, name: 'Belgique' },
	{ id: 4, name: 'Espagne' },
	{ id: 5, name: 'Allemagne' },
	{ id: 6, name: 'Portugual' },
]
const Home = () => {
	const [selected, setSelected] = useState(people[0])
	const [query, setQuery] = useState('')
	const filteredPeople =
		query === ''
			? people
			: people.filter((person) =>
				person.name
					.toLowerCase()
					.replace(/\s+/g, '')
					.includes(query.toLowerCase().replace(/\s+/g, ''))
			)
	return (
		<div className='flex h-screen bg-yellow-500/10 flex-col overflow-x-hidden'>
			<Header />
			<main className=''>
				<div className='relative'>
					<div className='p-32 '>
						<img src={imgHome1} alt="" className='rounded-3xl'/>
					</div>
					<div className='absolute inset-0 flex flex-col justify-between'>
						<div className='mx-10 mt-52 flex items-center'>
							<div className='flex bg-white w-96 p-5 rounded-tr-full flex-col'>
								<h1 className='text-5xl pt-20 pb-10 text-yellow-500'>
									Profitez de votre séjour.
								</h1>
								<p className='text-gray-400'>
									Choisissez parmi un large éventail d'hébergements proposés par BUILDING DRIVE
								</p>
							</div>
							<div className='-mt-32 mx-40 bg-white h-20 z-20 flex justify-center items-center rounded-3xl w-96'>
								<h3 className='text-2xl font-medium'>
									Trouvez votre séjour idéal
								</h3>
							</div>
						</div>

						<div className='mx-32 bg-blue-500 -translate-y-32 flex items-center p-5 justify-between'>
							<div className="top-16 w-96">
								<Combobox value={selected} onChange={setSelected}>
									<div className="relative mt-1">
										<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md
											focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
												focus-visible:ring-offset-2 focus-visible:ring-offset-yellow-500 sm:text-sm">
											<Combobox.Input
												className="w-full border-none py-5 pl-3 pr-10 text-sm leading-5 text-gray-400 focus:ring-0"
												displayValue={(person) => person.name}
												onChange={(event) => setQuery(event.target.value)}
											/>
											<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
												<HiOutlineChevronUpDown
													className="h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</Combobox.Button>
										</div>
										<Transition
											as={Fragment}
											leave="transition ease-in duration-100"
											leaveFrom="opacity-100"
											leaveTo="opacity-0"
											afterLeave={() => setQuery('')}
										>
											<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base
												shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
												{filteredPeople.length === 0 && query !== '' ? (
													<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
														Nothing found.
													</div>
												) : (
													filteredPeople.map((person) => (
														<Combobox.Option
															key={person.id}
															className={({ active }) =>
																`relative cursor-default select-none py-2 pl-10 pr-4 ${
																	active ? 'bg-yellow-500' : 'text-gray-400'
																}`
															}
															value={person}
														>
															{({ selected, active }) => (
																<>
											                        <span
												                        className={`block truncate ${
													                        selected ? 'font-medium' : 'font-normal'
												                        }`}
											                        >
											                          {person.name}
											                        </span>
																	{selected ? (
																		<span
																			className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																				active ? 'text-white' : 'text-yellow-500'
																			}`}
																		>
												                        <AiOutlineCheck className="h-5 w-5"  />
												                      </span>
																	) : null}
																</>
															)}
														</Combobox.Option>
													))
												)}
											</Combobox.Options>
										</Transition>
									</div>
								</Combobox>
							</div>
							{/*<div className=' p-3 bg-white rounded-md mx-2'>*/}
							{/*	<DateRangePicker />*/}
							{/*</div>*/}
							<div className=" top-16 w-56">
								<Listbox value={selected} onChange={setSelected}>
									<div className="relative mt-1">
										<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-5 pr-3 pl-10 text-left shadow-md
												focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white
												focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
												<span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 ">
									              <BiUser
										              className="h-5 w-5 text-gray-400"
										              aria-hidden="true"
									              />
									            </span>
											<span className="block truncate">{selected.name}</span>

										</Listbox.Button>
										<Transition
											as={Fragment}
											leave="transition ease-in duration-100"
											leaveFrom="opacity-100"
											leaveTo="opacity-0"
										>
											<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
												{people.map((person, personIdx) => (
													<Listbox.Option
														key={personIdx}
														className={({ active }) =>
															`relative cursor-default select-none py-2 pl-10 pr-4 ${
																active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
															}`
														}
														value={person}
													>
														{({ selected }) => (
															<>
											                      <span
												                      className={`block truncate ${
													                      selected ? 'font-medium' : 'font-normal'
												                      }`}
											                      >
											                        {person.name}
											                      </span>
																{selected ? (
																	<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">

																		<AiOutlineCheck className="h-5 w-5" aria-hidden="true" />

																	</span>
																) : null}
															</>
														)}
													</Listbox.Option>
												))}
											</Listbox.Options>
										</Transition>
									</div>
								</Listbox>
							</div>
							<div className='w-96'>
								<button className='w-full px-5 bg-yellow-500 p-5 rounded-md ml-2 text-white font-semibold tracking-wider'>
									Rechercher
								</button>
							</div>
						</div>
					</div>

				</div>
				<div className='w-full bg-blue-500 mb-32 pb-32'>
					<div className='mx-16'>
						<h3 className='text-white py-12'>
							Découvrez une sélection de nos maisons les plus réservées
						</h3>
						<div className='flex flex-wrap'>
							<CardApartment />
							<CardApartment />
							<CardApartment />
							<CardApartment />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
