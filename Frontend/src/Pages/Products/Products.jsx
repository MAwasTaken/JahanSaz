// react
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// styles

// packages

// redux
import { getAllProductsFromServer } from '../../Services/Redux/Slices/Products';
import { getProductsCategoriesFromServer } from '../../Services/Redux/Slices/Categories';

// axios
import { getAllProducts, getFilteredProducts } from '../../Services/Axios/Requests/Products';

// components
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import DiamondTitle from '../../Components/DiamondTitle/DiamondTitle';
import Category from '../../Components/Category/Category';
import ProductBox from '../../Components/ProductBox/ProductBox';

// products
function Products() {
	// GET all product from state
	// let products = useSelector((state) => state.products);
	const [products, setProducts] = useState([]);

	// GET products categories from state
	const categories = useSelector((state) => state.categories);

	const dispatch = useDispatch();

	// mounting SideEffects
	useEffect(() => {
		// GET products categories when mounting
		dispatch(getProductsCategoriesFromServer());

		// GET all products when mounting
		// dispatch(getAllProductsFromServer());
		getAllProducts().then((res) => setProducts(res.data));
	}, []);

	// change filter when click filter button
	const changeFilterHandler = (categoryName) =>
		getFilteredProducts(categoryName).then((res) => setProducts(res.data));

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
						/>
					))}
				</div>
				<main className="mt-5 grid grid-cols-2 md:mt-10 lg:grid-cols-3">
					{products.map((product, index) => (
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
				</main>
			</div>
			{/* footer */}
			<Footer />
		</div>
	);
}

// exports
export default Products;
