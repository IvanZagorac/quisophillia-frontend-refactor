import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

interface Category {
    categoryId: number;
    name: string;
}

interface CategoriesState {
    items: Category[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CategoriesState = {
    items: [],
    status: 'idle',
    error: null,
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => 
{
    const response = await api('category/getAll', 'GET');
    // The user's previous code suggested the array is in `response.data.categories`
    if (response.status === 'ok' && response.data.categories) 
    {
        return response.data.categories;
    }
    // As a fallback, let's check if the data is directly the array
    if (response.status === 'ok' && Array.isArray(response.data)) 
    {
        return response.data;
    }
    throw new Error('Failed to fetch categories or data is in an unexpected format');
});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => 
    {
        builder
            .addCase(fetchCategories.pending, (state) => 
            {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => 
            {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => 
            {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default categoriesSlice.reducer;
