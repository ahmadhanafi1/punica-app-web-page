import React from "react"

const Secondary = ({children, size="medium", className}) => {
	return (
		<button
			className={`bg-white text-primary px-6 py-3 rounded-3xl border-2 border-primary hover:bg-primary hover:text-white hover:shadow-md
			transition-all duration-300 md:text-[.8rem] lg:text-base ${className}`}
		>{children}</button>
	)
}

export default Secondary