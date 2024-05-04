import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../config/store";

const initialState = loadState("products") || {
    products: [],
    count: 0
}

const cardReducer = createSlice({
    name: "card",
    initialState,
    reducers: {
        add: (state, action) => {
            const product = state.products.find((item: any) => item.id === action.payload.id)
            if (!product) {
                return { ...state, products: [...state.products, { ...action.payload, userCount: 1, userPrice: action.payload.price }] }
            }
            return state
        },
        toggleProduct: (state, action) => {
            if (action.payload.type === "increment") {
                const newProduct = state.products.map((item: any) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            userCount: item.userCount + 1,
                            userPrice: (item.cost * (item.userCount + 1)).toFixed(2)
                        }
                    }
                    return item
                })
                return { ...state, products: newProduct }
            }
            if (action.payload.type === "decrement") {
                const newProduct = state.products.map((item: any) => {
                    if (item.id === action.payload.id && item.userCount > 0) {
                        return {
                            ...item,
                            userCount: item.userCount - 1,
                            userPrice: (item.cost * (item.userCount - 1)).toFixed(2)
                        }
                    }
                    return item
                })
                return { ...state, products: newProduct }
            }
        },
        deleteProduct: (state, action) => {
            return { ...state, products: state.products.filter((item: any) => item.id !== action.payload.id) }
        }

    }
})

export default cardReducer.reducer;
export const { add, toggleProduct, deleteProduct } = cardReducer.actions
