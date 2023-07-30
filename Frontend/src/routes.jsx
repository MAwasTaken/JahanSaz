// pages
import Index from './Pages/Index/Index';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

// routes
const routes = [
	{ path: '/', element: <Index /> },
	{ path: '/login', element: <Login /> },
	{ path: '/register', element: <Register /> },
];

// exports
export default routes;
