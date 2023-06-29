// react
import React from 'react';
import { useRoutes } from 'react-router-dom';

// styles
import './App.css';

// packages

// components

// routes
import routes from './routes';

// app
function App() {
	// router
	const router = useRoutes(routes);

	// jsx
	return <>{router}</>;
}

// exports
export default App;
