import React, {useCallback, useEffect, useState} from 'react';
import Header from "../../components/Header";
import { useForm } from 'react-hook-form';
import InputField from "../../components/InputField";
import CheckBox from "../../components/Checkbox";
import {Amenities, Facilities, OtherFeatures} from "../../partials/Facilities";
import {useDropzone} from 'react-dropzone'
import {FaCloudDownloadAlt, FaTrash} from "react-icons/fa";
import {AiFillCloseCircle} from "react-icons/ai";
import axios from "axios";
import {baseUrl} from "../../Utils";
import {BiLoaderAlt} from "react-icons/bi";


const AddProperty = () => {
	const minCharacters = "Entrer un minimum de 5 caracteres"
	const requiredField = "Requis"
	const numberEnter = "N'entrer que des nombres"
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setValue
	} = useForm();

	//const [selectFiles, setSelectFiles] = useState(null);
	const [files, setFiles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [percentage, setPercentage] = useState(0);
	const onDrop = useCallback(acceptedFiles => {
		// Do something with the files
		console.log(acceptedFiles)
		if (acceptedFiles?.length){
			setFiles(previousFiles => [
				...previousFiles,
				...acceptedFiles.map((file =>
						Object.assign(file, {preview: URL.createObjectURL(file)})
				))
			])
		}
	}, [])
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: {
		'image/*': []
		}})

	const removeFile = (fileName) => {
		setFiles(files => files.filter(file => file.name !== fileName))
	}

	const [fileLoading, setFileLoading] = useState(true);
	const onLoadFile = (file) => {
		setFileLoading(false)
	    URL.revokeObjectURL(file)

	}

	const formFields = async (data) => {
		let formData = new FormData()

		let arrImg = Array.from(data.images)
		formData.append('name', data?.title)
		formData.append('type', data?.categorie)
		formData.append('guest', data?.guest)
		formData.append('rooms', data?.rooms)
		formData.append('bedrooms', data?.bedrooms)
		formData.append('toilets', data?.bathrooms)
		formData.append('outdoors', data?.outdoor)
		formData.append('services', data?.services)
		formData.append('size', data?.size)
		formData.append('address', data?.address)
		formData.append('code', data?.zip)
		formData.append('city', data?.city)
		formData.append('country', data?.country)
		formData.append('amenities[]', data?.amenities)
		formData.append('facilities[]', data?.facilities)
		formData.append('others[]', data?.others)
		formData.append('price', data?.price)
		arrImg.forEach(item => formData.append('images', item))

		const config = {
			onUploadProgress: (progressEvent) => {
				const {loaded, total } = progressEvent
				const percent = Math.floor((loaded * 100) / total);

				if (percent <= 100){
					setPercentage(percent)
				}
			},
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			withCredentials: true,
		};

		setLoading(true)
		await axios
			.post(baseUrl + 'user/add-property', formData, config)
			.then((res) => {
				console.log(res.data)
				setLoading(false)
			})
			.catch((error) => {
				setLoading(false)
				console.log(error.response)
			})
	}



	const [messageErrors, setMessageErrors] = useState(false);
	useEffect(() => {
		if (files.length > 0) setMessageErrors(false)
		else setMessageErrors(true)
	}, [files]);
	const submit = async (data) => {
		data.images = files
		console.log(files)
		if (files.length === 0) setMessageErrors(true)
		else {
			setMessageErrors(false)
			console.log(data)
			await formFields(data)

		}

	}

	return (
		<div className='flex h-screen bg-yellow-500/10 flex-col overflow-x-hidden'>
			<Header />

			<div className=' mt-20 px-5 lg:px-20 py-10'>
				<h1 className='text-xl tracking-wider'>A jouter une propriété</h1>
				<form onSubmit={handleSubmit(submit)} className='flex flex-col'>
					<div className='flex flex-col lg:flex-row w-full mt-2 lg:mt-10 bg-white lg:p-5 p-2 mb-1 rounded-lg'>
						<div className='lg:w-1/4 w-full'>
							<h4 className='text-base'>Description</h4>
						</div>
						<div className='lg:w-3/4 lg:px-40 px-5 w-full'>
							<div className='w-full flex flex-col'>
								<div className='w-full'>
									<InputField
										name='title'
										label="Titre"
										type='text'
										//placeholder=''
										rules={{
											required: requiredField,
											validate: (val) => {
												if (val.length < 5) return minCharacters
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
								<div className='w-full'>
									<InputField
										name='categorie'
										label="Catégorie"
										type='text'
										//placeholder=''
										rules={{
											required: requiredField,
											validate: (val) => {
												if (val.length < 5) return minCharacters
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
								<div className='w-full'>
									<InputField
										name='guest'
										label="Nombre de personnes autorisé"
										type='number'
										//placeholder=''
										rules={{
											required: requiredField,
											validate: (val) => {
												if (isNaN(val)) return numberEnter
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row w-full mt-2 lg:mt-10 bg-white lg:p-5 p-2 mb-1 rounded-lg'>
						<div className='lg:w-1/4 w-full'>
							<h4 className='text-base'>Details</h4>
						</div>
						<div className='lg:w-3/4 lg:px-40 px-5 w-full'>
							<div className='w-full flex flex-col lg:flex-row'>
								<div className='lg:w-1/2 w-full'>
									<InputField
										name='rooms'
										label="Chambres"
										type='text'
										placeholder='0'
										rules={{
											required: 'Requis*',
											validate: (val) => {
												if (isNaN(val)) return "Entrer un nombre"
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
								<div className='lg:w-1/2 w-full lg:ml-2'>
									<InputField
										name='bedrooms'
										label="Nombre de lits"
										type='text'
										placeholder='0'
										rules={{
											required: 'Requis*',
											validate: (val) => {
												if (isNaN(val)) return "Entrer un nombre"
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
							</div>
							<div className='w-full flex flex-col lg:flex-row'>
								<div className='lg:w-1/2 w-full'>
									<InputField
										name='bathrooms'
										label="Toilettes"
										type='text'
										//placeholder='Text'
										rules={{
											required: 'Requis*',
											validate: (val) => {
												if (isNaN(val)) return "Entrer un nombre"
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
								<div className='lg:w-1/2 lg:ml-2 w-full'>
									<InputField
										name='outdoor'
										label="Aménagements extérieurs"
										type='text'
										//placeholder='Text'
										rules={{
											validate: (val) => {
												if (val.length < 5) return "Entrer minimun 5 carateres"
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
							</div>
							<div className='w-full flex flex-col lg:flex-row'>
								<div className='lg:w-1/2 w-full'>
									<InputField
										name='services'
										label="Services (facultatif)"
										type='text'
										//placeholder='Text'
										rules={{
											required: requiredField,
											validate: (val) => {
												if (val.length < 5 ) return minCharacters
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
								<div className='lg:w-1/2 lg:ml-2 w-full'>
									<InputField
										name='size'
										label="Taille en m2"
										type='text'
										//placeholder='Text'
										rules={{
											required: requiredField,
											validate: (val) => {
												if (isNaN(val)) return numberEnter
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row w-full mt-2 lg:mt-10 bg-white lg:p-5 p-2 mb-1 rounded-lg'>
						<div className='lg:w-1/4 w-full'>
							<h4 className='text-base'>Localisation</h4>
						</div>
						<div className='lg:w-3/4 lg:px-40 px-5 w-full'>
							<div className='w-full flex flex-col lg:flex-row'>
								<div className='lg:w-1/2 w-full'>
									<InputField
										name='address'
										label="Adresse"
										type='text'
										//placeholder='0'
										rules={{
											required: requiredField,
											validate: (val) => {
												if (val.length < 5) return minCharacters
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
								<div className='lg:w-1/2 w-full lg:ml-2'>
									<InputField
										name='zip'
										label="Zip Code"
										type='text'
										//placeholder='0'
										rules={{
											required: requiredField,
											validate: (val) => {
												if (isNaN(val)) {
													return numberEnter
												} else if (val.length >= 5){
													return "Ne peut depasser 5 chiffres"
												}

											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
							</div>
							<div className='w-full flex flex-col lg:flex-row'>
								<div className='lg:w-1/2 w-full'>
									<InputField
										name='city'
										label="City"
										type='text'
										//placeholder='Text'
										rules={{
											required: requiredField,
											validate: (val) => {
												if (val.length < 5){
													return minCharacters
												}
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
								<div className='lg:w-1/2 w-full lg:ml-2'>
									<InputField
										name='country'
										label="Pays"
										type='text'
										//placeholder='Text'
										rules={{
											required: requiredField,
											validate: (val) => {
												if (val.length < 5) return minCharacters
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row w-full mt-2 lg:mt-10 bg-white lg:p-5 p-2 mb-1 rounded-lg'>
						<div className='lg:w-1/4 w-full'>
							<h4 className='text-base'>
								Sélectionnez les commodités et les fonctionnalités qui s'appliquent à votre annonce
							</h4>
						</div>
						<div className='lg:w-3/4 lg:px-40 px-5 w-full mt-5 lg:mt-0'>
							<h6>Equipements</h6>
							<div className='grid grid-cols-1 md:grid-cols-2 mt-2 lg:mt-0'>
								{
									Amenities.map((item, key) => {
										return (
											<div key={key} className='flex items-center '>
												<input type="checkbox" name={item} id={item}
												       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2'
													//onChange={handleChangeFacilities}
													   {...register('amenities', {required:true})}
													   value={item}
												/>
												<label htmlFor={item} className='text-gray-400/60 text-sm lg:text-base cursor-pointer'>{item}</label>
											</div>
										)
									})
								}
							</div>
							<h6 className='mt-8'>Installations</h6>
							<div className='grid grid-cols-1 md:grid-cols-2'>
								{
									Facilities.map((item, key) => {
										return (
											<div key={key} className='flex items-center '>
												<input type="checkbox" name={item} id={item}
												       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2'
													//onChange={handleChangeFacilities}
													   {...register('facilities', {required:true})}
													   value={item}
												/>
												<label htmlFor={item} className='text-gray-400/60 text-sm lg:text-base cursor-pointer'>{item}</label>
											</div>
										)
									})
								}
							</div>
							<h6 className='mt-8'>Autres installations</h6>
							<div className='grid grid-cols-1 md:grid-cols-2'>
								{
									OtherFeatures.map((item, key) => {
										return (

											<div key={key} className='flex items-center '>
												<input type="checkbox" name={item} id={item}
												       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2'
													//onChange={handleChangeFacilities}
													   {...register('others', {required:true})}
													   value={item}
												/>
												<label htmlFor={item} className='text-gray-400/60 text-sm lg:text-base cursor-pointer'>{item}</label>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row w-full mt-2 lg:mt-10 bg-white lg:p-5 p-2 mb-1 rounded-lg'>
						<div className='lg:w-1/4 w-full'>
							<h4 className='text-base'>
								Téléverser les photos de votre propriété
							</h4>
						</div>
						<div className='lg:w-3/4 lg:px-40 px-0 w-full'>
							<div className='w-full flex flex-col'>
								<div className='flex mb-5 flex-wrap justify-center mt-5 lg:mt-0'>
									{
										files.map((file) => {
											return (
												<div className='relative w-28 h-24 mr-5 mb-2 rounded-lg' key={file.preview}>
													<div
														onClick={() => removeFile(file.name)}
														className='h-8 w-8 bg-blue-500 rounded-full absolute right-0 top-0 z-10 text-yellow-500 -translate-y-2 translate-x-2
													text-2xl cursor-pointer flex items-center justify-center'>
														<FaTrash className='h-4 w-4'/>
													</div>
													{
														fileLoading && <div className={`${fileLoading ? 'absolute': 'hidden'}`}>En cours de chargement...</div>
													}
													<img src={file.preview} alt="" className='h-full w-full' onLoad={() => onLoadFile(file.preview)} />


												</div>
											)
										})
									}
								</div>
								<div {...getRootProps({
									className : 'cursor-pointer h-44 w-full p-5 border border-gray-400/10 rounded-lg flex items-center justify-center flex-col'
								})} >
									<FaCloudDownloadAlt className='text-3xl text-yellow-500/50' />
									<input {...getInputProps()} />
									{
										isDragActive ?
											<p>Déposez ici ...</p> :
											<p>Faites glisser une image ici, ou cliquez pour sélectionnez une image</p>
									}
									<div className='px-3 py-2 bg-blue-500 text-white rounded-md cursor-pointer mt-2'>
										Sélectionner une ou des images
									</div>
								</div>
								<div className='text-red-500'>{messageErrors ? 'Sélectionner au moins une photo' : ''}</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row w-full mt-2 lg:mt-10 bg-white lg:p-5 p-2 mb-1 rounded-lg'>
						<div className='lg:w-1/4 w-full'>
							<h4 className='text-base'>
								Tarif
							</h4>
						</div>
						<div className='lg:w-3/4 lg:px-40 px-5 w-full'>
							<div className='w-full flex flex-col'>
								<div className='lg:w-1/2 w-full'>
									<InputField
										name='price'
										label="Prix par nuit"
										type='text'
										//placeholder='0'
										rules={{
											required: requiredField,
											validate: (val) => {
												if (isNaN(val)) return numberEnter
											}
										}}
										errors={errors}
										control={control}
										defaultValue=""
									/>
								</div>
							</div>
						</div>
					</div>

					<button className='px-6 py-4 bg-blue-500/90 lg:w-1/4 w-full text-white font-semibold tracking-widest
						rounded-lg text-xl mt-10 inline-flex items-center justify-center'>
						{
							loading ? <span>Téléversement en cours...</span> : <span>Téléverser</span>
						}
						{loading && <BiLoaderAlt className='vans-spin ml-3' />}
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddProperty;
