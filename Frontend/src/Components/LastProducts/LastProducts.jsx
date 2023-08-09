// react
import React, { useEffect } from 'react';

// styles
import 'swiper/css';

// packages
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getLastProductsFromServer } from '../../Services/Redux/Slices/Products';

// components
import Title from '../DiamondTitle/DiamondTitle';
import ProductBox from '../ProductBox/ProductBox';

// last products
function LastProducts() {
	// dispatch
	const dispatch = useDispatch();

	// mounting SideEffects
	useEffect(() => {
		// GET all last products when mounting
		dispatch(getLastProductsFromServer());
	}, []);

	// GET last products from state
	const lastProducts = useSelector((state) => state.products);

	// jsx
	return (
		<section className="mt-5 md:mt-10">
			{/* header */}
			<Title
				titleText="جدیدترین محصولات"
				haveButton={true}
				buttonText="همه محصولات"
				buttonHref="/products"
			/>
			{/* slider */}
			<Swiper
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
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
