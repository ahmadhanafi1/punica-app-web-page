import React from 'react'
import { Link } from 'react-router-dom'
import { Secondary } from '../Button'
import { useTranslation } from 'react-i18next'

const Footer = () => {
	const {t} = useTranslation()
	return (
		<div className='w-full max-w-[1400px] mx-auto lg:px-28'>
			<div className='w-[95%] mx-auto p-5 mb-5 flex justify-between bg-primary rounded-lg items-center'>
				<p className='lg:text-xl text-white'>{t("FOOTER.KICKSTART_CAREER")}</p>
				<Secondary >{t("FOOTER.TRY_DEMO")}</Secondary>
			</div>
			<div className='w-full items-center flex justify-between flex-col lg:flex-row mt-10'>
				<div className='flex gap-5 lg:gap-[4rem]'>
					<div className=''>
						<h1 className='font-[500] mb-3'>{t("FOOTER.ABOUT")}</h1>
						<div className='flex flex-col gap-3'> 
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.ABOUT_US")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.BLOG")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.Careers")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.JOBS")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.IN_PRESS")}</Link>
						</div>
					</div>
					<div className=''>
						<h1 className='font-[500] mb-3'>{t("FOOTER.SUPPORT")}</h1>
						<div className='flex flex-col gap-3'> 
							<Link to="./question" className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.CONTACT_US")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.ONLINE_CHAT")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.WHATSAPP")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.TELEGRAM")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.TICKETING")}</Link>
						</div>
					</div>
					<div className=''>
						<h1 className='font-[500] mb-3'>{t("FOOTER.FAQ")}</h1>
						<div className='flex flex-col gap-3'> 
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.ACCOUNT")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.MANAGE_DELEVERIES")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.ORDERS")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.PAYMENTS")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.RETURNS")}</Link>
						</div>
					</div>
					<div className=''>
					<h1 className='font-[500] mb-3'>{t("FOOTER.SUPPORT")}</h1>
						<div className='flex flex-col gap-3'> 
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.CONTACT_US")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.ONLINE_CHAT")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.WHATSAPP")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.TELEGRAM")}</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>{t("FOOTER.TICKETING")}</Link>
						</div>
					</div>
				</div>
				<div className='mt-10 flex lg:flex-col gap-5'>
					<Link className='flex justify-between items-center'>
						<span className='text-[#474747]'>punicaapp</span>
					</Link>
					<Link className='flex justify-between items-center'>
						<span className='text-[#474747]'>punicaapp</span>
					</Link>
					<Link className='flex justify-between items-center'>
						<span className='text-[#474747]'>punicaapp</span>
					</Link>
				</div>
			</div>
			<div className='w-full flex items-center justify-between mt-[3rem] mb-20'>
				<img alt='logo' src={process.env.PUBLIC_URL + "/images/punica-logo.png"}
					className='h-[2rem]' /> 
				<span className='text-gray-600 text-sm '>©2000-2021, All Rights Reserved</span>
			</div>
		</div>
	)
}

export default Footer