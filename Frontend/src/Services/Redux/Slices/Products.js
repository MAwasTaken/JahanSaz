// redux
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// axios
import { getAllProducts, getTopSellers, getLastProducts } from '../../Axios/Requests/Products';

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

// products slice
const slice = createSlice({
	name: 'products',
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProductsFromServer.fulfilled, (state, action) => {
			state.push(...action.payload.data);
		});
		builder.addCase(getTopSellersProductsFromServer.fulfilled, (state, action) => {
			state.push(...action.payload.data);
		});
		builder.addCase(getLastProductsFromServer.fulfilled, (state, action) => {
			state.push(...action.payload.data);
		});
	}
});

// exports
export default slice.reducer;
