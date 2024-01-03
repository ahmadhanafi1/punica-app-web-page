import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className='w-full h-[20rem]  px-28'>
			<div className='w-full flex justify-between'>
				<div className='flex gap-[4rem]'>
					<div className=''>
						<h1 className='font-[500] mb-3'>About</h1>
						<div className='flex flex-col gap-3'> 
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>About us</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Blog</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Careers</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Jobs</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>In Press</Link>
						</div>
					</div>
					<div className=''>
						<h1 className='font-[500] mb-3'>Support</h1>
						<div className='flex flex-col gap-3'> 
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Contact us</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Online Chat</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Whatsapp</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Telegram</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Linked In</Link>
						</div>
					</div>
					<div className=''>
						<h1 className='font-[500] mb-3'>FAQ</h1>
						<div className='flex flex-col gap-3'> 
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Account</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Manage Deleveries</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Orders</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Payments</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Returns</Link>
						</div>
					</div>
					<div className=''>
					<h1 className='font-[500] mb-3'>Support</h1>
						<div className='flex flex-col gap-3'> 
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Contact us</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Online Chat</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Whatsapp</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Telegram</Link>
							<Link className='text-sm text-[#474747] hover:text-[#999999] w-[4.5rem] transition-all duration-300 '>Linked In</Link>
						</div>
					</div>
				</div>
				<div className='mt-10 flex flex-col gap-5'>
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
			<div className='w-full flex items-center justify-between mt-[3rem]'>
				<img alt='logo' src={process.env.PUBLIC_URL + "/images/punica-logo.png"}
					className='h-[2rem]' /> 
				<span className='text-gray-600 text-sm'>©2000-2021, All Rights Reserved</span>
			</div>
		</div>
	)
}

export default Footer