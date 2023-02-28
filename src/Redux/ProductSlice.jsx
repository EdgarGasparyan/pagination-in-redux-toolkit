import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const limit = 10;

export const fetchProduct = createAsyncThunk(
  "product/fetchByProduct",
  async (page) => {
    const response = await axios(
      `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
    );
    //console.log(response.data.products , "data is Fetch");

    return response.data;
  }
);

const initialState = {
  product: [],
  loading: false,
};

//console.log(initialState);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getData: (state) => {
    //   console.log(state);
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
