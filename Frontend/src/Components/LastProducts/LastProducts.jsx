// react
import React, { useEffect, useState } from 'react';

// styles
import 'swiper/css';

// packages
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import axios from 'axios';

// components
import Title from '../Title/Title';
import ProductBox from '../ProductBox/ProductBox';

// last products
function LastProducts() {
	// last products
	const [allProducts, setAllProducts] = useState([]);

	// get all last products
	const getLastProducts = async () =>
		axios.get(`http://localhost:3000/api/products`).then((res) => setAllProducts(res.data));

	// get all courses when mounting
	useEffect(() => {
		getLastProducts();
	}, []);

	// jsx
	return (
		<section className="mt-5 md:mt-10">
			{/* header */}
			<Title
				titleText="جدیدترین محصولات"
				haveButton={true}
				buttonText="همه محصولات"
				buttonHref="/"
			/>
			{/* slider */}
			<Swiper
				loop={true}
				autoplay={{
					delay: 5000
				}}
				slidesPerView={2}
				breakpoints={{
					1024: {
						slidesPerView: 3
					}
				}}
				modules={[Autoplay]}
			>
				{allProducts.map((product, index) => (
					<SwiperSlide key={index}>
						<ProductBox
							productCover={product.images}
							productTitle={product.productName}
							productPrice={product.price}
							productDiscount={product.discount}
							productSize={product.size}
							productHref="/"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

// exports
export default LastProducts;
