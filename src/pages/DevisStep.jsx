import React from 'react';
import PropertyType from "../components/step/PropertyType";
import Header from "../components/Header";
import img from "../assets/images/A1.jpg"

const DevisStep = () => {
	return (
		<div className='flex h-screen bg-yellow-500/10 flex-col overflow-x-hidden'>
			<Header />
			<div className='max-w-7xl mt-28 mx-5 lg:mx-auto mb-10'>
				<div className="w-full bg-white flex flex-col-reverse lg:flex-row justify-between p-5">
					<div className="lg:w-2/4 w-full">
						<div className="w-full">
							<img src={img} alt="" className='h-full rounded-xl' />
						</div>
					</div>
					<div className='lg:w-2/4 lg:ml-5 w-full'>
						<PropertyType />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DevisStep;
