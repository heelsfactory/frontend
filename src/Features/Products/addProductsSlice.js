import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../Utils";
import Swal from "sweetalert2";
import { getAllProducts } from "./getAllOProductsSlice";


export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data, { rejectWithValue, dispatch }) => {


    try {
      const response = await fetch(`${baseUrl}/products/create-product`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        // If response is not okay, throw an error with the status message
        return rejectWithValue(responseData.statusMessage);
      }

      // If successful, return the data
      Swal.fire("Sales successfully added", "", "success");
      dispatch(getAllProducts())

      return responseData.data;
    } catch (error) {
      if (error.message === "Something went wrong") {
        return rejectWithValue(responseData.statusMessage);
      }

      // Log the error and return it with rejectWithValue
      console.log({ error });
      return rejectWithValue(error);
    }
  }
 
);






const initialState = {
  loading: false,
  error: null,
  data: {},
};



const addProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addProduct.pending, (state, action) => {
        state.loading = true;
        state.error = null; // Reset the error on pending
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null; // Reset the error on fulfillment
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set the error message from the rejected action
      });
  },
});

  export default addProductsSlice.reducer
