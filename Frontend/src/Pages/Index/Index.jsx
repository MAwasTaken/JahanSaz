// react
import React, { useEffect } from 'react';

// styles

// packages

// components
import Header from '../../Components/Header/Header';
import Landing from '../../Components/Landing/Landing';
import LastProducts from '../../Components/LastProducts/LastProducts';
import AboutUs from '../../Components/AboutUs/AboutUs';
import TopSeller from '../../Components/TopSeller/TopSeller';
import Footer from '../../Components/Footer/Footer';

// index
function Index() {
	// document title
	document.title = 'جهان‌ساز | JahanSaz';

  // mounting side effects
	useEffect(() => {
		// scroll to top when mounting
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	});

	// jsx
	return (
		<>
			<Header />
			<main className="container ">
				<Landing />
				<LastProducts />
				<AboutUs />
				<TopSeller />
			</main>
			<Footer />
		</>
	);
}

// exports
export default Index;
