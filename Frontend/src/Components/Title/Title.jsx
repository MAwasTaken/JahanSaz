// react
import React from 'react';
import { Link } from 'react-router-dom';

// styles

// packages
import { HiArrowLeft } from 'react-icons/hi';

// components

// title
function Title({ titleText, haveButton, buttonText, buttonHref }) {
	// jsx
	return (
		<div className="flex h-[90px] items-center justify-between">
			{/* right items */}
			<div className="relative">
				<span className="font-Lalezar text-2xl tracking-tighter lg:text-3xl xl:text-4xl text-gray-800">
					{titleText}
				</span>
				<div className="absolute -top-1 right-0 h-[45px] w-[45px] rotate-45 rounded-lg bg-yellow-500/50 shadow-lg shadow-yellow-500/50 backdrop-blur-[0.5px]"></div>
			</div>
			{/* left items */}
			{haveButton && (
				<Link
					to={buttonHref}
					className="flex items-center gap-2 rounded-lg p-[10px] transition-colors hover:bg-yellow-500/50"
				>
					{/* button text */}
					<span className="font-Vazir text-sm tracking-tighter md:text-xl text-zinc-700">{buttonText}</span>
					<HiArrowLeft className="h-5 w-5" />
				</Link>
			)}
		</div>
	);
}

// exports
export default Title;
