import {combineReducers} from "redux"
import counterSlice from "./slices";

const rootReducr =combineReducers({
    counter : counterSlice
})
export default rootReducr;

