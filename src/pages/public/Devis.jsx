import React, {Fragment, useState} from 'react';
import Header from "../../components/Header";
import imgHome1 from "../../assets/images/A1.jpg"
import {AiFillDribbbleCircle, AiOutlineClose, AiOutlineUser} from "react-icons/ai";
import InputField from "../../components/InputField";
import {useForm} from "react-hook-form";
import {Amenities} from "../../partials/Facilities";
import {GrLocation} from "react-icons/gr";
import {CiLocationOn, CiMail} from "react-icons/ci";
import {BsPhone} from "react-icons/bs";
import {MdEmail, MdOutlineEmail} from "react-icons/md";
import {Dialog, Transition} from "@headlessui/react";
import PropertyType from "../../components/step/PropertyType";
import {useNavigate} from "react-router-dom";
import emailjs from "@emailjs/browser";
import {BiLoaderAlt} from "react-icons/bi";

const Devis = () => {
	const {control, handleSubmit,reset, formState:{errors}, register} = useForm()
	const [isOpen, setIsOpen] = useState(false);
	const [open, setOpen] = useState(false);
	const superficie = [
		'Moins de 50m2',
		'Entre 51 et 100m2',
		'Entre 101 et 150m2',
		'Plus de 150m2'

	]
	const type = [
		'Studio',
		'T1',
		'T2',
		'T3',
		'T4',
		'T5+',

	]

	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);
	const submit = (data) => {

		feedBack('service_v9bmwgq', 'template_vy0e2vg', data, 'P8dteFmtyvHuSxqyt')
	}
	const feedBack = (serviceID, templateID, data, publicKey) => {
		setLoading(true)
		emailjs
			.send(serviceID, templateID, {
				'from_name': `Devis service conciergerie et location courte durée pour ${data.name}`,
				'to_name': "Building Drive",
				'message': `Estimation de devis pour ${data.name} ${data.lastname} \n
			              Type de logement: ${data.type} \n Adresse de logement: ${data.logement} \n
			              Superficie: ${data.superficie} \n \n
			              Description:${data.message} \n`,
				'reply_to': data.email,
			}, publicKey)
			.then((res) => {
				//console.log('Success', res)
				setMessage('Votre devis a bien été soumis. Nous vous contacterons après examen. Merci!')
				setLoading(false)
				setError(false)
				reset()
			})
			.catch((error) => {
				setError(true)
				//console.error(error)
				setMessage('Une erreur est survenue lors de l\'envoi de votre devis. Veuillez réessayer plus tard ')
				setLoading(false)
			})
	}
	const closeModal = () => {
	  setIsOpen(!isOpen)
		reset()
	}
	const navigate = useNavigate()
	const closeModalN = () => {
		navigate('/devis/type')
		reset()
	}
	return (
		<>
			<div className='flex h-screen bg-yellow-500/10 flex-col overflow-x-hidden'>
				<Header />
				<main className=''>
					<div className='relative'>
						<div className='lg:p-32 p-10 mt-10 lg:mt-0'>
							<img src={imgHome1} alt="" className='rounded-3xl'/>
						</div>
						<div className='lg:absolute inset-0 flex flex-col justify-between'>
							<div className='-mt-52 lg:mt-52 flex flex-col lg:flex-row items-center w-full'>
								<div className='flex bg-white w-full lg:w-1/3 p-5 rounded-tr-full flex-col items-center'>
									<h1 className='text-5xl pt-20 pb-10 text-yellow-500'>
										Profitez de votre séjour.
									</h1>
									<p className='text-gray-400'>
										Choisissez parmi un large éventail d'hébergements proposés par BUILDING DRIVE
									</p>
								</div>
								<div className=' lg:mx-10 mx-0 flex flex-col items-center mt-5 justify-center'>
									<button
										onClick={closeModal}
										className='text-2xl font-medium px-5 py-2 shadow-2xl border border-gray-400/50
											bg-white z-20 flex justify-center items-center rounded-3xl w-full mb-5'>
										Service de conciergerie et location courte durée
									</button>
									<button
										onClick={closeModalN}
										className='text-2xl font-medium px-5 py-2 shadow-2xl border border-gray-400/50
											bg-white z-20 flex justify-center items-center rounded-3xl w-full mb-5'>
										Service de nettoyage
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
						</div>
					</div>
				</main>
			</div>

			<Transition appear show={!isOpen} as={Fragment}>
				<Dialog as="div" className="relative  z-50" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-blue-500 bg-opacity-50" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto ">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-2xl font-bold leading-6 text-gray-400"
									>
										Devis de la conciergerie et location courte durée
									</Dialog.Title>
									<div className="mt-6">
										<form className='w-full flex flex-col' onSubmit={handleSubmit(submit)}>
											<h4 className='text-lg'>Informations personnelles</h4>
											<div className='flex'>

												<InputField
													name='name'
													label="Nom"
													type='text'
													icon={<AiOutlineUser className='h-6 w-6' />}
													//placeholder=''
													rules={{
														required: "Entrer votre nom"
													}}
													errors={errors}
													control={control}
													defaultValue=""
												/>
												<InputField
													name='lastname'
													label="Prénom"
													type='text'
													//placeholder=''
													icon={<AiOutlineUser className='h-6 w-6' />}
													rules={{
														required: "Entrer votre prénom"
													}}
													errors={errors}
													control={control}
													defaultValue=""
												/>
											</div>
											<div className='flex'>

												<InputField
													name='email'
													label="Email"
													type='text'
													//placeholder=''
													icon={<CiMail className='h-6 w-6' />}
													rules={{
														//required: requiredField,
														validate: (val) => {
															//if (val.length < 5) return minCharacters
															let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
															if (!emailRegex.test(val)) return "Adresse email invalide"
														}
													}}
													errors={errors}
													control={control}
													defaultValue=""
												/>
												<InputField
													name='telephone'
													label="Téléphone"
													type='text'
													//placeholder='0 0 0 0 '
													icon={<BsPhone className='h-6 w-6' />}
													rules={{
														required: 'Entrer un numéro',
														validate: (val) => {
															if (isNaN(val)) return 'Entrer un numéro valide'
														}
													}}
													errors={errors}
													control={control}
													defaultValue=""
												/>
											</div>
											<div className='my-5'>
												<h4 className='text-lg'>Logements</h4>
												<InputField
													name='logement'
													label="Adresse de logement"
													type='text'
													icon={<CiLocationOn className='w-6 h-6' />}
													//placeholder=''
													rules={{
														required: 'Entrer une adresse de logement',
														validate: (val) => {

														}
													}}
													errors={errors}
													control={control}
													defaultValue=""
												/>
											</div>
											<label className='text-gray-400/60 lg:text-lg text-sm'>Superficie<span className='text-red-500'>*</span> </label>
											<div className='w-full flex flex-wrap mb-5'>
												{
													superficie.map((item, key) => {
														return (
															<div key={key} className='flex items-center w-44 '>
																<input type="radio" name={item} id={item}
																       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2'
																	//onChange={handleChangeFacilities}
																	   {...register('superficie', {required:true})}
																	   value={item}
																/>
																<label htmlFor={item} className='text-gray-400/60 text-sm lg:text-base cursor-pointer'>{item}</label>
															</div>
														)
													})
												}
											</div>
											<label className='text-gray-400/60 lg:text-lg text-sm'>Type de logement<span className='text-red-500'>*</span> </label>
											<div className='w-full flex flex-wrap mb-5'>
												{
													type.map((item, key) => {
														return (
															<div key={key} className='flex items-center w-44 '>
																<input type="radio" name={item} id={item}
																       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-2'
																	//onChange={handleChangeFacilities}
																	   {...register('type', {required:true})}
																	   value={item}
																/>
																<label htmlFor={item} className='text-gray-400/60 text-sm lg:text-base cursor-pointer'>{item}</label>
															</div>
														)
													})
												}
											</div>
											<textarea name="message"  rows="2" {...register('message', {
												required: false
											})}
											          className='block border-none ring-1 ring-blue-500/10 focus:ring-1 focus:ring-blue-500/10
												focus:border-l-4 focus:border-2 rounded-md shadow w-full'></textarea>
											{
												message &&
												<div className={`p-3 bg-green-500/20 text-center text-green-500 mt-5 font-bold tracking-widest
													${error && 'bg-red-500/20 text-red-500'}`}>
													{message}
												</div>
											}
											<button
												disabled={loading}
												className='px-5 py-2 bg-blue-500 text-white font-semibold tracking-wider mt-2 lg:mt-0
														hover:bg-yellow-500 duration-300 transition ease-in-out inline-flex items-center justify-center'>
												<span>Je demande un devis</span>
												{loading && <BiLoaderAlt className='text-xl ml-5 vans-spin' />}
											</button>
										</form>
									</div>

									<div className="mt-4">
										<button
											onClick={closeModal}
											className='absolute top-5 right-5 h-8 w-8 bg-yellow-500 flex items-center rounded-full justify-center
					                        drop-shadow-lg'>
											<AiOutlineClose />
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>

	);
};

export default Devis;
