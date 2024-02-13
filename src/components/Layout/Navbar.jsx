import React, { useState } from 'react'
import {Primary} from '../Button'
import { NavLink } from 'react-router-dom'
import {MenuOutlined} from "@ant-design/icons"
import { useTranslation } from 'react-i18next'

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const {t} = useTranslation()
	return (
		<div className='w-full max-w-[1800px] mx-auto h-[3rem] lg:h-[5rem] flex items-center justify-between lg:px-6 relative'>
			
			<NavLink to={'/'}><img alt='logo' src={process.env.PUBLIC_URL + "/images/punica-logo.png"}
				className='h-[2.2rem] ml-[4%]' /></NavLink> 
				{/* For Laptop version */}
			<div className='hidden lg:flex items-center justify-end gap-[2rem] lg:gap-[5rem] w-[80%] lg:pr-10 '>
				<div className=' gap-4 lg:gap-12 flex-wrap flex'>
					<NavLink to={'/'} className='text-[#474747] hover:text-[#999999] w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>{t("NAVBAR.PRODUCTS")}</NavLink>
					<NavLink to={'/pricing'} className='text-[#474747] hover:text-[#999999] w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>{t("NAVBAR.PRICING")}</NavLink>
					<NavLink to={'/features'} className='text-[#474747] hover:text-[#999999] w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>{t("NAVBAR.FEATURES")}</NavLink>
				</div>
				<Primary>{t("NAVBAR.REQUEST_A_DEMO")}</Primary>
			</div>


			{/* For Mobile version */}
			<div className='flex lg:hidden text-4xl mr-2 h-full text-primary  justify-center items-center'>
				<span
					onClick={() => setMenuOpen(!menuOpen)}
					className={` transition-transform duration-300 ${menuOpen ? "rotate-[-90deg]" : ""}`}
				>
					<MenuOutlined />
				</span>
				<div onClick={() => {setMenuOpen(false)}} className={`w-[97.5%] absolute border-2 border-primary rounded-lg bg-[#fff] shadow-2xl top-[110%] left-[1.25%] flex flex-col z-[100] text-base items-center text-center transition-all duration-300
				${menuOpen ? "" : "invisible opacity-0 translate-y-[-90%] "} `}>
					<NavLink to={'/'} className='text-center py-4 border-b transition-all duration-300 mx-3 px-[5%] w-full rounded-lg bg-[#fff] hover:bg-[#ffd6d6]'>{t("NAVBAR.PRODUCTS")}</NavLink>
					<NavLink to={'/pricing'} className='text-center py-4 border-b transition-all duration-300 mx-3 px-[5%] w-full rounded-lg bg-[#fff] hover:bg-[#ffd6d6]'>{t("NAVBAR.PRICING")}</NavLink>
					<NavLink to={'/features'} className='text-center py-4 border-b mx-3 px-[5%] transition-all duration-300 w-full rounded-lg bg-[#fff] hover:bg-[#ffd6d6]'>{t("NAVBAR.FEATURES")}</NavLink>
					<NavLink to={'/'} className='text-center py-4 mx-3 px-[5%] w-full transition-all duration-300 bg-primary hover:bg-[#ffd6d6] hover:text-primary  text-white'>{t("NAVBAR.REQUEST_A_DEMO")}</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Navbar