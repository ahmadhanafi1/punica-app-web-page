import React from 'react'
import {Group, Text, Label, TextArea}  from "../../components/Form" 
import { Primary } from '../../components/Button'
import { useTranslation } from 'react-i18next'

const FAQ = () => {
	const {t} = useTranslation()
	return (
		<div className='w-[95%] max-w-[1200px]  items-center mx-auto relative '>
			<div className='w-full flex flex-col md:flex-row-reverse gap-10 my-[3rem]'>
			<img alt='' src={process.env.PUBLIC_URL + "/images/landing4.png"}
				className='w-[90%] mx-auto md:w-1/2 my-5 ' />
				<div className='w-[90%] mx-auto md:w-1/2 flex flex-col gap-[2rem] md:gap-[5rem] justify-center text-center md:justify-start md:text-left'>
					<h1 className='title-gradient w-full lg:w-[500px] leading-[1.15] text-[1.3rem] md:text-[2rem] xl:text-4xl font-semibold pb-1 transition-all duration-300'>
						{t("FAQ.MAIN_TITLE")}
					</h1>
					<p className='text-[#474747] w-full lg:w-[500px]  text-[.8rem] xl:text-[1.1rem]'>
						{t("FAQ.MAIN_TEXT")}
					</p>
				</div>
			
			</div>

			<Group className='w-full my-[6rem] bg-gradient-to-b from-[#F3F5F7] to-[#FFFAFA] shadow-2xl rounded-lg  p-[2rem] pb-[3.5rem] '>
				<div className='flex flex-col md:flex-row gap-0 md:gap-10 w-full h-full'>
				<div className='w-full md:w-[35%]'>
						<Label name='test1' label='title'>
							<Text />
						</Label>
						<Label name='test2' label='title'>
							<Text />
					</Label>
					<Label name='test3' label='title'>
							<Text />
						</Label>
				</div>
				<div className='w-full md:w-[65%]'>
				<Label name='test4' label='description'>
							<span className='h-full'><TextArea /></span>
						</Label>
				</div>
				</div>
				<div className='w-full flex flex-row-reverse lg:mt-4'>
					<Primary className="">Send</Primary>
				</div>
			</Group>
		</div>
	)
}

export default FAQ