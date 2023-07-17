// react
import React from 'react';

// styles

// packages

// components

// auth input
function AuthInput({ label, placeholder }) {
	return (
		<div className="mt-3 flex flex-col self-center md:mt-10">
			{/* label */}
			<span className="absolute right-[10px] text-sm font-bold leading-10 tracking-tighter text-zinc-700 md:text-xl md:leading-[48px]">
				{label}:
			</span>
			{/* input */}
			<input
				className="md:text-xl text-base placeholder:text-gray-400 placeholder:text-xs md:placeholder:text-base h-9 md:h-12 w-[200px] self-center rounded-md bg-gray-200 p-[10px] text-gray-800 shadow md:w-[360px]"
				placeholder={placeholder}
				type="text"
			/>
			<span className="mt-1 self-center text-[10px] font-bold tracking-tighter text-red-600 md:mt-2 md:text-sm ">
				ساختار {label} وارد شده صحیح نمی‌باشد!
			</span>
		</div>
	);
}

// exports
export default AuthInput;
