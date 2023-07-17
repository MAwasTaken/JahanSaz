// pages
import Index from './Pages/Index/Index';
import Login from './Pages/Login/Login';

// routes
const routes = [
	{ path: '/', element: <Index /> },
	{ path: '/login', element: <Login /> }
];

// exports
export default routes;
