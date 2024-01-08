import React from 'react'
import { Primary } from '../../components/Button'
import landing1 from "../../public/svg/landing1.svg"
import {useTranslation} from "react-i18next";

const Home = () => {
	const {t} = useTranslation()
	console.log(t)
	return (
		
		<div className='w-full lg:mt-20 h-[100vh]'>
			{/********************************** LANDING **********************************/}
			<div className='w-full flex md:block flex-col relative items-center'>
				<img alt='' src={landing1} className='md:absolute right-0  md:translate-x-[20%] w-[500px] lg:w-[700px] xl:w-[1000px]' />
				<div className='text-center md:text-left md:w-1/3 md:mt-[4rem] lg:mt-[9rem] md:pl-[5%] 2xl:pl-[15%] pt-[2rem] flex flex-col gap-16 '>
					<h5 className='w-[500px] leading-[1.15] text-[4vw] xl:text-6xl font-semibold pb-1'>
						Manage Your Workforce with Fruitful Harmony
					</h5>
					<p className='text-[#474747] w-[500px] text-[1.1rem]'>
						The revolutionary solution designed to bring a harmonious and seamless experience to your HR processes.
					</p>
					<span className='w-fit mx-auto md:mx-0'>
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