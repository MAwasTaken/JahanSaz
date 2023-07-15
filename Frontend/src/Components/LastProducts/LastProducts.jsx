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
import { getLastProducts } from '../../Services/Axios/Requests/Products';

// last products
function LastProducts() {
	// show the section when the request is successful
	const [isSectionAvailable, setIsSectionAvailable] = useState(false);

	// last products
	const [allProducts, setAllProducts] = useState([]);

	// mounting SideEffects
	useEffect(() => {
		// get all courses when mounting
		getLastProducts()
			.then((res) => {
				setAllProducts(res.data);
				setIsSectionAvailable(true);
			})
			.catch(() => setIsSectionAvailable(false));
	}, []);

	// jsx
	return (
		<section className={`mt-5 md:mt-10 ${isSectionAvailable ? null : 'hidden'}`}>
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
