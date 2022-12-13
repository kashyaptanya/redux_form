import { createSlice} from '@reduxjs/toolkit'
const counterSlice = createSlice({
 name: 'users',
 initialState: {
   users:[],
  },
 reducers: {
   name: (state) => {
     state.users = ""
     state.users = action.payload;
     state.isLoading = false;
   },
   email: (state) => {
     state.users = ""
     state.users = action.payload;
     state.isLoading = false;
   },
   phone: (state)=> {
    state.users = ""
    state.users = action.payload;
    state.isLoading = false;
   }
  
 },
})

export const { name , email , phone } = counterSlice.actions;
export default counterSlice.reducer


