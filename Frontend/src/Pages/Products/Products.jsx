// react
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// styles

// packages

// redux
import {
	getAllProductsFromServer,
	getFilteredProductsFromServer
} from '../../Services/Redux/Slices/Products';
import { getProductsCategoriesFromServer } from '../../Services/Redux/Slices/Categories';

// components
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import DiamondTitle from '../../Components/DiamondTitle/DiamondTitle';
import Category from '../../Components/Category/Category';
import PaginateProducts from '../../Components/PaginateProducts/PaginateProducts';

// products
function Products() {
	// document title
	document.title = 'جهان‌ساز | JahanSaz - محصولات';

	// GET all product from state
	let products = useSelector((state) => state.products);

	// GET products categories from state
	const categories = useSelector((state) => state.categories);

	// axios dispatch hook
	const dispatch = useDispatch();

	// mounting SideEffects
	useEffect(() => {
		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

		// GET products categories when mounting
		dispatch(getProductsCategoriesFromServer());

		// GET all products when mounting
		dispatch(getAllProductsFromServer());
	}, []);

	// active filter name
	const [activeFilter, setActiveFilter] = useState('');

	// change filter when click filter button
	const changeFilterHandler = (categoryName) => {
		// handling active and de active filter
		if (categoryName === activeFilter) {
			dispatch(getAllProductsFromServer());
			setActiveFilter('');
		} else {
			dispatch(getFilteredProductsFromServer(categoryName));
			setActiveFilter(categoryName);
		}
	};

	// jsx
	return (
		<div>
			{/* header */}
			<Header />
			<div className="container">
				{/* header Title */}
				<DiamondTitle titleText="همه محصولات" />
				{/* categories */}
				<div className="flex flex-wrap items-center justify-evenly gap-5">
					{categories.map((category, index) => (
						<Category
							changeFilterHandler={changeFilterHandler}
							key={index}
							categoryName={category}
							isActive={activeFilter === category}
						/>
					))}
				</div>
				<main>
					<PaginateProducts items={products} itemsPerPage={6} />
				</main>
			</div>
			{/* footer */}
			<Footer />
		</div>
	);
}

// exports
export default Products;
