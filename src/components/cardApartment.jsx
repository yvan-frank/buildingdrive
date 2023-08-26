import React, {useState} from 'react';
import imgHome3 from "../assets/images/A3.jpg";
import {AiFillStar} from "react-icons/ai";
import {BiBath, BiBed, BiUser} from "react-icons/bi";
import {FaVectorSquare} from "react-icons/fa";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import img2 from "../assets/images/A2.jpg";
import img3 from "../assets/images/A3.jpg";

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const CardApartment = () => {
	return (
		<div className='mr-2 mt-2 w-72 h-[27rem] bg-white rounded-lg border border-gray-400/20 shadow'>
			<div className='w-full h-full flex flex-col'>
				<div className='h-3/5 swiper-custom'>
					<Swiper
						//className='h-full text-yellow-500'
						modules={[Navigation, Pagination]}
						slidesPerView={1}
						spaceBetween={100}
						loop={false}
						mousewheel={true}
						pagination
						//navigation
						//draggable={true}
						cssMode={true}
						style={{height: "100%"}}
						//bulletClass={"background-color: #fff"}
					>
						<SwiperSlide>
							<img src={imgHome3} alt="" className='h-full rounded-t-lg' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={img2} alt="" className='h-full rounded-t-lg '/>
						</SwiperSlide>
						<SwiperSlide>
							<img src={img3} alt="" className='h-full rounded-t-lg '/>
						</SwiperSlide>

					</Swiper>
				</div>
				<div className='h-2/5 flex flex-col m-3'>
					<div className='flex items-center bg-blue-500/20 text-blue-500 w-14 justify-between p-2 rounded-md'>
						<AiFillStar className=' text-2xl mr-2' />
						<span className='font-black text-xl'>5</span>
					</div>
					<h3 className='text-base font-bold mt-5'>Duplex de de de de de d ed e </h3>
					<span className='text-base'>Lisbon</span>
					<div className='flex mt-2 justify-between'>
						<div className='group flex items-center text-xl relative'>
							<BiUser /> <span className='ml-2'>2</span>
							<span className="group-hover:opacity-100 transition-opacity bg-blue-500/50 px-1 text-sm text-gray-400 rounded-md absolute left-1/2
                                                 -translate-x-1/2 translate-y-full opacity-0 m-1 mx-auto">Voyageurs</span>
						</div>
						<div className='group flex items-center text-xl relative'>
							<BiBed /> <span className='ml-2'>2</span>
							<span className="group-hover:opacity-100 transition-opacity bg-blue-500/50 px-1 text-sm text-gray-400 rounded-md absolute left-1/2
                                                 -translate-x-1/2 translate-y-full opacity-0 m-1 mx-auto">Lits</span>
						</div>
						<div className='group flex items-center text-xl relative'>
							<BiBath /> <span className='ml-2'>2</span>
							<span className="group-hover:opacity-100 transition-opacity bg-blue-500/50 px-1 text-sm text-gray-400 rounded-md absolute left-1/2
                                                 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto inline-flex">Toilettes</span>
						</div>
						<div className='group flex items-center text-xl relative'>
							<FaVectorSquare /> <span className='ml-2'>2</span>
							<span className="group-hover:opacity-100 transition-opacity bg-blue-500/50 px-1 text-sm text-gray-400 rounded-md absolute left-1/2
                                                 -translate-x-1/2 translate-y-full opacity-0 m-1 mx-auto">153m2</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardApartment;
