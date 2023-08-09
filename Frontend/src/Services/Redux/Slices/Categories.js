// redux
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// axios
import { getAllCategories } from '../../Axios/Requests/Products';

// GET all products
export const getProductsCategoriesFromServer = createAsyncThunk(
	'products/getProductsCategoriesFromServer',
	getAllCategories
);

// categories slice
const slice = createSlice({
	name: 'categories',
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getProductsCategoriesFromServer.fulfilled,
			(state, action) => action.payload.data
		);
	}
});

// exports
export default slice.reducer;
