import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../Utils";
import Swal from "sweetalert2";
import { getAllSales } from "./getAllSalesSlice";


export const addSalesProduct = createAsyncThunk(
  "sales/addSales",
  async (data, { rejectWithValue,dispatch }) => {
    try {
      const response = await fetch(`${baseUrl}/sales/add-sale`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
console.log({response})
      const responseData = await response.json();

      if (!response.ok) {
        // If response is not okay, throw an error with the status message
        throw new Error(responseData.statusMessage);
      }

      // If successful, return the data
      Swal.fire("Sales successfully added", "", "success");
      dispatch(getAllSales())
      return responseData.data;
    } catch (error) {
      if (error.message === "Something went wrong") {
        Swal.fire("Sorry, Something went wrong", "error").then((result) => {
          if (result.isConfirmed) {
            // Handle the action after the Swal alert is confirmed
          }
        });
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

const addSalesSlice = createSlice({
  name: "allSales",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addSalesProduct.pending, (state, action) => {
        state.loading = true;
        state.error = null; // Reset the error on pending
      })
      .addCase(addSalesProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null; // Reset the error on fulfillment
      })
      .addCase(addSalesProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set the error message from the rejected action
      });
  },
});

export default addSalesSlice.reducer;
