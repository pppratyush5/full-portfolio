import { ActionType } from "../Contants/action-types"

const initialState = {
    products:[{
        id:1,
        title:"pratyush",
        category:"programmer"
    }]
}

export const productReducer = (state=initialState, {type,payload})=>{
    switch(type){
        case ActionType.SELECTED_PRODUCTS:
            return state;
        default:
            return state;
    }
}