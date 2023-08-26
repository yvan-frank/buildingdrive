import React, {useState} from 'react';
import Header from "../components/Header";
import img from "../assets/images/A3.jpg"

import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppState} from "../partials/AppContext";

const Surface = () => {
	const [userData, setUserData] = useAppState()
	const {control, handleSubmit,reset,getValues,setValue ,formState:{errors}, register} = useForm({
		mode:"onSubmit",
		defaultValues:userData
	})
	const submit = (data) => {
	    setUserData({...userData, ...data})
		navigate('/devis/contact')
	}
	const navigate = useNavigate()
	return (
		<div className='flex h-screen bg-yellow-500/10 flex-col overflow-x-hidden'>
			<Header />
			<div className='max-w-7xl mt-28 mx-5 lg:mx-auto mb-10 bg-white'>
				<form noValidate onSubmit={handleSubmit(submit)}>
					<div className="w-full  flex flex-col lg:flex-row justify-between p-5">
						<div className='lg:w-2/4 w-full lg:ml-5'>
							<h3 className='text-lg'>Surface</h3>
							<div className='flex flex-wrap'>
								<div className='flex flex-col  bg-yellow-500/30 items-center rounded-md p-2 m-2
									lg:h-32 lg:w-32 h-24 w-24 justify-center'>
									<div  className='flex flex-col items-center justify-center'>
										<label htmlFor='' className='text-gray-400/80 text-xs  cursor-pointer font-semibold'>
											Moins de 50m²
										</label>
										<input type="radio" name='surface' id=''
										       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 lg:w-10 lg:h-10 w-6 h-6'
											//onChange={handleChangeFacilities}
											   {...register('surface', {required:true})}
											   value='Moins de 50m²'
										/>

									</div>
								</div>
								<div className='flex flex-col  bg-yellow-500/30 items-center rounded-md p-2 m-2
									lg:h-32 lg:w-32 h-24 w-24 justify-center'>
									<div  className='flex flex-col items-center justify-center'>
										<label htmlFor='' className='text-gray-400/80 text-xs cursor-pointer font-semibold'>
											Entre 51 et 100m²
										</label>
										<input type="radio" name='surface' id=''
										       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 lg:w-10 lg:h-10 w-6 h-6'
											//onChange={handleChangeFacilities}
											   {...register('surface', {required:true})}
											   value='Entre 51 et 100m²'
										/>

									</div>
								</div>
								<div className='flex flex-col  bg-yellow-500/30 items-center rounded-md p-2 m-2
									lg:h-32 lg:w-32 h-24 w-24 justify-center'>
									<div  className='flex flex-col items-center justify-center'>
										<label htmlFor='' className='text-gray-400/80 text-xs cursor-pointer font-semibold'>
											101 et 150m²
										</label>
										<input type="radio" name='surface' id=''
										       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 lg:w-10 lg:h-10 w-6 h-6'
											//onChange={handleChangeFacilities}
											   {...register('surface', {required:true})}
											   value='101 et 150m²'
										/>

									</div>
								</div>
								<div className='flex flex-col  bg-yellow-500/30 items-center rounded-md p-2 m-2
									lg:h-32 lg:w-32 h-24 w-24 justify-center'>
									<div  className='flex flex-col items-center justify-center'>
										<label htmlFor='' className='text-gray-400/80 text-xs cursor-pointer font-semibold'>
											Plus de 150m²
										</label>
										<input type="radio" name='surface' id=''
										       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 lg:w-10 lg:h-10 w-6 h-6'
											//onChange={handleChangeFacilities}
											   {...register('surface', {required:true})}
											   value='Plus de 150m²'
										/>

									</div>
								</div>
								<div className='flex flex-col  bg-yellow-500/30 items-center rounded-md p-2 m-2
									lg:h-32 lg:w-32 h-24 w-24 justify-center'>
									<div  className='flex flex-col items-center justify-center'>
										<label htmlFor='' className='text-gray-400/80 text-xs cursor-pointer font-semibold'>
											Je ne sais pas
										</label>
										<input type="radio" name='surface' id=''
										       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 lg:w-10 lg:h-10 w-6 h-6'
											//onChange={handleChangeFacilities}
											   {...register('surface', {required:true})}
											   value='Non connue'
										/>

									</div>
								</div>

							</div>
							<div className='mt-5'>
								<h3 className='text-lg'>Présence animal?</h3>
								<div className='flex flex-col'>
									<div className='flex m-2'>

										<input type="radio" name='presence' id='oui'
										       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 w-5 h-5'
											//onChange={handleChangeFacilities}
											   {...register('presence', {required:true})}
											   value='Oui'
										/>
										<label htmlFor='oui' className='text-gray-400/80 text-xs  cursor-pointer font-semibold'>
											Oui
										</label>
									</div>
									<div className='flex m-2'>

										<input type="radio" name='presence' id='non'
										       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 w-5 h-5'
											//onChange={handleChangeFacilities}
											   {...register('presence', {required:true})}
											   value='Appartement'
										/>
										<label htmlFor='non' className='text-gray-400/80 text-xs  cursor-pointer font-semibold'>
											Non
										</label>
									</div>
									<div className='flex m-2'>

										<input type="radio" name='presence' id='ras2'
										       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 w-5 h-5'
											//onChange={handleChangeFacilities}
											   {...register('presence', {required:true})}
											   value='ras'
										/>
										<label htmlFor='ras2' className='text-gray-400/80 text-xs  cursor-pointer font-semibold'>
											Je ne sais pas
										</label>
									</div>
								</div>
							</div>
							<div className="mt-5">
								<h3 className='text-lg'>Fréquence de nettoyage</h3>
								<div className='flex flex-col'>
									<div className='flex m-2'>

										<input type="radio" name='nettoyage' id='ras'
										       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 w-5 h-5'
											//onChange={handleChangeFacilities}
											   {...register('nettoyage', {required:true})}
											   value='Régulière'
										/>
										<label htmlFor='ras' className='text-gray-400/80 text-xs  cursor-pointer font-semibold'>
											Régulière
										</label>
									</div>
									<div className='flex m-2'>

										<input type="radio" name='nettoyage' id='Occasionnelle'
										       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 w-5 h-5'
											//onChange={handleChangeFacilities}
											   {...register('nettoyage', {required:true})}
											   value='Occasionnelle'
										/>
										<label htmlFor='Occasionnelle' className='text-gray-400/80 text-xs  cursor-pointer font-semibold'>
											Occasionnelle
										</label>
									</div>

								</div>
							</div>
						</div>
						<div className="lg:w-2/4 w-full hidden lg:block">
							<div className="w-full">
								<img src={img} alt="" className='h-full rounded-xl' />
							</div>
						</div>

					</div>
					<div className="flex justify-between p-5">
						<button
							onClick={() => navigate('/devis/type')}
							className='px-5 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md'
						>Précédent</button>
						<button
							//onClick={next}
							className='px-5 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md'
						>Suivant</button>
					</div>
				</form>
			</div>

		</div>
	);
};

export default Surface;
