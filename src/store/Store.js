import { configureStore } from "@reduxjs/toolkit";
import rootReducr from "./reducer";

const store = configureStore({
    reducer: rootReducr
})

export default store;