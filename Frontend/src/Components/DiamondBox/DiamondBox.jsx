// react
import React, { Children } from 'react';

// styles

// packages

// components

// diamond box
function DiamondBox({ text, children }) {
	return (
		<div className="relative">
			{/* container */}
			<div className="inline-block h-[122px] w-[122px] rotate-45 rounded-2xl bg-white shadow-box lg:h-[212px] lg:w-[212px]"></div>
			{/* icon */}
			<div className="absolute top-0 flex h-[74px] w-full items-center justify-center lg:h-[130px]">
				{children}
			</div>
			{/* text */}
			<span className="absolute top-[75px] z-10 mx-auto my-auto flex w-full items-center justify-center font-Lalezar text-sm lg:top-2/3 lg:text-xl">
				{text}
			</span>
		</div>
	);
}

export default DiamondBox;
