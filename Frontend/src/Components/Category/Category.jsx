// react
import React from 'react';
import { Link } from 'react-router-dom';

// styles

// packages

// components

// category
function Category({ categoryName }) {
	return (
		<Link className="rounded-lg hover:bg-black/20 transition-colors bg-black/10 p-1 md:p-2 text-base md:text-xl font-bold tracking-tighter text-zinc-700">
			{categoryName}
		</Link>
	);
}

// exports
export default Category;
