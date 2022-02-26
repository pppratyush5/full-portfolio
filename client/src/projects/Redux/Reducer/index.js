import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";

export const reducer = combineReducers({
    allProducts:productReducer
});
