import React from 'react'
import { Primary } from '../../components/Button'
import landing1 from "../../public/svg/landing1.svg"
import {useTranslation} from "react-i18next";

const Home = () => {
	const {t} = useTranslation()
	console.log(t)
	return (
		
		<div className='w-full lg:mt-20 xl:mb-[10rem]'>
			{/********************************** LANDING **********************************/}
			<div className='w-full flex lg:block flex-col relative items-center'>
				<img alt='' src={landing1} className='lg:absolute right-0  lg:translate-x-[25%] w-[500px] lg:w-[700px] xl:w-[1200px] xl:-translate-y-[6rem] transition-all duration-300' />
				<div className='text-center lg:text-left lg:w-1/3 lg:mt-[9rem] lg:pl-[5%] 2xl:pl-[8%] pt-[2rem] flex flex-col gap-16 '>
					<h5 className='w-[500px] leading-[1.15] text-[4vw] xl:text-6xl font-semibold pb-1 transition-all duration-300'>
						Manage Your Workforce with Fruitful Harmony
					</h5>
					<p className='text-[#474747] w-[500px] text-[1.1rem]'>
						The revolutionary solution designed to bring a harmonious and seamless experience to your HR processes.
					</p>
					<span className='w-fit mx-auto lg:mx-0'>
						<Primary>{t("LANDING.REQUEST_A_DEMO")}</Primary>
					</span>
				</div>
			</div>
			{/********************************** Our Products **********************************/}
			<div id='our-products' className='w-full'>
				
			</div>
			
		</div>
	)
}

export default Home