// react
import React, { useEffect, useState } from 'react';

// styles
import 'swiper/css';

// packages
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// components
import Title from '../Title/Title';
import ProductBox from '../ProductBox/ProductBox';

// last products
function LastProducts() {
	// last products
	const [lastProducts, setAllProducts] = useState([]);

	// get all last products
	const getLastProducts = async () => {
		const res = await fetch(`http://localhost:3000/api/products`);
		const lastProducts = await res.json();

		console.log(lastProducts);

		setAllProducts(lastProducts);
	};

	// get all courses when mounting
	useEffect(() => {
		getLastProducts();
	}, []);

	// jsx
	return (
		<section className='md:my-10 my-5'>
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
				{lastProducts.map((product, index) => (
					<SwiperSlide key={index}>
						<ProductBox
							productCover={product.images}
							productTitle={product.productName}
							productPrice={product.price}
							productDiscount={85}
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
