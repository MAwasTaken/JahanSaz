// redux
import { configureStore } from '@reduxjs/toolkit';

// reducers
import productReducer from './Store/Products';

// store
export default configureStore({
	reducer: {
		products: productReducer
	}
});
