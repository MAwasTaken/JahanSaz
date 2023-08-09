// redux
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// axios
import {
	getAllProducts,
	getTopSellers,
	getLastProducts,
	getFilteredProducts
} from '../../Axios/Requests/Products';

// GET all products
export const getAllProductsFromServer = createAsyncThunk(
	'products/getAllProductsFromServer',
	getAllProducts
);

// GET top sellers
export const getTopSellersProductsFromServer = createAsyncThunk(
	'products/getTopSellersProductsFromServer',
	getTopSellers
);

// GET last products
export const getLastProductsFromServer = createAsyncThunk(
	'products/getLastProductsFromServer',
	getLastProducts
);

export const getFilteredProductsFromServer = createAsyncThunk(
	'products/getFilteredProductsFromServer',
	getFilteredProducts
);

// products slice
const slice = createSlice({
	name: 'products',
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProductsFromServer.fulfilled, (state, action) => action.payload.data);
		builder.addCase(
			getTopSellersProductsFromServer.fulfilled,
			(state, action) => action.payload.data
		);
		builder.addCase(getLastProductsFromServer.fulfilled, (state, action) => action.payload.data);
		builder.addCase(
			getFilteredProductsFromServer.fulfilled,
			(state, action) => action.payload.data
		);
	}
});

// exports
// export const { filterProducts } = slice.actions;
export default slice.reducer;
