import React, { useState } from 'react'
import { Primary } from '../../components/Button'
import { useTranslation } from 'react-i18next'
import x from "../../public/svg/x.svg"
import tick from "../../public/svg/tixk.svg"

const Pricing = () => {
	const {t} = useTranslation()
	const [monthlyYearlySwitch, setMonthlyYearlySwitch] = useState('monthly')
	return (
		<>
			{/********************************** LANDING **********************************/}
			<div className='w-[95%] max-w-[1400px] flex flex-row-reverse items-center mx-auto relative '>

				<div className='w-1/2 flex flex-col gap-16 mt-16 pb-16 md:pb-32 sm:pr-15 items-end'>
					<h5 className='title-gradient w-full lg:w-[500px] leading-[1.15] text-[1.3rem] text-right md:text-[1.6rem] lg:text-[3rem] xl:text-6xl font-semibold pb-1 transition-all duration-300'>
						Manage Your Workforce with Fruitful Harmony
					</h5>
					<p className='text-[#474747] w-full lg:w-[500px] text-right text-[.8rem] xl:text-[1.1rem]'>
						The revolutionary solution designed to bring a harmonious and seamless experience to your HR processes.
					</p>
					<span className='w-fit lg:mx-0 text-[.7rem]'>
						<Primary>{t("LANDING.REQUEST_A_DEMO")}</Primary>
					</span>
				</div>
				<div className='absolute left-0 top-[10%] md:top-0 l w-[600px] md:w-[700px] lg:w-[900px] 2xl:w-[1000px] translate-x-[-67%] xs:translate-x-[-60%] md:translate-x-[-50%] lg:translate-x-[-48%] xl:translate-x-[-40%] 2xl:translate-x-[-25%]'><img alt='' src={ process.env.PUBLIC_URL + "/images/landing1.png"} className='  w-full h-full  z-[-10]' /></div>
			</div>
			{/* --------------------------------------------------------------------------------------------------- */}
			<div className='w-[95%] max-w-[1400px] flex flex-col items-center mx-auto'>
			<div className='mt-[12rem] w-full mb-[6rem]'>
				<h5 className=' title-gradient-big leading-[1.15] text-[1.8rem] lg:text-[3rem] font-semibold pb-1 transition-all duration-300 text-center mb-5'>
					Pricing
				</h5>
				<p className='text-[#474747] text-center text-[1.3rem] w-[75%] lg:w-[65%] mx-auto'> 
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices accumsan elit nec pretium. Phasellus feugiat commodo enim sed viverra.
				</p>
				{/* switch */}
				<div className='relative w-[15rem] border-[3px] border-primary rounded-3xl h-[3rem] mx-auto mt-[3rem] flex overflow-clip'>
					<p
						onClick={() => setMonthlyYearlySwitch("monthly")}
						className={`w-1/2 h-full flex justify-center items-center  cursor-pointer transition-all duration-500 text-sm ${monthlyYearlySwitch === "monthly" ? 'text-[#fff]' : ""}`}>Monthly</p>
					<p
						onClick={() => setMonthlyYearlySwitch("yearly")}
						className={`w-1/2 h-full flex justify-center items-center  cursor-pointer transition-all duration-500 text-sm ${monthlyYearlySwitch === "yearly" ? 'text-[#fff]' : ""}`}>Yearly</p>
					<div className={`absolute w-1/2 h-[100%] bg-primary top-[0%] left-[0%] z-[-10] transition-all duration-300
					${monthlyYearlySwitch === "yearly" ? 'translate-x-[100%]' : ""}`}></div>
				</div>
			</div>
			{/* switch over */}
			{/* prices */}
			<div className='w-[80%] flex gap-0 mb-[10rem]'>
				<div className='w-1/3 text-[#333333] pricing-gradient h-[25rem] flex flex-col p-5 pt-[3rem] items-center pr-14 '>
						<h1 className='title-gradient-big text-[2.5rem] font-[500]'>Essential</h1>
						<p className=''>
							EURO €
							<span className='price-text-gradient text-[4rem] font-[500] px-3'>3.99</span>
							/month
						</p>
						{/* description */}
						<div className='text-center flex flex-col gap-3 mt-4 font-[300]'>
							<p>Recommended for starters</p>
							<p>Core</p>
							<p>Lorem ipsum dorum nigadom abra kadab</p>
							<li>Duis non nulla quis enim elementum finibus.</li>
							<li>ed pulvinar eros pharetra orci euismod, non pellentesque nisi mattis.</li>
						</div>
				</div>
				<div className='flex flex-col items-center w-1/3 pricing-gradient pt-[2.5rem] pricing-shadow border z-50 scale-[1.15]'>
				<h1 className='title-gradient-big text-[2.5rem] font-[500]'>Essential</h1>
						<p className=''>
							EURO €
							<span className='price-text-gradient text-[4rem] font-[500] px-3'>3.99</span>
							/month
						</p>
						{/* description */}
						<div className='text-center flex flex-col gap-3 mt-4 font-[300]'>
							<p>Recommended for starters</p>
							<p>Core</p>
							<p>Lorem ipsum dorum nigadom abra kadab</p>
							<li>Duis non nulla quis enim elementum finibus.</li>
							<li>ed pulvinar eros pharetra orci euismod, non pellentesque nisi mattis.</li>
						</div>
				</div>
				<div className='w-1/3 text-[#333333] pricing-gradient flex flex-col  py-[3rem] items-center pl-14 pr-5 '>
						<h1 className='title-gradient-big text-[2.5rem] font-[500]'>Essential</h1>
						<p className=''>
							EURO €
							<span className='price-text-gradient text-[4rem] font-[500] px-3'>3.99</span>
							/month
						</p>
						{/* description */}
						<div className='text-center flex flex-col gap-3 mt-4 font-[300]'>
							<p>Recommended for starters</p>
							<p>Core</p>
							<p>Lorem ipsum dorum nigadom abra kadab</p>
							<li>Duis non nulla quis enim elementum finibus.</li>
							<li>ed pulvinar eros pharetra orci euismod, non pellentesque nisi mattis.</li>
						</div>
						{/* description finished */}
						{/* <Primary>BUY NOW</Primary>
						<Primary>COMPARE ALL FEATURES</Primary> */}
				</div>
				{/* Pricing finished */}
			</div>
			<div className='w-[95%] max-w-[1400px] flex flex-col items-center mx-auto'>
				<h5 className=' title-gradient-big leading-[1.15] text-[1.8rem] lg:text-[3rem] font-semibold pb-1 transition-all duration-300 text-center mb-5'>
					Lorem Ipsum Dolor!
				</h5>
				<p className='text-[#474747] text-center text-[1.3rem] w-[75%]  mx-auto'> 
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>
				<span className='my-[2.6rem]'><Primary >EXPLORE ALL FEATURES</Primary></span>

				<div className='w-full bg-[#F3F5F7] border-2 border-primary rounded-lg mb-[10rem] pb-5'>
					<div className='bg-primary  m-5 flex text-white rounded-lg font-[600]'>
						<span className='w-[30%] py-3 pl-6'>FEATURE</span>
						<div className='flex w-[70%] justify-center items-center text-center'>
							<span className='w-1/3 py-3'>ESSENTIAL</span>
							<span className='w-1/3 py-3'>BUSINESS PRO</span>
							<span className='w-1/3 py-3'>PREMIUM</span>
						</div>
					</div>
					<div className='mx-5 mb-1 flex rounded-lg '>
							<span className='w-[30%] py-3 pl-6'>Price</span>
							<div className='flex w-[70%] justify-center items-center text-center'>
							<span className='w-1/3 py-3'><p className='text-sm'>
								EURO €
								<span className='price-text-gradient text-[1.4rem] font-[500] px-3'>3.99</span>
								/month
							</p>
							</span>
							<span className='w-1/3 py-3'><p className='text-sm'>
								EURO €
								<span className='price-text-gradient text-[1.4rem] font-[500] px-3'>3.99</span>
								/month
							</p>
							</span>
							<span className='w-1/3 py-3'><p className='text-sm'>
								EURO €
								<span className='price-text-gradient text-[1.4rem] font-[500] px-3'>3.99</span>
								/month
							</p>
							</span>
						</div>
					</div>
					{[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((entry, index) => (
						
						<div className='mx-5 flex border-t-2 border-primary  '>
							<span className='w-[30%] py-3 pl-6 my-auto'>Lorem Ipsum</span>
							<div className='flex w-[70%] justify-center items-center text-center '>
							<span className='w-1/3 py-3'>Lorem Ipsum</span>
							<span className='w-1/3 py-3 flex justify-center items-center'><img src={tick} alt='' /></span>
							<span className='w-1/3 py-3 flex justify-center items-center'><img src={x} alt='' /></span>
							
						</div>
					</div>
					))}
				</div>
			</div>
		</div>
		</>
	)
}

export default Pricing