// react
import React from 'react';

// styles

// packages

// components

// category
function Category({ categoryName, changeFilterHandler }) {
	return (
		<button
			onClick={() => changeFilterHandler(categoryName)}
			className="rounded-lg bg-black/10 p-1 text-base font-bold tracking-tighter text-zinc-700 transition-colors hover:bg-black/20 md:p-2 md:text-xl"
		>
			{categoryName}
		</button>
	);
}

// exports
export default Category;
