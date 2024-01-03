import React from 'react'

const Primary = ({children, size="medium", className}) => {
	return (
		<button
			className={`bg-[#8D0000] text-white px-6 py-3 border-0 rounded-3xl hover:bg-[#FDE3E3] hover:text-[#8d0000] hover:shadow-md
			transition-all duration-300 md:text-[.8rem] lg:text-base ${className}`}
		>{children}</button>
	)
}

export default Primary