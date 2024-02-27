import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState:initialState,
  reducers: {
    update_products(state, action) {
      state.products = [...action.payload]
    },
  },
});

export const fetchListOfProducts = (category) => async(dispatch) => {
  try {
    
    const response =  await fetch(`http://localhost:8000/${category}/` , {
      method:'GET'
    });

    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    dispatch(update_products(products.products));
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};

export const { update_products } = ProductSlice.actions;
export const ProductReducer = ProductSlice.reducer;
