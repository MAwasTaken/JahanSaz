// react
import React from 'react';
import { Link } from 'react-router-dom';

// styles

// packages

// components

// curve title
function CurveTitle({ title, haveButton, buttonHref, buttonText, icon }) {
	// jsx
	return (
		<div className="flex justify-between">
			<div>
				{/* svg */}
				<div className="absolute -right-[2px] top-0 z-10 h-5 w-5 md:-right-1 md:h-9 md:w-9">
					<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_150_664)">
							<path
								d="M20 0H3.63635V4.28571C3.63635 11.3865 10.9626 17.1429 20 17.1429V0Z"
								fill="black"
								fillOpacity="0.2"
							/>
							<path
								d="M16.3636 2.85718H0V7.14289C0 14.2437 7.32624 20 16.3636 20V2.85718Z"
								fill="#EAB308"
								fillOpacity="0.5"
							/>
						</g>
						<defs>
							<clipPath id="clip0_150_664">
								<rect width="20" height="20" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
				{/* text */}
				<h4 className="font-Lalezar text-base text-gray-800 md:text-3xl">{title}</h4>
			</div>
			<div>
				{haveButton && (
					<Link
						to={buttonHref}
						className="flex items-center gap-[2px] rounded-lg p-[10px] transition-colors hover:bg-yellow-400/50 md:gap-1"
					>
						{/* icon */}
						{icon}
						{/* button text */}
						<span className="text-[10px] tracking-tighter text-zinc-700 md:text-sm">
							{buttonText}
						</span>
					</Link>
				)}
			</div>
		</div>
	);
}

// exports
export default CurveTitle;
