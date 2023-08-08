// redux
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// reducers
import productReducer from './Slices/Products';
import categoriesReducer from './Slices/Categories';

// store
export default configureStore({
	reducer: {
		products: productReducer,
		categories: categoriesReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});
