import React from 'react'
import {Primary} from '../Button'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	console.log(process.env.PUBLIC_URL + "/images/punica-logo.svg")
	return (
		<div className='w-full max-w-[1800px] mx-auto h-[5rem] flex items-center justify-between px-6'>
			<img alt='logo' src={process.env.PUBLIC_URL + "/images/punica-logo.png"}
				className='h-[2.2rem] ml-[4%]' /> 
			<div className='flex items-center justify-end gap-[2rem] lg:gap-[5rem] w-[80%] lg:pr-10 '>
				<div className=' gap-4 lg:gap-12 flex-wrap hidden md:flex'>
					<NavLink to={'/'} className='text-[#474747] hover:text-[#999999] w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>Home</NavLink>
					<NavLink to={'/'} className='text-[#474747] hover:text-[#999999] w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>Products</NavLink>
					<NavLink to={'/pricing'} className='text-[#474747] hover:text-[#999999] w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>Pricing</NavLink>
					<NavLink to={'/features'} className='text-[#474747] hover:text-[#999999] w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>Features</NavLink>
					<NavLink to={'/'} className='text-[#474747] hover:text-[#999999] w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>Products</NavLink>
				</div>
				<Primary> Request a Demo</Primary>
			</div>
		</div>
	)
}

export default Navbar