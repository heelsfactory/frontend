import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../Utils";
import Swal from "sweetalert2";
import { getAllProducts } from "./getAllOProductsSlice";
import axios from 'axios'




export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (productId, { rejectWithValue, dispatch }) => {

      try {
        const confirmationResult = await Swal.fire({
          title: 'Do you want to delete this product?',
          showCancelButton: true,
          confirmButtonText: 'Delete',
        });
  
        if (confirmationResult.isConfirmed) {
          const response = await axios.post(`${baseUrl}/products/delete`, {
            productId,
          });

  
          if (response.status === 200) {
            Swal.fire('Deleted!', '', 'success'); // Show success message only on successful deletion
            dispatch(getAllProducts())
            return response.data;
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
            return null;
          }
        } else {
          return null;
        }
      } catch (error) {
        console.log({error})
        return rejectWithValue(error.response.data);
      }
    }
  );
  




const initialState = {
  loading: false,
  error: null,
  data: {},
};



const deleteProductsSlice = createSlice({
  name: "deleteProduct",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(deleteProduct.pending, (state, action) => {
        state.loading = true;
        state.error = null; // Reset the error on pending
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null; // Reset the error on fulfillment
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set the error message from the rejected action
      });
  },
});

  export default deleteProductsSlice.reducer
