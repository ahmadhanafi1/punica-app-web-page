import React from 'react'
import {Outlet} from "react-router-dom"
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
	return (
		<body className='flex flex-col h-[100svh] '>
		<header>
			<Navbar />
		</header>
		<main className='w-full lg:mt-20 xl:mb-[10rem] overflow-x-clip overflow-y-visible '>
			<Outlet />
		</main>
		{/* <footer className='mt-auto'>
			<Footer />
		</footer> */}
	</body>
	)
}

export default Layout