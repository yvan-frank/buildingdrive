import {useAppState} from "../partials/AppContext";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import Header from "../components/Header";
import React, {useState} from "react";
import {AiOutlineUser} from "react-icons/ai";
import InputField from "../components/InputField";
import {MdLocationOn} from "react-icons/md";
import {BsArrowLeftCircle, BsPhone} from "react-icons/bs";
import emailjs from '@emailjs/browser';
import {BiLoaderAlt} from "react-icons/bi";
import {CiMail} from "react-icons/ci";


const Contact = () => {
	const [userData, setUserData] = useAppState()
	const {control, handleSubmit,reset,formState:{errors}, register} = useForm({
		mode:"onSubmit",
		defaultValues:userData
	})

	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);
	const submit = (data) => {
		setUserData({...userData, ...data})
		//console.log(data)
		if (data.type === 'Immeuble'){
			feedBack2('service_v9bmwgq', 'template_vy0e2vg', data, 'P8dteFmtyvHuSxqyt')
		}else {
			feedBack('service_v9bmwgq', 'template_vy0e2vg', data, 'P8dteFmtyvHuSxqyt')
		}

	}
	const feedBack = (serviceID, templateID, data, publicKey) => {
		setLoading(true)
		emailjs
			.send(serviceID, templateID, {
				'from_name': `Devis service de nettoyage pour ${data.name}`,
				'to_name': "Building Drive",
				'message': `ESTIMATION DE DEVIS POUR ${data.civility} ${data.name} ${data.lastname} \n
			              ADRESSE: ${data.address} ET TELEPHONE: ${data.telephone} \n
			              TYPE DE PROPRIETE: ${data.type} \n NOMBRE DE PIECES OU DE CAGES: ${data.pieces} \n 
			              SURFACE:${data.surface} \n PRESENCE ANIMAL: ${data.presence} \n 
			              FREQUENCE DE NETTOYAGE: ${data.nettoyage} \n
			              DESCRIPTION: ${data?.description} \n
			              ${data?.benefice} \n
			              ${data?.offer}`,
				'reply_to': data.email,
			}, publicKey)
			.then((res) => {
				//console.log('Success', res)
				setMessage('Votre devis a bien été soumis. Nous vous contacterons après examen. Merci!')
				setLoading(false)
				setError(false)
				reset()
				//setUserData()
			})
			.catch((error) => {
				setError(true)
				//console.error(error)
				setMessage('Une erreur est survenue lors de l\'envoi de votre devis. Veuillez réessayer plus tard ')
				setLoading(false)
			})
	}
	const feedBack2 = (serviceID, templateID, data, publicKey) => {
		setLoading(true)
		emailjs
			.send(serviceID, templateID, {
				'from_name': `Devis service de nettoyage pour ${data.name}`,
				'to_name': "Building Drive",
				'message': `ESTIMATION DE DEVIS POUR ${data.civility} ${data.name} ${data.lastname} \n
			              ADRESSE: ${data.address} ET TELEPHONE: ${data.telephone} \n
			              TYPE DE PROPRIETE: ${data.type} \n NOMBRE DE PIECES OU DE CAGES: ${data.pieces} \n 
			              DESCRIPTION: ${data?.description} \n
			              ${data?.benefice} \n
			              ${data?.offer}`,
				'reply_to': data.email,
			}, publicKey)
			.then((res) => {
				//console.log('Success', res)
				setMessage('Votre devis a bien été soumis. Nous vous contacterons après examen. Merci!')
				setLoading(false)
				setError(false)
				reset()
				//setUserData()
			})
			.catch((error) => {
				setError(true)
				//console.error(error)
				setMessage('Une erreur est survenue lors de l\'envoi de votre devis. Veuillez réessayer plus tard ')
				setLoading(false)
			})
	}

	const navigate = useNavigate()


	const back = () => {
		//navigate(-1)
		if (userData.type === 'Immeuble'){
			navigate('/devis/type')
		}else {
			navigate('/devis/surface')
		}
	}

	return (
		<div className='flex h-screen bg-yellow-500/10 flex-col overflow-x-hidden'>
			<Header />
			<div className='max-w-3xl mt-28 mx-5 lg:mx-auto mb-10 bg-white p-5 shadow-2xl'>
				<form noValidate onSubmit={handleSubmit(submit)} className='flex flex-col'>
					<div>
						<h3 className='text-lg mb-2'>Civilité</h3>
						<ul className="flex">
							<li>
								<input type="radio" id="mme" name="civility" value="Mme"
								       className="hidden peer"
								       {...register('civility', {
										   required: true
								       })}
								/>
								<label htmlFor="mme"
								       className="inline-flex items-center justify-center w-full p-4  bg-white border border-gray-400/10
							       rounded-lg cursor-pointer  peer-checked:bg-yellow-500/20 w-20">
									<div className="block">
										<div className="w-full text-lg text-gray-400/60">Mme</div>
									</div>
								</label>
							</li>
							<li>
								<input type="radio" id="m" name="civility" value="M"
								       className="hidden peer"
								       {...register('civility', {
									       required: true
								       })}
								/>
								<label htmlFor="m"
								       className="inline-flex items-center justify-center w-full p-4 bg-white border border-gray-400/10
							       rounded-lg cursor-pointer peer-checked:bg-yellow-500/20 w-20">
									<div className="block">
										<div className="w-full text-lg text-gray-400/60">M</div>
									</div>
								</label>
							</li>

						</ul>
					</div>
					<div className='lg:flex block'>
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
							icon={<AiOutlineUser className='h-6 w-6' />}
							//placeholder=''
							rules={{
								required: "Entrer votre prénom"
							}}
							errors={errors}
							control={control}
							defaultValue=""
						/>
					</div>
					<div>
						<InputField
							name='email'
							label="Votre email"
							type='text'
							icon={<CiMail className='h-6 w-6' />}
							//placeholder=''
							rules={{
								required: "Votre adresse email est requise",
								validate: (val) => {
									let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
									if (!emailRegex.test(val)) return "Adresse email invalide"
								}
							}}
							errors={errors}
							control={control}
							defaultValue=""
						/>
						<InputField
							name='address'
							label="Adresse, Ville ou code postal"
							type='text'
							icon={<MdLocationOn className='h-6 w-6' />}
							//placeholder=''
							rules={{
								required: "Veuillez renseigner ce champ"
							}}
							errors={errors}
							control={control}
							defaultValue=""
						/>
						<InputField
							name='telephone'
							label="Numéro de téléphone"
							type='text'
							icon={<BsPhone className='h-6 w-6' />}
							//placeholder=''
							rules={{
								required: "Numéro de téléphone est requis",
								validate: (val) => {
									if (isNaN(val)) return "Entrez un Numéro de téléphone valide "
									if (val.length < 8) return  "Entrez un Numéro de téléphone valide"
								}
							}}
							errors={errors}
							control={control}
							defaultValue=""
						/>

					</div>
					<div className='mt-3'>
						<label htmlFor="description" className='text-gray-400/60 lg:text-lg text-sm'>Description</label>
						<textarea name="description"  rows="4" {...register('description', {
							required: false
						})}
						          className='block border-none ring-1 ring-blue-500/10 focus:ring-1 focus:ring-blue-500/10
												focus:border-l-4 focus:border-2 rounded-md shadow w-full'></textarea>
					</div>
					<div className='flex flex-col'>
						<div className='flex mt-5 items-center'>

							<input type="checkbox" name='benefice' id='benefice'
							       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-5 w-5 h-5'
								//onChange={handleChangeFacilities}
								   {...register('benefice', {required:false})}
								   value="Je souhaite bénéficier de l'avance immédiate du crédit d'impôt pour ne payer que 50% de ma facture mensuelle."
							/>
							<label htmlFor='benefice' className='text-gray-400/80 text-lg  cursor-pointer font-semibold'>
								Je souhaite bénéficier de l'avance immédiate du crédit d'impôt pour ne payer que 50% de ma facture mensuelle.
							</label>
						</div>
						<div className='flex mt-5 items-center'>

							<input type="checkbox" name='offer' id='offer'
							       className='focus:ring-1 focus:ring-yellow-500 text-yellow-500 peer-checked:bg-yellow-500
															border border-gray-400/20 rounded-sm mr-5 w-5 h-5'
								//onChange={handleChangeFacilities}
								   {...register('offer', {required:false})}
								   value='Je souhaite recevoir les informations de BUINDING DRIVE (actualités, offres exceptionnelles, informations
								importantes, etc...)'
							/>
							<label htmlFor='offer' className='text-gray-400/80 text-lg  cursor-pointer font-semibold'>
								Je souhaite recevoir les informations de BUINDING DRIVE (actualités, offres exceptionnelles, informations
								importantes, etc...)
							</label>
						</div>
					</div>

					{
						message &&
						<div className={`p-3 bg-green-500/20 text-center text-green-500 mt-5 font-bold tracking-widest
						${error && 'bg-red-500/20 text-red-500'}`}>
							{message}
						</div>
					}
					<div className='flex justify-between lg:mt-5 flex-col lg:flex-row'>
						<button
							disabled={loading}
							onClick={back}
							className='px-5 py-2 bg-blue-500/50 text-white font-semibold tracking-wider inline-flex items-center justify-center
							hover:bg-blue-500 transition duration-300 ease-in-out mt-5 lg:mt-0'>
							<BsArrowLeftCircle className='lg:text-3xl text-xl mr-3' />
							<span>Précédent</span>
						</button>
						<button
							disabled={loading}
							className='px-5 py-2 bg-blue-500 text-white font-semibold tracking-wider mt-2 lg:mt-0
						hover:bg-yellow-500 duration-300 transition ease-in-out inline-flex items-center justify-center'>
							<span>Je demande un devis</span>
							{loading && <BiLoaderAlt className='text-xl ml-5 vans-spin' />}
						</button>
					</div>
				</form>
			</div>

		</div>
	);
};

export default Contact;