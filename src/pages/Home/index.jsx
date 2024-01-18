import React, { useState } from 'react'
import { Primary } from '../../components/Button'
// import landing1 from "../../public/svg/landing1.svg"
import laptop from "../../public/svg/laptop.svg"
import {useTranslation} from "react-i18next";

const Home = () => {
	const { t } = useTranslation()
	
	const [curIndex, setCurIndex] = useState(0)
	const [curIndex2, setCurIndex2] = useState(4)

	return (
		
		<div className='w-full lg:mt-20 xl:mb-[10rem] overflow-x-clip overflow-y-visible '>
			{/********************************** LANDING **********************************/}
			<div className='w-[95%] max-w-[1400px] flex items-center mx-auto relative '>

				<div className='w-1/2 flex flex-col gap-16 mt-16 pb-16 md:pb-32 sm:pl-20'>
					<h5 className='title-gradient w-full lg:w-[500px] leading-[1.15] text-[1.3rem] md:text-[1.6rem] lg:text-[3rem] xl:text-6xl font-semibold pb-1 transition-all duration-300'>
						Manage Your Workforce with Fruitful Harmony
					</h5>
					<p className='text-[#474747] w-full lg:w-[500px]  text-[.8rem] xl:text-[1.1rem]'>
						The revolutionary solution designed to bring a harmonious and seamless experience to your HR processes.
					</p>
					<span className='w-fit lg:mx-0 text-[.7rem]'>
						<Primary>{t("LANDING.REQUEST_A_DEMO")}</Primary>
					</span>
				</div>
				<div className='absolute right-0 top-[10%] md:top-0 l w-[600px] md:w-[700px] lg:w-[900px] 2xl:w-[1000px] translate-x-[67%] xs:translate-x-[60%] md:translate-x-[50%] lg:translate-x-[48%] xl:translate-x-[40%] 2xl:translate-x-[25%]'><img alt='' src={ process.env.PUBLIC_URL + "/images/landing1.png"} className='  w-full h-full  z-[-10]' /></div>
			</div>
			{/********************************** Our Products **********************************/}
			<div id='our-products' className='w-full flex flex-col items-center my-[6rem] pb- max-w-[1400px] mx-auto'>
				<h5 className=' title-gradient-big leading-[1.15] text-[1.8rem] lg:text-[3rem] font-semibold pb-1 transition-all duration-300 text-center mb-5'>
							Our Products
				</h5>
				<div className='w-full md:w-[80%]  flex gap-5 justify-center md:justify-start '>
					<p onClick={()=> setCurIndex(0)}>Punica HR</p>
					<p onClick={()=> setCurIndex(1)}>Punica Docs</p>
					<p onClick={()=> setCurIndex(2)}>Punica Calender</p>
				</div>

				<div className='w-full flex justify-center mt-10'>
					<div className='w-full relative h-80'>
						{[0, 1, 2].map((entry, index) => (<>
							<div key={index} className={`w-full flex justify-center absolute transition-all duration-500 px-5 pb-10
							 ${index > curIndex ? "translate-x-[100%] opacity-0" : index < curIndex ? "translate-x-[-100%] opacity-0" : ""}`} >
							<div className='w-full flex flex-col md:flex-row gap-9 lg:gap-20 md:w-[80%]'>
								<div className='bg-red-500 w-full md:w-2/3 pt-[50%]  xl:pt-[40%] rounded-lg'></div>
									<div className='flex flex-col  items-center text-center md:items-start md:text-left md:w-[40%]'>
									<h5 className='title-gradient-big leading-[1.15] text-[1.6rem] lg:text-[2.5rem] font-semibold pb-10 transition-all duration-300'>Exercitation officia culpa?</h5>
									<p className='text-[#474747] text-[.85rem] lg:text-[1rem] '>Velit esse reprehenderit nostrud sint proident ut velit sit elit. Amet aliqua nostrud ex exercitation voluptate. Quis ullamco duis ex dolor aliquip.</p>
								</div>
							</div>		
						</div>
						</>))}

					</div>
				</div>
			</div>
				{/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
			<div id='The ' className='w-full flex flex-col items-center py-[12rem]'>
			<h5 className=' title-gradient-big leading-[1.15] text-[1.8rem] lg:text-[3rem] font-semibold pb-1 transition-all duration-300  text-center mb-14 px-5'>
					The Unity in Our Diversity
			</h5>
				<div className='w-full max-w-[1400px] flex flex-col md:flex-row mb-20 h-[19rem] overflow-y-visible'>
					<div className='w-[100%] lg:w-[2000px] lg:h-[400px] my-10 mx-auto -translate-x-[20%]'><img alt='' src={process.env.PUBLIC_URL + "/images/laptop.png"} className='w-full h-full' /></div>
					<div className='w-full flex flex-col items-end translate-x-2 '>
						{
							[0, 1, 2, 3, 4, 5, 6, 7].map((entry, index) => (
							<div className={`w-[95%] flex flex-col ${curIndex2 === index? "bg-[#8d0000]": "bg-[#ccc]"} my-1 p-2 transition-all duration-300 `} onClick={()=> setCurIndex2(index)}>
								<h2>Pariatur exercitation non</h2>
								 <p className={`w-2/3  ${curIndex2 === index? "h-[6rem] my-2" : "h-0"}  overflow-hidden transition-all duration-500`}>
									Sint eu nulla enim laborum ea exercitation aute commodo consequat qui eu consequat ad.
									Sit laborum occaecat incididunt labore. Ipsum adipisicing anim ut irure est.
								</p>
							</div>))
						}
					</div>

				</div>
			</div>
			{/* ----------------------------------------------------------------------------------------- */}
		</div>
	)
}

export default Home