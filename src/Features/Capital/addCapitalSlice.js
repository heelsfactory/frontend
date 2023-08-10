import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../Utils";
import Swal from "sweetalert2";
import { getAllCapital } from "./getAllCaptalSlice";

export const addCapital = createAsyncThunk(
  "capital/addCapital",
  async (data, { rejectWithValue, dispatch }) => {

    try {
      const response = await fetch(`${baseUrl}/capital/add-monthly-cost`, {
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
        throw new Error(responseData.statusMessage);
      }

      // If successful, return the data
      Swal.fire("capital successfully added", "", "success");
      dispatch(getAllCapital())

      return responseData.data;
    } catch (error) {
      // Handle network errors and server errors here
      // You can also add specific error handling based on the statusCode received
      // For example:
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

const addCapitalSlice = createSlice({
  name: "allCapital",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addCapital.pending, (state, action) => {
        state.loading = true;
        state.error = null; // Reset the error on pending
      })
      .addCase(addCapital.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null; // Reset the error on fulfillment
      })
      .addCase(addCapital.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set the error message from the rejected action
      });
  },
});

export default addCapitalSlice.reducer;
