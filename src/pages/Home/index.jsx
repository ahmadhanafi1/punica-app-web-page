import React, { useState } from 'react'
import { Primary } from '../../components/Button'
import { DownOutlined } from "@ant-design/icons"
import {useTranslation} from "react-i18next";

const Home = () => {
	const { t } = useTranslation()
	
	const [curIndex, setCurIndex] = useState(0)
	const [curIndex2, setCurIndex2] = useState(4)
	const tabData = [
		{
			title: t("HOME.TABS.PUNICA_HR_TITLE"),
			text: t("HOME.TABS.PUNICA_HR_DESCRIPTION"),
		},
		{
			title: t("HOME.TABS.PUNICA_DOCS_TITLE"),
			text: t("HOME.TABS.PUNICA_DOCS_DESCRIPTION"),
		},
		{
			title: t("HOME.TABS.PUNICA_CALENDER_TITLE"),
			text: t("HOME.TABS.PUNICA_CALENDER_DESCRIPTION"),
		},
	]
	const collapsableData = [
		{
			title: t("HOME.COLLAPSABLE.TIME_AND_ATTENDANCE_TITLE"),
			description: t("HOME.COLLAPSABLE.TIME_AND_ATTENDANCE_DESCRIPTION"),
		},
		{
			title: t("HOME.COLLAPSABLE.CENTRALIZED_INFORMATION_TITLE"),
			description: t("HOME.COLLAPSABLE.CENTRALIZED_INFORMATION_DESCRIPTION"),
		},
		{
			title: t("HOME.COLLAPSABLE.AUTOMATED_OFFBOARDING_ONBOARDING_TITLE"),
			description: t("HOME.COLLAPSABLE.AUTOMATED_OFFBOARDING_ONBOARDING_DESCRIPTION"),
		},
		{
			title: t("HOME.COLLAPSABLE.RAPID_REPORTING_TITLE"),
			description: t("HOME.COLLAPSABLE.RAPID_REPORTING_DESCRIPTION"),
		},
		{
			title: t("HOME.COLLAPSABLE.SELF_SERVICE_TITLE"),
			description: t("HOME.COLLAPSABLE.SELF_SERVICE_DESCRIPTION"),
		},
		{
			title: t("HOME.COLLAPSABLE.REQUEST_MANAGEMENT_TITLE"),
			description: t("HOME.COLLAPSABLE.REQUEST_MANAGEMENT_DESCRIPTION"),
		},
		{
			title: t("HOME.COLLAPSABLE.SOCIAL_ENGAGEMENT_TITLE"),
			description: t("HOME.COLLAPSABLE.SOCIAL_ENGAGEMENT_DESCRIPTION"),
		},
		
	]
	return (
		
		<>
			{/********************************** LANDING **********************************/}
			<div className='w-[95%] max-w-[1400px] flex items-center mx-auto relative '>

				<div className='w-1/2 flex flex-col gap-16 mt-16 pb-16 md:pb-32 sm:pl-15'>
					<h5 className='title-gradient font-sans w-full lg:w-[500px] leading-[1.15] text-[1.3rem] md:text-[1.6rem] lg:text-[3rem] xl:text-6xl font-semibold pb-1 transition-all duration-300'>
						{t("HOME.MAIN_HEADER")}
					</h5>
					<p className='text-[#474747] w-full lg:w-[500px]  text-[.8rem] xl:text-[1.1rem]'>
						{t("HOME.MAIN_TEXT")}
					</p>
					<span className='w-fit lg:mx-0 text-[.7rem]'>
						<Primary>{t("HOME.REQUEST_A_DEMO")}</Primary>
					</span>
				</div>
				<div className='absolute right-0 top-[10%] md:top-0 l w-[600px] md:w-[700px] lg:w-[900px] 2xl:w-[1000px] translate-x-[67%] xs:translate-x-[60%] md:translate-x-[50%] lg:translate-x-[48%] xl:translate-x-[40%] 2xl:translate-x-[25%]'><img alt='' src={ process.env.PUBLIC_URL + "/images/landing1.png"} className='  w-full h-full  z-[-10]' /></div>
			</div>
			{/********************************** Our Products **********************************/}
			<div id='our-products' className='w-full flex flex-col items-center my-[6rem] pb- max-w-[1400px] mx-auto'>
				<h5 className=' title-gradient-big leading-[1.15] text-[1.8rem] lg:text-[3rem] font-semibold pb-1 transition-all duration-300 text-center mb-5'>
							{t("HOME.OUR_PRODUCTS")}
				</h5>
				<div className='w-full md:w-[80%]  flex gap-5 justify-center md:justify-start'>
					<p className={`${curIndex === 0? "text-primary underline font-[500]": ""} cursor-pointer`} onClick={() => setCurIndex(0)}>{t("HOME.PUNICA_HR")}</p>
					<p className={`${curIndex === 1? "text-primary underline font-[500]": ""} cursor-pointer`} onClick={()=> setCurIndex(1)}>{t("HOME.PUNICA_DOCS")}</p>
					<p className={`${curIndex === 2? "text-primary underline font-[500]": ""} cursor-pointer`} onClick={()=> setCurIndex(2)}>{t("HOME.PUNICA_CALENDER")}</p>
				</div>

				<div className='w-full flex justify-center mt-10'>
					<div className='w-full relative h-80'>
						{tabData.map((entry, index) => (<>
							<div key={index} className={`w-full flex justify-center absolute transition-all duration-500 px-5 pb-10
							 ${index > curIndex ? "translate-x-[100%] opacity-0" : index < curIndex ? "translate-x-[-100%] opacity-0" : ""}`} >
							<div className='w-full flex flex-col md:flex-row gap-9 lg:gap-20 md:w-[80%]'>
								<div className='bg-red-500 w-full md:w-2/3 pt-[50%]  xl:pt-[40%] rounded-lg'></div>
									<div className='flex flex-col  items-center text-center md:items-start md:text-left md:w-[40%]'>
									<h5 className='title-gradient-big leading-[1.15] text-[1.6rem] lg:text-[2.5rem] font-semibold pb-10 transition-all duration-300'>{entry?.title}</h5>
										<p className='text-[#474747] text-[.85rem] lg:text-[1rem] '>{entry?.text}</p>
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
				{t("HOME.UNITY_IN_OUR_DIVERSITY")}
			</h5>
				<div className='w-full max-w-[1400px] flex flex-col md:flex-row  h-[19rem] overflow-y-visible mb-[35rem] md:mb-20'>
					<div className='w-[100%] lg:w-[2000px] lg:h-[400px] my-10 mx-auto -translate-x-[20%]'><img alt='' src={process.env.PUBLIC_URL + "/images/laptop.png"} className='w-full h-full' /></div>
					<div className='w-full flex flex-col items-end translate-x-2 '>
						{
							collapsableData.map((entry, index) => (
							<div className={`w-[95%] rounded-lg flex flex-col cursor-pointer pl-5 ${curIndex2 === index? "bg-[#8d0000]": "bg-[#ccc] "} my-1 py-3 transition-all duration-500`} onClick={() => {setCurIndex2(prev => prev === index? null : index)}}>
								<h2 className={`text-xl items-center flex gap-4 justify-between font-semibold ${curIndex2 === index? "text-[#fff]": "text-[#000]"}`}>{entry?.title} <DownOutlined className={`mt-[.13rem] font-extrabold transition-all mr-5 duration-300 ${curIndex2 === index? "rotate-90": ""}`} /></h2>
									<p className={`w-2/3 text-white text  ${curIndex2 === index? "max-h-[100rem] transition-[max-height] ease-in-out duration-[1s] ": "max-h-0 transition-[max-height] overflow-hidden ease-out duration-[.3s] "}
								 -[.9rem] overflow-hidden my-2 `}>
									{entry?.description}
								</p>
							</div>))
						}
					</div>

				</div>
			</div>
			{/* ----------------------------------------------------------------------------------------- */}
		</>
	)
}

export default Home