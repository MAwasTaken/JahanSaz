// react
import React from 'react';

// styles

// packages

// components

// landing
function Landing() {
	// jsx
	return (
		<section className="relative mt-4 xl:mx-[102px]">
			{/* landing container */}
			<div className="flex-col items-center justify-between md:flex md:flex-row">
				{/* landing image */}
				<div className=" mx-auto aspect-auto h-[320px] w-[320px] md:h-[416px] md:w-[416px]">
					<img src="public/images/landing.png" alt="" />
				</div>
				{/* landing titles */}
				<div className="flex flex-col items-end justify-center text-left">
					{/* landing title */}
					<span className="my-5 font-Lalezar text-2xl text-gray-800 md:m-0 md:text-3xl lg:text-4xl xl:text-5xl">
						فروش انواع ظروف یکبار مصرف
					</span>
					{/* landing sub title */}
					<span className="font-Lalezar text-xl text-zinc-700 md:mt-[60px] lg:text-2xl xl:text-3xl">
						!از تولید به مصرف بدون واسطه
					</span>
					<div className="w-[90%] md:w-auto">
						<div className="flex flex-row-reverse items-center justify-between md:flex-col">
							{/* landing buy btn */}
							<button className="mt-7 flex items-center justify-between gap-2 rounded-lg bg-yellow-500/50 p-5 text-xl font-bold transition-colors hover:bg-yellow-500/75 md:mt-[50px]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
									/>
								</svg>
								خرید از جهان‌ساز
							</button>
							{/* landing arrow down */}
							<div className="mt-4 flex -rotate-45 justify-center md:rotate-0">
								<svg
									width="40"
									height="130"
									viewBox="0 0 40 130"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_60_110)">
										<path
											d="M23.0378 83.1411C22.3755 88.9348 21.3472 94.6803 19.9592 100.343C19.2746 103.05 18.5544 110.416 16.0997 111.758C14.7853 106.762 15.4674 101.429 13.5007 96.44C12.6475 94.2823 11.4476 91.3249 8.83721 90.8543C4.96636 90.1476 6.03678 93.7294 6.30808 96.2491C6.90849 101.642 6.82184 107.217 6.99625 112.646C7.12462 116.813 5.37608 126.471 10.0802 128.781C14.7843 131.092 19.7811 124.049 22.5392 121.105C27.0578 116.345 31.6328 111.644 36.1042 106.854C37.3424 105.537 40.2179 103.081 39.7499 100.908C39.0781 97.9147 36.2731 98.8929 34.3168 99.9272C33.0463 100.587 21.164 110.181 21.1735 110.208C20.8944 109.276 23.2048 104.2 23.4759 103.363C24.5439 99.8511 25.4181 96.2832 26.0946 92.6749C28.008 83.2307 30.1386 73.3781 29.7354 63.6668C29.5381 59.132 27.9064 55.7485 26.2438 51.6949C24.669 47.8575 27.0266 44.5422 28.0157 40.5287C29.9845 32.174 29.876 23.462 27.7 15.1593C26.2605 9.53223 21.2042 -3.30342 13.0246 1.62133C10.8967 2.90287 9.43745 5.37063 12.336 5.27546C14.3103 5.21736 14.6307 3.7843 16.884 4.65835C18.363 5.42358 19.5 6.72006 20.0685 8.28905C23.6742 15.4837 24.5235 25.7124 23.6584 33.5211C23.2864 36.4849 22.1511 42.3762 20.2045 44.7568C18.4831 46.8713 16.1408 45.3838 13.08 45.7533C5.16491 46.7397 -2.20705 55.61 0.779978 63.9692C5.12652 76.0489 18.2434 62.1131 21.4581 56.446C26.6856 62.3207 23.8816 76.4187 23.0378 83.1411ZM6.46524 58.7679C7.47177 52.7835 11.2646 51.0589 16.7261 51.9151C15.5298 53.8141 5.30177 68.0378 6.46524 58.7679C6.64534 57.7401 6.36393 59.575 6.46524 58.7679Z"
											fill="#4B5563"
										/>
									</g>
									<defs>
										<clipPath id="clip0_60_110">
											<rect
												width="130"
												height="40"
												fill="white"
												transform="translate(0 130) rotate(-90)"
											/>
										</clipPath>
									</defs>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute -right-2/4 top-0 -z-10 hidden h-[416px] w-[416px] animate-pulse rounded-full bg-yellow-500/70 blur-3xl md:block"></div>
		</section>
	);
}

// exports
export default Landing;
