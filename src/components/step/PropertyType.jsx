import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {MdApartment} from "react-icons/md";
import {BsArrowRightCircle, BsFillBuildingsFill, BsFillHouseDoorFill, BsTextarea} from "react-icons/bs";
import {ImOffice} from "react-icons/im";
import InputField from "../InputField";
import {useNavigate} from "react-router-dom";
import {useAppState} from "../../partials/AppContext";

const PropertyType = () => {
	const [userData, setUserData] = useAppState()
	const [immeuble, setImmeuble] = useState('');
	const {control, handleSubmit,reset,getValues,setValue ,formState:{errors}, register} = useForm({
		mode:"onSubmit",
		defaultValues:userData
	})
	const decrement = (e) => {
		e.preventDefault()
	    const value = getValues('pieces')
		if (value === null) {

		}else {
			let num = parseInt(value)
			num--
			setValue('pieces', num)
		}

	}

	useEffect(() => {

	}, [immeuble]);

	const increment = (e) => {
		e.preventDefault()
		const value = getValues('pieces')
		if (value === null) {

		}else {
			let num = parseInt(value)
			num++
			setValue('pieces', num)
		}

	}

	const submit = (data) => {
		setUserData({...userData, ...data})
		if (data.type === 'Immeuble'){
			navigate('/devis/contact')
		}else {
			navigate('/devis/surface')
		}
	}
	const navigate = useNavigate()

	return (
		<form className='w-full' onSubmit={handleSubmit(submit)}>
			<h3 className='text-lg'>Type de propriété</h3>
			<div className='flex flex-wrap'>
				<div className='flex flex-col  bg-yellow-500/30 items-center rounded-md p-2 m-2
				lg:h-32 lg:w-32 h-24 w-24'>

					<MdApartment className='text-5xl' />
					<div  className='flex flex-col items-center'>
						<label htmlFor='' className='text-gray-400/60 text-sm lg:text-base cursor-pointer'>Appartement</label>
						<input type="radio" name='type' id=''
						       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 lg:w-10 lg:h-10 w-6 h-6'
							//onChange={handleChangeFacilities}
							   {...register('type', {required:true})}
							   value='Appartement'
						/>

					</div>
				</div>
				<div className='flex flex-col  bg-yellow-500/30 items-center rounded-md p-2 m-2
				lg:h-32 lg:w-32 h-24 w-24'>
					<BsFillHouseDoorFill className='text-5xl' />
					<div  className='flex flex-col items-center'>
						<label htmlFor='' className='text-gray-400/60 text-sm lg:text-base cursor-pointer'>Maison</label>
						<input type="radio" name='type' id=''
						       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 lg:w-10 lg:h-10 w-6 h-6'
							//onChange={handleChangeFacilities}
							   {...register('type', {required:true})}
							   value='Maison'
						/>

					</div>
				</div>
				<div className='flex flex-col  bg-yellow-500/30 items-center rounded-md p-2 m-2
				lg:h-32 lg:w-32 h-24 w-24'>

					<BsFillBuildingsFill className='text-5xl' />
					<div  className='flex flex-col items-center'>
						<label htmlFor='' className='text-gray-400/60 text-sm lg:text-base cursor-pointer'>Immeuble</label>
						<input type="radio" name='type' id=''
						       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 lg:w-10 lg:h-10 w-6 h-6'
							//onChange={handleChangeFacilities}
							   {...register('type', {required:true})}
							   value='Immeuble'
						       //onChange={ e => setImmeuble(e.target.value)}
						/>

					</div>
				</div>
				<div className='flex flex-col  bg-yellow-500/30 items-center rounded-md p-2 m-2
				lg:h-32 lg:w-32 h-24 w-24'>

					<ImOffice className='text-5xl' />
					<div  className='flex flex-col items-center'>
						<label htmlFor='' className='text-gray-400/60 text-sm lg:text-base cursor-pointer'>Bureaux</label>
						<input type="radio" name='type' id=''
						       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2 lg:w-10 lg:h-10 w-6 h-6'
							//onChange={handleChangeFacilities}
							   {...register('type', {required:true})}
							   value='Bureaux'
						/>

					</div>
				</div>

			</div>
			{/*<div>*/}
			{/*	<InputField*/}
			{/*		name='autre'*/}
			{/*		label="Autres (à préciser)"*/}
			{/*		type='text'*/}
			{/*		//icon={<AiOutlineUser className='h-6 w-6' />}*/}
			{/*		//placeholder=''*/}
			{/*		rules={{*/}
			{/*			//required: "Entrer votre nom"*/}
			{/*		}}*/}
			{/*		errors={errors}*/}
			{/*		control={control}*/}
			{/*		defaultValue=""*/}
			{/*	/>*/}
			{/*</div>*/}
			<div className='mt-5'>
				<h3 className='text-lg'>Nombre de pièce /cages d’escalier </h3>
				<div className='flex flex-col w-32 bg-yellow-500/30 h-32 items-center rounded-md p-2 m-2'>

					<BsTextarea className='text-5xl' />
					<div  className='flex flex-col items-center'>
						<label htmlFor='' className='text-gray-400/60 text-sm lg:text-base cursor-pointer'>Pièces</label>
						<div className='flex'>
							<button
								onClick={decrement}
								className='bg-gray-200 p-2 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'>-</button>

							<input type="text" name='' id='' defaultValue={1}
							       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 text-gray-400
															border-none rounded-sm mr-2 w-10 h-10'
								//onChange={handleChangeFacilities}
								   {...register('pieces', {
									   required:true,
									   validate: (val) => {
										   if (parseInt(val) <= 0) return 'Entrer un nombre supérieur à 0'
									   }
								   })}
								//value=''
							/>
							<button
								onClick={increment}
								className='bg-gray-200 p-2 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'>+</button>
						</div>

					</div>
					<span className='text-red-500 italic'>{errors?.pieces?.message}</span>
				</div>
			</div>
			<div className='flex justify-between mt-10 mb-10 lg:mb-0'>
				<button
					className='flex justify-between items-center px-5 py-3 rounded-2xl bg-blue-500 text-white text-lg font-bold
						lg:w-32 w-full'>
					<span>Suivant</span>
					<BsArrowRightCircle />
				</button>
			</div>
		</form>
	);
};

export default PropertyType;
