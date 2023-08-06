// redux
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// axios
import { getAllProducts } from '../../Axios/Requests/Products';

// GET all products
export const getAllProductsFromServer = createAsyncThunk(
	'products/getProductsFromServer',
	getAllProducts
);

// products slice
const slice = createSlice({
	name: 'products',
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProductsFromServer.fulfilled, (state, action) => {
			console.log('state', state);
			console.log('action', action);

      state.push(...action.payload.data.products)
		});
	}
});

export default slice.reducer;
