// import { configureStore } from "@reduxjs/toolkit";
// import rootReducr from '../reducer';
// const store = configureStore({
//     rootReducr
// })

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import userSlice from '../reducer/slices';

const reducer = combineReducers({
    users : userSlice
})

const store = configureStore({
    reducer
})

export default store;