// react
import React, { useEffect, useState } from 'react';
import ProductBox from '../ProductBox/ProductBox';

// styles

// packages
import ReactPaginate from 'react-paginate';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';

// components

// paginate items
function PaginateProducts({ itemsPerPage, items }) {
	// first off set
	const [itemOffset, setItemsOffset] = useState(0);

	// calculate end off set
	const endOffset = itemOffset + itemsPerPage;

	// displayed items
	const currentItems = items.slice(itemOffset, endOffset);

	// pages count
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = (event) => {
		// set new off set
		const newOffset = event.selected * itemsPerPage;

		// set new offset to state
		setItemsOffset(newOffset);

		// scroll to top of page when page changes
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	// jsx
	return (
		<>
			<section className="mt-5 grid grid-cols-2 md:mt-10 lg:grid-cols-3">
				{/* items */}
				{currentItems.map((product, index) => (
					<ProductBox
						key={index}
						productCover={product.images}
						productTitle={product.productName}
						productPrice={product.price}
						productDiscount={product.discount}
						productSize={product.size}
						productHref="/"
					/>
				))}
			</section>
			<ReactPaginate
				containerClassName="flex items-center justify-center md:gap-x-3 gap-x-2 my-5 md:my-8"
				pageClassName="bg-black/10 text-gray-800 md:w-11 md:h-11 block w-7 h-7 md:w-11 rounded-md md:rounded-lg flex items-center justify-center cursor-pointer font-Lalezar text-xl md:text-[32px] outline-none hover:bg-black/20 relative"
				activeClassName="bg-teal-600/60 hover:bg-teal-600/60"
				pageLinkClassName="w-full h-full text-center absolute md:top-2.5 top-[2px]"
				breakLabel="..."
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				pageCount={pageCount}
				disabledClassName="hidden"
				previousLabel={
					<HiArrowSmRight className="h-7 w-7 rounded-md bg-teal-600/40 text-gray-800 hover:bg-teal-600/70 md:h-11 md:w-11 md:rounded-lg" />
				}
				nextLabel={
					<HiArrowSmLeft className="h-7 w-7 rounded-md bg-teal-600/40 text-gray-800 hover:bg-teal-600/70 md:h-11 md:w-11 md:rounded-lg" />
				}
				renderOnZeroPageCount={null}
			/>
		</>
	);
}

// exports
export default PaginateProducts;
