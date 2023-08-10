import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import Swal from "sweetalert2";
import { baseUrl } from "../../Utils";


export const getAllProducts = createAsyncThunk(
    "user/fetchUsers",
    async(data, {rejectWithValue})=>{
        const response = await fetch(
            `${baseUrl}/products/fetch-products`,
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
    searchData:[]
  }

const getAllProductsSlice = createSlice({
    name:'allProducts',
    initialState,
    reducers:{
        searchProduct:(state, action)=>{
            state.searchData= action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(getAllProducts.pending, (state, action)=>{
            state.loading = true
        })
        .addCase(getAllProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload
        })
        .addCase(getAllProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
  })

export default getAllProductsSlice.reducer
export const {searchProduct} = getAllProductsSlice.actions;
