// react
import React from 'react';
import { Link } from 'react-router-dom';

// styles

// packages

// components

// footer title
function FooterHeaderLink({ icon, href }) {
	// jsx
	return (
		<Link target="_blank" to={href} className="rounded-lg md:rounded-xl bg-yellow-500/50 p-1 md:p-2 text-gray-600 hover:shadow-product transition-shadow">
			{icon}
		</Link>
	);
}

// exports
export default FooterHeaderLink;
