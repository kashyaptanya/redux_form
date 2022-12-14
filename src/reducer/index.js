import {combineReducers} from "redux"
import counterSlice from "./slices";

const rootReducr =combineReducers({
    users : counterSlice
})
export default rootReducr;

