// react
import React from 'react';
import { Link } from 'react-router-dom';

// styles

// packages
import { BsFillCaretLeftFill } from 'react-icons/bs';

// components

// product box
function ProductBox({
	productCover,
	productTitle,
	productPrice,
	productSize,
	productDiscount,
	productHref
}) {
	// jsx
	return (
		<div className="m-4 mx-auto h-[273px] w-[172px] flex-col rounded-2xl bg-white px-4 pb-2 pt-4 shadow-md transition-shadow hover:shadow hover:shadow-yellow-500/50 md:h-[460px] md:w-[300px] md:px-5 md:pt-5">
			{/* product cover */}
			<Link to={productHref} className="mb-1 block h-[140px] w-[140px] md:h-[260px] md:w-[260px]">
				{productCover ? (
					<img src={productCover[0]} alt="تصویر محصول" />
				) : (
					<img src="/Images/Products/NDA.png" alt="تصویر محصول" />
				)}
			</Link>
			{/* product title */}
			<div>
				<span className="line-clamp-2 text-sm font-Vazir font-bold text-gray-800 md:text-xl">
					{productTitle}
				</span>
			</div>
			{/* product description */}
			<div className="mt-1 items-start justify-between md:mt-2 md:flex">
				{/* product price */}
				<div className="flex items-center justify-between md:flex-col">
					<div>
						<span className="ml-1 font-Vazir text-base font-bold text-teal-600 md:text-xl">
							{Intl.NumberFormat('fa-IR').format(productPrice)}
						</span>
						<span className="font-Vazir text-sm font-light tracking-tighter text-teal-600 md:text-xl">
							تومان
						</span>
					</div>
					{/* product discount */}
					{productDiscount && (
						<div className="flex gap-x-px md:mt-1">
							<span className="text-[12px] text-zinc-700 line-through">
								{Intl.NumberFormat('fa-IR').format(productDiscount)}
							</span>
							<span className="hidden text-[12px] text-zinc-700 md:block">تومان</span>
						</div>
					)}
				</div>
				{/* product size */}
				<span className="hidden text-gray-600 md:block">{productSize.toLocaleString()}</span>
			</div>
			{/* more info button */}
			<div className="mt-6 flex items-center justify-center md:mt-9">
				<Link
					to={productHref}
					className="flex items-center rounded-lg transition-colors hover:bg-yellow-400/25"
				>
					<span className="md:p-2 p-1 text-sm text-yellow-500 md:text-base">مشاهده اطلاعات</span>
					<BsFillCaretLeftFill className="h-6 text-yellow-500/50 md:w-6" />
				</Link>
			</div>
		</div>
	);
}

// exports
export default ProductBox;
