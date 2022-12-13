import { createSlice} from '@reduxjs/toolkit'
const counterSlice = createSlice({
 name: 'counter',
 initialState: {
   value: 0,
   loading:false
 },
 reducers: {
   name: (state) => {
     state.value = ""
   },
   email: (state) => {
     state.value = ""
   },
   phone: (state)=> {
    state.value = ""
   }
  
 },
})

export const { name , email , phone } = counterSlice.actions;
export default counterSlice.reducer


