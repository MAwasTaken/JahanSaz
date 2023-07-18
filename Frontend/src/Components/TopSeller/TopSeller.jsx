// react
import React, { useEffect, useState } from 'react';
import Title from '../DiamondTitle/DiamondTitle';
import ProductBox from '../ProductBox/ProductBox';
import { getTopSellers } from '../../Services/Axios/Requests/Products';

// styles

// packages

// components

// top seller
function TopSeller() {
	// show the section when the request is successful
	const [isSectionAvailable, setIsSectionAvailable] = useState(false);

	// last products
	const [topSellers, setAllTopSellers] = useState([]);

	// mounting SideEffects
	useEffect(() => {
		// GET all top sellers products when mounting
		getTopSellers()
			.then((res) => {
				setAllTopSellers(res.data);
				setIsSectionAvailable(true);
			})
			.catch(() => setIsSectionAvailable(false));
	}, []);

	// jsx
	return (
		<section>
			<div className="flex items-center justify-center lg:my-[30px]">
				<svg
					className="w-[75px] md:w-[130px]"
					viewBox="0 0 134 98"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M42.6284 78.0764L46.4813 92.3679C46.655 92.9205 46.6546 93.5131 46.4799 94.0655C46.3053 94.6178 45.9649 95.103 45.5051 95.4552C45.0452 95.8075 44.4881 96.0097 43.9093 96.0344C43.3306 96.0592 42.7582 95.9052 42.27 95.5935L30.4426 87.3502C30.0022 87.0229 29.4681 86.8461 28.9193 86.8461C28.3706 86.8461 27.8365 87.0229 27.3961 87.3502L15.5687 95.5935C15.0805 95.9052 14.5081 96.0592 13.9294 96.0344C13.3506 96.0097 12.7935 95.8075 12.3336 95.4552C11.8738 95.103 11.5334 94.6178 11.3588 94.0655C11.1841 93.5131 11.1837 92.9205 11.3574 92.3679L15.2103 78.0764C15.3617 77.5279 15.349 76.947 15.1738 76.4056C14.9986 75.8642 14.6687 75.3859 14.2247 75.03L3.11411 65.8458C2.65005 65.4816 2.30755 64.985 2.13197 64.4218C1.95639 63.8586 1.956 63.2554 2.13086 62.6919C2.30571 62.1285 2.64756 61.6315 3.11115 61.2667C3.57474 60.9018 4.1382 60.6864 4.72694 60.6489L18.884 60.0665C19.4634 60.023 20.0154 59.8018 20.4644 59.4329C20.9134 59.0641 21.2376 58.5657 21.3928 58.0057L26.3209 44.0726"
						stroke="#4B5563"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M107.679 44.207L112.607 58.0057C112.785 58.5406 113.119 59.01 113.566 59.3534C114.014 59.6967 114.553 59.8983 115.116 59.9321L129.273 60.5145C129.862 60.552 130.425 60.7674 130.889 61.1323C131.352 61.4971 131.694 61.9941 131.869 62.5575C132.044 63.121 132.044 63.7242 131.868 64.2874C131.692 64.8506 131.35 65.3472 130.886 65.7114L119.775 75.03C119.331 75.3859 119.001 75.8642 118.826 76.4056C118.651 76.947 118.638 77.5279 118.79 78.0764L122.643 92.3679C122.816 92.9205 122.816 93.5131 122.641 94.0655C122.467 94.6178 122.126 95.103 121.666 95.4552C121.207 95.8075 120.649 96.0097 120.071 96.0344C119.492 96.0592 118.92 95.9052 118.431 95.5935L106.604 87.3502C106.164 87.0229 105.629 86.8461 105.081 86.8461C104.532 86.8461 103.998 87.0229 103.557 87.3502L91.7301 95.5935C91.2418 95.9052 90.6695 96.0592 90.0907 96.0344C89.512 96.0097 88.9549 95.8075 88.495 95.4552C88.0351 95.103 87.6947 94.6178 87.5201 94.0655C87.3455 93.5131 87.345 92.9205 87.5188 92.3679L90.1172 82.6461L91.3717 78.166"
						stroke="#4B5563"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M69.5984 3.88636L74.5265 17.685C74.7045 18.2199 75.0386 18.6893 75.4857 19.0327C75.9329 19.376 76.4726 19.5776 77.0354 19.6114L91.1924 20.1938C91.7811 20.2313 92.3446 20.4468 92.8082 20.8116C93.2718 21.1764 93.6136 21.6735 93.7885 22.2369C93.9633 22.8003 93.9629 23.4035 93.7874 23.9667C93.6118 24.5299 93.2693 25.0265 92.8052 25.3907L81.6946 34.7093C81.2507 35.0652 80.9207 35.5435 80.7456 36.0849C80.5704 36.6263 80.5577 37.2072 80.709 37.7557L84.5619 52.0472C84.7357 52.5998 84.7352 53.1925 84.5606 53.7448C84.3859 54.2971 84.0456 54.7823 83.5857 55.1346C83.1258 55.4868 82.5687 55.689 81.99 55.7138C81.4112 55.7385 80.8389 55.5846 80.3506 55.2728L68.5232 47.0295C68.0828 46.7022 67.5487 46.5255 67 46.5255C66.4513 46.5255 65.9172 46.7022 65.4768 47.0295L53.5598 55.2728C53.0715 55.5846 52.4992 55.7385 51.9204 55.7138C51.3417 55.689 50.7845 55.4868 50.3247 55.1346C49.8648 54.7823 49.5244 54.2971 49.3498 53.7448C49.1752 53.1925 49.1747 52.5998 49.3485 52.0472L53.2014 37.7557C53.3527 37.2072 53.34 36.6263 53.1648 36.0849C52.9897 35.5435 52.6597 35.0652 52.2157 34.7093L41.1051 25.7491C40.5332 25.4173 40.0913 24.9008 39.8519 24.2844C39.6126 23.6681 39.5901 22.9886 39.7882 22.3578C39.9863 21.727 40.3932 21.1823 40.942 20.8135C41.4907 20.4446 42.1486 20.2735 42.8076 20.3282L56.9646 19.7458C57.5441 19.7024 58.096 19.4811 58.545 19.1123C58.994 18.7434 59.3183 18.245 59.4735 17.685L64.4015 3.88636C64.5802 3.33796 64.9278 2.86015 65.3945 2.52131C65.8612 2.18248 66.4232 2 67 2C67.5767 2 68.1387 2.18248 68.6055 2.52131C69.0722 2.86015 69.4198 3.33796 69.5984 3.88636Z"
						stroke="#4B5563"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			{/* header */}
			<Title titleText="پرفروش ترین محصولات" />
			<div className="grid grid-cols-2 lg:grid-cols-3">
				{topSellers.map((product, index) => (
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
			</div>
		</section>
	);
}

// exports
export default TopSeller;
