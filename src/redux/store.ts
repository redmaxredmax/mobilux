import { configureStore } from "@reduxjs/toolkit";
import card from "./card";
import { saveState } from "../config/store";

export const store =configureStore({
    reducer:{
        card
    }
})

store.subscribe(()=>{
    saveState("products",store.getState().card)
})