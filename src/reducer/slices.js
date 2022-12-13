import { createSlice} from '@reduxjs/toolkit'
const counterSlice = createSlice({
 name: 'users',
 initialState: {
   users: {},
  },
 reducers: {
   setUser: (state, action) => {
     state.users = action.payload;


    // let arr = [ ...state.users ]
    // let index = arr.findIndex(val => val.name === action.payload.name)
    // if(index != -1){
    //   arr.splice(1,index)
    //   state.users = [...arr]
    // }else{
    //   arr.push(action.payload)
    //   state.users = [...arr]
    // }
   },  
 },
})

export const { setUser } = counterSlice.actions;
export default counterSlice.reducer
