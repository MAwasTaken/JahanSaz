// react
import React from 'react';
import { Link } from 'react-router-dom';

// styles

// packages

// components

// footer title
function FooterDiskLinks({ title, href }) {
	// jsx
	return (
		<li className="text-sm tracking-tighter text-zinc-700 md:text-lg">
			<Link className="transition-colors hover:text-teal-600" to={href}>
				{title}
			</Link>
		</li>
	);
}

// exports
export default FooterDiskLinks;
