import { configureStore } from "@reduxjs/toolkit";
import getAllProductsReducer from "./Products/getAllOProductsSlice";
import addProductsReducer from './Products/addProductsSlice'
import getAllSalesReducer from "./Sales/getAllSalesSlice";
import loginReducer from "./Authentication/loginSlice";
import addSalesReducer from "./Sales/addSalesSlice";
import allCapitalReducer from "./Capital/getAllCaptalSlice";
import addCapitalReducer from "./Capital/addCapitalSlice";
import deleteProductReducer from "./Products/deleteProductSlice";


const store = configureStore({
    reducer:{
        allProducts:getAllProductsReducer,
        addProduct:addProductsReducer,
        allSales:getAllSalesReducer,
        login:loginReducer,
        addSales:addSalesReducer,
        allCapital:allCapitalReducer,
        addCapital:addCapitalReducer,
        deleteSingleProduct:deleteProductReducer
    }
})

export default store