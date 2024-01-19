import React from 'react'
import { Primary } from '../../components/Button'
import { useTranslation } from 'react-i18next'

const Features = () => {
	const { t } = useTranslation() 
	return (
		<>
			{/********************************** LANDING **********************************/}
			<div className='w-[95%] max-w-[1400px] flex items-center mx-auto relative '>

				<div className='w-1/2 flex flex-col gap-16 mt-16 pb-16 md:pb-32 sm:pl-15'>
					<h5 className='title-gradient w-full lg:w-[500px] leading-[1.15] text-[1.3rem] md:text-[1.6rem] lg:text-[3rem] xl:text-6xl font-semibold pb-1 transition-all duration-300'>
						Features Lorem Ipsum Dolor
					</h5>
					<p className='text-[#474747] w-full lg:w-[500px]  text-[.8rem] xl:text-[1.1rem]'>
						The revolutionary solution designed to bring a harmonious and seamless experience to your HR processes.
					</p>
					<span className='w-fit lg:mx-0 text-[.7rem]'>
						<Primary>{t("LANDING.REQUEST_A_DEMO")}</Primary>
					</span>
				</div>
				<div className='absolute right-0 top-[10%] md:top-0 l w-[600px] md:w-[700px] lg:w-[900px] 2xl:w-[1000px] translate-x-[67%] xs:translate-x-[60%] md:translate-x-[50%] lg:translate-x-[48%] xl:translate-x-[40%] 2xl:translate-x-[25%]'>
					<img alt='' src={process.env.PUBLIC_URL + "/images/landing1.png"} className='  w-full h-full z-[-10]' />
				</div>
			</div>
			{/* ---------------------------------------------------------------------------------------------- */}
			<div id='our-products' className='w-full flex flex-col items-center  max-w-[1400px] mx-auto mt-[5rem] lg:mt-[10rem]'> 
			<div className='w-full flex justify-center '>
					<div className='w-full relative h-80'>
					<div  className={`w-full flex justify-center absolute transition-all duration-500 px-5 pb-10`} >
							<div className='w-full flex flex-col md:flex-row gap-9 lg:gap-20 md:w-[80%]'>
									<div className='bg-red-500 w-full md:w-2/3 pt-[50%]  xl:pt-[40%] rounded-lg'></div>
									<div className='flex flex-col  items-center text-center md:items-start md:text-left md:w-[40%]'>
									<h5 className='title-gradient-big leading-[1.15] text-[1.6rem] lg:text-[2.5rem] font-semibold pb-10 transition-all duration-300'>Time and Attendance</h5>
									<p className='text-[#474747] text-[.85rem] lg:text-[1rem] '>No more manual tracking. Easily monitor employee work hours, manage attendance, and ensure that everyone is accountable and punctual.</p>
								</div>
							</div>		
						</div>
					</div>
				</div>
			</div>
			{/* ------------------------------------------------------------------------------------------------------ */}
			<div  className='w-full flex flex-col items-center my-[6rem] max-w-[1400px] mx-auto mt-[12rem]'> 
				<h5 className=' title-gradient-big leading-[1.15] text-[1.8rem] lg:text-[3rem] font-semibold pb-1 transition-all duration-300 text-center mb-5'>
							The Unity in Our Diversity
				</h5>
				<p className='text-[#474747] text-center text-[1.5rem]'> 
					While each Punica application offers distinct features, they all share centralised data management, seamless integration, remote accessibility, and advanced analytics.
				</p>
				<div className='flex flex-col items-center lg:flex-row gap-12 lg:gap-7 mt-[10rem] px-3'>
					<div className='gradient relative shadow-md rounded-md w-[90%] max-w-[23rem] px-10 flex flex-col items-center justify-center text-center gap-6 py-12 '>
							<h1 className='title-gradient text-[2rem] font-semibold'>Punch Line 1</h1>
							<p className='text-paragText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
							<div className='w-[3rem] h-[3rem] rounded-[50%] absolute bg-primary top-[-1.5rem]'></div>
					</div>
					<div className='flex gap-12 lg:gap-7 flex-col md:flex-row items-center'>
						<div className='gradient relative shadow-md rounded-md w-[90%] max-w-[23rem] px-10 flex flex-col items-center justify-center text-center gap-6 py-12 '>
								<h1 className='title-gradient text-[2rem] font-semibold'>Punch Line 1</h1>
								<p className='text-paragText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
								<div className='w-[3rem] h-[3rem] rounded-[50%] absolute bg-primary top-[-1.5rem]'></div>
						</div>
						<div className='gradient relative shadow-md rounded-md w-[90%] max-w-[23rem] px-10 flex flex-col items-center justify-center text-center gap-6 py-12 '>
								<h1 className='title-gradient text-[2rem] font-semibold'>Punch Line 1</h1>
								<p className='text-paragText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
								<div className='w-[3rem] h-[3rem] rounded-[50%] absolute bg-primary top-[-1.5rem]'></div>
						</div>
					</div>
				</div>
			</div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
			<div className='w-full flex flex-col md:flex-row items-center mb-[6rem] max-w-[1400px] mx-auto mt-[7rem] lg:mt-[8rem] px-5'>
				<img alt='' src={process.env.PUBLIC_URL + "/images/landing2.png"}
					className='w-full md:w-1/2 p-5' />
				<div className='w-full md:w-1/2 flex flex-col gap-16 mt-16 pb-16 md:pb-32 md:pl-20 text-center md:text-left items-center md:items-start'>
					<h5 className='title-gradient w-full lg:w-[500px] leading-[1.15] text-[1.6rem] lg:text-[3rem] xl:text-6xl font-semibold pb-1 transition-all duration-300'>
						Features Lorem Ipsum Dolor
					</h5>
					<p className='text-[#474747] w-full lg:w-[500px] text-[.9rem] xl:text-[1.1rem]'>
						The revolutionary solution designed to bring a harmonious and seamless experience to your HR processes.
					</p>
					<span className='w-fit lg:mx-0 text-[.7rem] hidden md:block'>
						<Primary>{t("LANDING.REQUEST_A_DEMO")}</Primary>
					</span>
				</div>
			</div>
		</>
	)
}

export default Features