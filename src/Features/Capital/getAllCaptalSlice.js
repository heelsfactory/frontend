import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../Utils";
import Swal from "sweetalert2";

export const getAllCapital = createAsyncThunk(
  "capital/getCapital",
  async(data, {rejectWithValue})=>{
      const response = await fetch(
          `${baseUrl}/capital/fetch-all-monthly-cost`,
          {
              method:'GET',
              mode:'cors',
              headers:{
                  'Content-Type': 'application/json'
              }
          }
      );
      try {
          const result = await response.json();
   
          return result.data
      } catch (error) {
          return rejectWithValue(error)
      }
  }
 
)


const initialState = {
  loading:false,
  error:null,
  data:[],
  searchData:[]
};

const allCapitalSlice = createSlice({
  name: "capital",
  initialState,
  reducers: {
    searchCapital:(state, action)=>{
      state.searchData = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getAllCapital.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCapital.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getAllCapital.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default allCapitalSlice.reducer;
export const {searchCapital} = allCapitalSlice.actions
