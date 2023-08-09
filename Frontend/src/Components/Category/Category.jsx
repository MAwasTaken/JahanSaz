// react
import React from 'react';

// styles

// packages

// components

// category
function Category({ categoryName, changeFilterHandler, isActive }) {
	return (
		<button
			onClick={() => changeFilterHandler(categoryName)}
			className={`rounded-lg bg-black/10 p-1 text-base font-bold tracking-tighter text-zinc-700 outline-none transition-colors hover:bg-black/20 md:p-2 md:text-xl ${
				isActive ? 'bg-yellow-500/50 shadow-product hover:bg-yellow-500/50' : ''
			}`}
		>
			{categoryName}
		</button>
	);
}

// exports
export default Category;
