// pages
import Index from './Pages/Index/Index';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Products from './Pages/Products/Products';

// routes
const routes = [
	{ path: '/', element: <Index /> },
	{ path: '/login', element: <Login /> },
	{ path: '/register', element: <Register /> },
	{ path: '/products', element: <Products /> }
];

// exports
export default routes;
