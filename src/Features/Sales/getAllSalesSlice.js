import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import Swal from "sweetalert2";
import { baseUrl } from "../../Utils";


export const getAllSales = createAsyncThunk(
    "user/getSales",
    async(data, {rejectWithValue})=>{
        const response = await fetch(
            `${baseUrl}/sales/fetch-all-sales`,
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




  
  const initialState ={
    loading:false,
    error:null,
    data:[],
    searchData:[],
  }

 const getAllSalesSlice = createSlice({
    name:'allSales',
    initialState,
    reducers:{
        searchSales:(state, action)=>{
            state.searchData = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(getAllSales.pending, (state, action)=>{
            state.loading = true
        })
        .addCase(getAllSales.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload
        })
        .addCase(getAllSales.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
  })

export default getAllSalesSlice.reducer
export const {searchSales} = getAllSalesSlice.actions;