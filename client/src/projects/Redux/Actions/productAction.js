import { ActionType } from "../Contants/action-types"
export const setProduct = (products) =>{
    return {
        type:ActionType.SET_PRODUCT,
        payload:products
    };
};


export const selectedProduct = (product) =>{
    return {
        type:ActionType.SELECTED_PRODUCTS,
        payload:product,
    };
};