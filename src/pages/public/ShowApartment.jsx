import React, {useState} from 'react';
import Header from "../../components/Header";
import {FaLocationDot} from "react-icons/fa6";
import img1 from "../../assets/images/A1.jpg"
import img2 from "../../assets/images/A2.jpg"
import img3 from "../../assets/images/A3.jpg"
import {AiOutlineClose} from "react-icons/ai";
import { Swiper,SwiperSlide  } from 'swiper/react';

import { Navigation, Scrollbar, Thumbs, EffectFade, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import Footer from "../../components/Footer";
import {BiBed, BiPlus, BiUser} from "react-icons/bi";
import {GiTowel} from "react-icons/gi";
import {MdClose, MdOutlineBathtub} from "react-icons/md";
import {BsCheck, BsPlusLg} from "react-icons/bs";
import CardApartment from "../../components/cardApartment";


const ShowApartment = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const sections = [
		{
			title: "A propos",
			content:
				"Building ",
		},
		{
			title: "Espace",
			content:
				"Building ",
		},
		{
			title: "Accès",
			content:
				"Building ",
		},
		{
			title: "Interactions",
			content:
				"Building ",
		},
		{
			title: "Autres informations",
			content:
				"Building ",
		}
	]

	return (
		<div className='flex h-screen bg-yellow-500/10 flex-col overflow-x-hidden'>
			<Header />

			<div className=' mt-20'>
				<div className='px-20'>
					<div className='bg-white h-64 w-full border-b-[5px] p-20 border-b-yellow-500'>
						<a href="#">Trouver d'autres biens immobiliers</a>
						<h1>Apartments 1 cdd</h1>
						<div className='flex mt-5 items-center border-b border-gray-400/10 pb-5 text-yellow-500 font-bold tracking-widest'>
							<FaLocationDot className='text-xl mr-2' />
							<span>Bonamoussadi</span>
						</div>
					</div>
					<div className='flex flex-col'>
						{/*afficher les images*/}

						<img src={img1} alt="" className='h-[26rem] w-auto'/>
						<div className='flex w-full'>
							<div className='flex items-center justify-between w-3/4 pr-5 rounded-md'>
								<Swiper
									// install Swiper modules

									modules={[Navigation, Scrollbar, Thumbs, EffectFade, Autoplay, Pagination]}
									effect='fade'
									slidesPerView={1}
									centeredSlides={true}
									navigation
									pagination
									speed={1000}
									thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
									//scrollbar={{ draggable: true }}
								>
									<SwiperSlide>
										<img src={img2} alt="" className='rounded-lg '/>
									</SwiperSlide>
									<SwiperSlide>
										<img src={img3} alt="" className='rounded-lg '/>
									</SwiperSlide>
								</Swiper>


							</div>
							<div className='w-1/4 sticky top-40 h-full'>
								<Swiper onSwiper={setThumbsSwiper} spaceBetween={2} slidesPerView={1} modules={[Thumbs]}
								className='flex flex-col'>
									<SwiperSlide>
										<img src={img2} alt="" className='rounded-lg '/>
									</SwiperSlide>
									<SwiperSlide>
										<img src={img3} alt="" className='rounded-lg '/>
									</SwiperSlide>
									<div className='mt-10'></div>
								</Swiper>
							</div>
						</div>
					</div>

					<div className='my-20 flex w-full'>
						<div className='flex flex-col w-3/4 mr-5 '>
							<div className='rounded-lg border border-gray-400/10 bg-white w-full p-10 mb-10'>
								<h2 className=''>Superbe Apt à Issy-les-Moulineaux</h2>
								<p className='mb-5 text-blue-600/60'>
									Appartement entier de 38m², étage : 5, accessible par ascenseur
								</p>
								<div className='bg-gray-400/10 w-full flex p-5 flex-col'>
									<div className='inline-flex items-center text-xl mb-5'>
										<BiUser className='mr-3' /><span>max. 4 voyageurs</span>
									</div>
									<div className='inline-flex items-center text-xl mb-5'>
										<GiTowel className='mr-3' /><span>Serviettes de toilette et linge de lit inclus</span>
									</div>
									<div className='inline-flex items-center text-xl mb-5'>
										<BiBed className='mr-3' /><span>Chambres</span>
									</div>
									<div className='inline-flex items-center text-xl mb-5'>
										<MdOutlineBathtub className='mr-3' /><span>Toilets</span>
									</div>
								</div>
							</div>
							<div className='rounded-lg border border-gray-400/10 bg-white w-full p-10 mb-10'>
								<h2>Equipements</h2>
								<div className='inline-flex items-center text-base font-semibold text-blue-600/50 m-2'>
									<MdClose className='h-6 w-6 p-0.5 rounded-full bg-gray-400 text-white mr-2' /><span className='line-through'>Air condionné</span>
								</div>
								<div className='inline-flex items-center text-base font-semibold text-blue-600/50'>
									<BsCheck className='h-6 w-6 p-0.5 rounded-full bg-gray-400 text-white mr-2' /><span className=''>Espace de travail</span>
								</div>
							</div>
							<div className='rounded-lg border border-gray-400/10 bg-white w-full p-10 mb-10'>
								<h2>Localisation</h2>
								<p className='mb-5 text-blue-600/60'>
									Vous pourrez voir la localisation précise après réservation.
								</p>
							</div>
							<div className='rounded-lg border border-gray-400/10 bg-white w-full p-10 mb-10'>
								<Accordion sectionss={sections} />
							</div>
							<div className='rounded-lg border border-gray-400/10 bg-white w-full p-10 mb-10'>
								<h2>Commentaires</h2>
								<p className='mb-5 text-blue-600/60'>
									Vous pourrez voir la localisation précise après réservation.
								</p>
							</div>
							<div className='rounded-lg border border-gray-400/10 bg-white w-full p-10'>
								<h2>Cette propriété est gérée par Building Drive</h2>
								<div className='p-5 bg-gray-400/10 rounded-md'>

								</div>
							</div>


						</div>
						<div className='w-1/4 relative'>
							<div className='sticky h-72 w-full rounded-lg border border-gray-400/10 bg-white top-32 p-5'>
								dds
							</div>
						</div>
					</div>
				</div>
				<div className='w-full bg-white'>
					<div className='px-20 py-10'>
						<h4>Logements Similaires</h4>
						<div className='flex flex-wrap'>
							<CardApartment />
							<CardApartment />
							<CardApartment />
							<CardApartment />
							<CardApartment />
							<CardApartment />
							<CardApartment />
							<CardApartment />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
// Composant Accordion qui prend en props une liste de sections
function Accordion({ sectionss }) {
	// Fonction pour gérer le changement d'état ouvert/fermé d'une section
	const toggleSection = (index) => {
		// Crée une copie du tableau des sections
		const newSections = [...sectionss];
		// Inverse l'état ouvert/fermé de la section à l'index donné
		newSections[index].open = !newSections[index].open;
		// Met à jour le tableau des sections avec la copie modifiée
		setSections(newSections);
	};

	// État local pour stocker le tableau des sections avec leur état ouvert/fermé
	const [sections, setSections] = useState(
		// Ajoute la propriété open à chaque section, initialisée à false
		sectionss.map((section) => ({...section, open: false}))
	);
	return (
		// Conteneur flexible qui affiche ses enfants en colonne
		<div className="flex flex-col w-full">
			{sections.map((section, index) => (
				// Composant AccordionItem pour chaque section, avec le titre, le contenu et la fonction toggleSection passés en props
				<AccordionItem
					key={index}
					title={section.title}
					content={section.content}
					toggleSection={() => toggleSection(index)}
					open={section.open}
				/>
			))}
		</div>
	);
}
// Composant AccordionItem qui prend en props le titre, le contenu et la fonction toggleSection d'une section, ainsi que son état ouvert/fermé
function AccordionItem({ title, content, toggleSection, open }) {
	return (
		// Conteneur de largeur 100%
		<div className="w-full">
			{/* Titre de la section, avec un effet de pointeur et un gestionnaire de clic */}
			<div className="p-4 bg-gray-200 cursor-pointer" onClick={toggleSection}>
				<div className='inline-flex items-center border-b border-gray-400/20 w-full pb'>
					<BsPlusLg className='text-3xl' />
					<h3 className='ml-2 text-blue-600/60'>{title}</h3>
				</div>
			</div>
			{/* Contenu de la section, avec une transition, une hauteur maximale qui dépend de l'état ouvert/fermé, et un débordement caché */}
			<div
				className={`transition-all max-h-0 overflow-hidden duration-1000 ease-in-out ${
					open ? "max-h-screen" : ""
				}`}
			>
				<p className="p-4 text-gray-400/60">{content}</p>
			</div>
		</div>
	);
}

export default ShowApartment;


