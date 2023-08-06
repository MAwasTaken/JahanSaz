// react
import React, { useEffect, useState } from 'react';

// styles

// packages

// components
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import DiamondTitle from '../../Components/DiamondTitle/DiamondTitle';
import Category from '../../Components/Category/Category';
import { getAllProducts } from '../../Services/Axios/Requests/Products';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsFromServer } from '../../Services/Redux/Store/Products';

// products
function Products() {
	// show the section when the request is successful
	// const [isSectionAvailable, setIsSectionAvailable] = useState(false);

	// all products
	// const [allProducts, setAllProducts] = useState([]);
	const products = useSelector((state) => state.products);
	console.log(products);

	const dispatch = useDispatch();

	// mounting SideEffects
	useEffect(() => {
		// // GET all products when mounting
		// getAllProducts()
		// 	.then((res) => {
		// 		setAllProducts(res.data.products);
		// 		setIsSectionAvailable(true);
		// 	})
		// 	.catch(() => setIsSectionAvailable(false));
		dispatch(getAllProductsFromServer());
	}, []);

	// jsx
	return (
		<>
			{/* header */}
			<Header />
			<div className="container">
				{/* header Title */}
				<DiamondTitle titleText="همه محصولات" />
				{/* categories */}
				<div className="flex flex-wrap items-center justify-evenly gap-5">
					<Category categoryName="دسته‌بندی ۱" />
					<Category categoryName="دسته‌بندی ۲" />
					<Category categoryName="دسته‌بندی ۳" />
					<Category categoryName="دسته‌بندی ۴" />
					<Category categoryName="دسته‌بندی ۵" />
				</div>
			</div>
			{/* footer */}
			<Footer />
		</>
	);
}

// exports
export default Products;
