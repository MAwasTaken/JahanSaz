// react
import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// main
ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
