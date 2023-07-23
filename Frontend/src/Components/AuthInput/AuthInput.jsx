// react
import React from 'react';

// styles

// packages
import { Field, ErrorMessage } from 'formik';

// components

// auth input
function AuthInput({ label, name, placeholder, type }) {
	// jsx
	return (
		<div className="mt-3 flex flex-col self-center md:mt-10">
			{/* label */}
			<span className="absolute right-[10px] text-sm font-bold leading-10 tracking-tighter text-zinc-700 md:text-xl md:leading-[48px]">
				{label}
			</span>
			{/* input */}
			<Field
				name={name}
				className="h-9 w-[200px] self-center rounded-md bg-gray-200 p-[10px] text-sm text-gray-800 shadow placeholder:text-xs placeholder:text-gray-400 md:h-12 md:w-[360px] md:text-xl md:placeholder:text-base"
				placeholder={placeholder}
				type={type}
			/>
			<ErrorMessage name={name}>
				{(errorMessage) => (
					<span className="mt-1 self-center text-[10px] font-bold tracking-tighter text-red-600 md:mt-2 md:text-sm ">
						{errorMessage}
					</span>
				)}
			</ErrorMessage>
		</div>
	);
}

// exports
export default AuthInput;