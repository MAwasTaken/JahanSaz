// react
import React from 'react';
import { Link } from 'react-router-dom';

// styles

// packages

// components

// footer title
function FooterIconLink({ title, icon, linkTitle, linkHref }) {
	// jsx
	return (
		<li className="flex items-center justify-between">
			<div className="relative flex items-center gap-x-1 md:gap-x-2">
				<div>
					{/* circle */}
					<div className="absolute -bottom-[2px] -right-1 h-4 w-4 rounded-full bg-yellow-500/50 md:-bottom-2 md:h-6 md:w-6"></div>
					{/* icon */}
					<div className="text-gray-600">{icon}</div>
				</div>
				<span className="text-xs text-zinc-700 md:text-base">{title}</span>
			</div>
			<Link
				target="_blank"
				to={linkHref}
				className="text-sm text-gray-600 transition-colors hover:text-teal-500 md:text-lg"
			>
				{linkTitle}
			</Link>
		</li>
	);
}

// exports
export default FooterIconLink;
