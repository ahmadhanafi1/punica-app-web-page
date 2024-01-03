import React from 'react'
import {Primary} from '../Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
	console.log(process.env.PUBLIC_URL + "/images/punica-logo.svg")
	return (
		<div className='w-full h-[5rem] flex items-center justify-between px-6'>
			<img alt='logo' src={process.env.PUBLIC_URL + "/images/punica-logo.png"}
				className='h-[3rem]' /> 
			<div className='flex items-center justify-end gap-[2rem] lg:gap-[5rem] w-[80%] lg:pr-10 '>
				<div className='flex gap-4 lg:gap-12 flex-wrap'>
					<Link className='text-[#474747] hover:text-[#999999]  w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>Home</Link>
					<Link className='text-[#474747] hover:text-[#999999]  w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>Products</Link>
					<Link className='text-[#474747] hover:text-[#999999]  w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>Features</Link>
					<Link className='text-[#474747] hover:text-[#999999]  w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>Use Cases</Link>
					<Link className='text-[#474747] hover:text-[#999999]  w-fit lg:text-[1.2rem] transition-all duration-300 truncate'>Pricing</Link>
				</div>
			<Primary> Request a Demo</Primary>
			</div>
		</div>
	)
}

export default Navbar