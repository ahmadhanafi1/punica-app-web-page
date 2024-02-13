import React, { useState } from 'react'
import { Primary, Secondary } from '../../components/Button'
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
						{t("PRICING.MAIN_HEADER")}
					</h5>
					<p className='text-[#474747] w-full lg:w-[500px] text-right text-[.8rem] xl:text-[1.1rem]'>
					{t("PRICING.MAIN_TEXT")}
					</p>
					<span className='w-fit lg:mx-0 text-[.7rem]'>
						<Primary>{t("HOME.REQUEST_A_DEMO")}</Primary>
					</span>
				</div>
				<div className='absolute left-0 top-[10%] md:top-0 l w-[600px] md:w-[700px] lg:w-[900px] 2xl:w-[1000px] translate-x-[-67%] xs:translate-x-[-60%] md:translate-x-[-50%] lg:translate-x-[-48%] xl:translate-x-[-40%] 2xl:translate-x-[-25%]'><img alt='' src={ process.env.PUBLIC_URL + "/images/landing1.png"} className='  w-full h-full  z-[-10]' /></div>
			</div>
			{/* --------------------------------------------------------------------------------------------------- */}
			<div className='w-[95%] max-w-[1400px] flex flex-col items-center mx-auto mt-[2rem] lg:mt-[8rem] '>
			<div className=' w-full mb-[8rem]'>
				<h5 className=' title-gradient-big leading-[1.15] text-[1.8rem] lg:text-[3rem] font-semibold pb-1 transition-all duration-300 text-center mb-5'>
				{t("PRICING")}
				</h5>
				<p className='text-[#474747] text-center text-[1.3rem] w-[75%] lg:w-[65%] mx-auto'> 
				{t("PRICING.PUNICA_PRODUCT_OFFERS")}
				</p>
				{/* switch */}
				<div className='relative w-fit mx-auto'>
				{/* <div className='w-32 h-20 bg-gray-300 absolute right-[-65%] bottom-[-38%] after:w-0 after:h-0 after:border-y-transparent after:border-y-[20px] after:border-l-gray-900 after:border-l-[20x] after:absolute after:top-0 after:z-[1000]'></div> */}
				<div className='relative w-[15rem] border-[3px] border-primary rounded-3xl h-[3rem] mx-auto mt-[3rem] flex overflow-clip'>
				
					<p
						onClick={() => setMonthlyYearlySwitch("monthly")}
						className={`w-1/2 h-full flex justify-center items-center  cursor-pointer transition-all duration-500 text-sm ${monthlyYearlySwitch === "monthly" ? 'text-[#fff]' : ""}`}>{t("PRICING.MONTHLY")}</p>
					<p
						onClick={() => setMonthlyYearlySwitch("yearly")}
						className={`w-1/2 h-full flex justify-center items-center  cursor-pointer transition-all duration-500 text-sm ${monthlyYearlySwitch === "yearly" ? 'text-[#fff]' : ""}`}>{t("PRICING.YEARLY")}</p>
					<div className={`absolute w-1/2 h-[100%] bg-primary top-[0%] left-[0%] z-[-10] transition-all duration-300
					${monthlyYearlySwitch === "yearly" ? 'translate-x-[100%]' : ""}`}></div>
				</div>
			</div>
			</div>
			{/* switch over */}
			{/* prices */}
			<div className='w-[80%] md:w-[95%] lg:w-[80%] flex gap-0 mb-[10rem]'>
				<div className='w-1/3 text-[#333333] pricing-gradient h-[25rem] hidden md:flex flex-col p-5 pt-[3rem] items-center pr-14 '>
				<h1 className='title-gradient-big text-[1rem] lg:text-[1.7rem] font-[500]'>{t("PRICING.ESSENTIAL").toUpperCase()}</h1>
						<p className='text-sm mt-2'>
							EURO €
							<span className='price-text-gradient text-[1.5rem] lg:text-[2.5rem] font-[500] px-1 lg:px-3 '>3.99</span>
							/{t("PRICING.MONTH")}
						</p>
						{/* description */}
						<div className='text-center flex flex-col gap-3 mt-4 font-[300] text-[.5rem] lg:text-sm'>
							<p>Recommended for starters</p>
							<p>Core</p>
							<p>Lorem ipsum dorum nigadom abra kadab</p>
							<li>Duis non nulla quis enim elementum finibus.</li>
							<li>ed pulvinar eros pharetra orci euismod, non pellentesque nisi mattis.</li>
						</div>
				</div>
				<div className='relative flex flex-col items-center w-full md:w-1/3 pricing-gradient pt-[2.5rem] pricing-shadow border z-50 scale-[1.15] rounded-md md:rounded-[0]'>
				<div className='w-1/2 rounded-3xl absolute top-[-5.5%] bg-primary text-white py-3 text-center most-popular-shadow'>Most Popular</div>
				<h1 className='title-gradient-big text-[1rem] lg:text-[1.7rem] font-[500]'>{t("PRICING.BUSINESS_PRO").toUpperCase()}</h1>
						<p className='text-sm mt-2'>
							EURO €
							<span className='price-text-gradient text-[1.5rem] lg:text-[2.5rem] font-[500] px-1 lg:px-3 '>7.99</span>
							/{t("PRICING.MONTH")}
						</p>
						{/* description */}
						<div className='text-center flex flex-col gap-3 mt-4 font-[300] text-[.5rem] lg:text-sm'>
							<p>Recommended for starters</p>
							<p>Core</p>
							<p>Lorem ipsum dorum nigadom abra kadab</p>
							<li>Duis non nulla quis enim elementum finibus.</li>
							<li>ed pulvinar eros pharetra orci euismod, non pellentesque nisi mattis.</li>
						</div>
				</div>
				<div className='w-1/3 text-[#333333] pricing-gradient hidden md:flex flex-col  py-[3rem] items-center pl-14 pr-5 '>
						<h1 className='title-gradient-big text-[1.7rem] font-[500]'>{t("PRICING.PREMIUM").toUpperCase()}</h1>
						<p className='text-sm lg:text-base mt-2'>
							EURO €
							<span className='price-text-gradient text-[1.5rem] lg:text-[2.5rem] font-[500] px-1 lg:px-3'>19.99</span>
							/{t("PRICING.MONTH")}
						</p>
						{/* description */}
						<div className='text-center flex flex-col gap-3 mt-4 font-[300] text-[.5rem] lg:text-sm'>
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
			<div className='w-[95%] max-w-[1400px]  flex-col items-center mx-auto flex'>
				<h5 className=' title-gradient-big leading-[1.15] text-[1.8rem] lg:text-[2.5rem] font-semibold pb-1 transition-all duration-300 text-center mb-5'>
				{t("PRICING.DIFFERENT_PACKAGES_FOR_DIFFERENT_NEEDS")}
				</h5>
				<p className='text-[#474747] text-center text-[.95rem] lg:text-[1.2rem] w-[75%]  mx-auto'> 
						{t("PRICING.DIFFERENT_PACKAGES_FOR_DIFFERENT_NEEDS_TEXT")}
			</p>
				<span className='my-[2.6rem]'><Primary >{t("PRICING.EXPLORE_ALL_FEATURES")}</Primary></span>

				<div className='w-full bg-[#F3F5F7] border-2 border-primary rounded-lg mb-[10rem] pb-5 hidden md:block '>
					<div className='bg-primary  m-5 flex text-white rounded-lg font-[600]'>
						<span className='w-[30%] py-3 pl-6'>{t("PRICING.FEATURE")}</span>
						<div className='flex w-[70%] justify-center items-center text-center'>
							<span className='w-1/3 py-3'>{t("PRICING.ESSENTIAL").toUpperCase()}</span>
							<span className='w-1/3 py-3'>{t("PRICING.BUSINESS_PRO").toUpperCase()}</span>
							<span className='w-1/3 py-3'>{t("PRICING.PREMIUM").toUpperCase()}</span>
						</div>
					</div>
					<div className='mx-5 mb-1 rounded-lg flex '>
							<span className='w-[30%] py-3 pl-6'>{t("PRICING.PRICE").toUpperCase()}</span>
							<div className='flex w-[70%] justify-center items-center text-center'>
							<span className='w-1/3 py-3'><p className='text-[.75rem] lg:text-sm'>
								EURO €
								<span className='price-text-gradient text-[1.5rem] font-[500] px-2 lg:px-3'>3.99</span>
								/{t("PRICING.MONTH")}
							</p>
							</span>
							<span className='w-1/3 py-3'><p className='text-[.75rem] lg:text-sm'>
								EURO €
								<span className='price-text-gradient text-[1.5rem] font-[500] px-2 lg:px-3'>3.99</span>
								/{t("PRICING.MONTH")}
							</p>
							</span>
							<span className='w-1/3 py-3'><p className='text-[.75rem] lg:text-sm'>
								EURO €
								<span className='price-text-gradient text-[1.5rem] font-[500] px-2 lg:px-3'>3.99</span>
								/{t("PRICING.MONTH")}
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
			{/* Table finished */}
			<div className='w-[95%] max-w-[1400px] flex flex-col md:flex-row justify-center mx-auto gap-16 mb-[3rem] lg:mb-0'>
					<img src={process.env.PUBLIC_URL + 'images/landing3.png'} alt="" className='w-full md:w-1/2 ' />
					<div className=''>
						<h1
							className='title-gradient text-center md:text-left text-[1.8rem] lg:text-[2.5rem] font-[500] mb-7'>
						{t("PRICING.CONTACT_US_MAIN")}
						</h1>
						<p className='text-paragText mb-10 text-center md:text-left text-[.95rem] lg:text-[1.2rem] md:max-w-[25rem]'>
						{t("PRICING.CONTACT_US_TEXT")}
						</p>
						<div className='mx-auto lg:mx-0 w-fit'><Secondary size='small'>{t("PRICING.CONTACT_US")}</Secondary></div> 
					</div>
			</div>
		</div>
		</>
	)
}

export default Pricing