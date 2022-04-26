import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    name: "Baliram Giri",
    age: 20,
    status: "coder",
  };

// export const  userReducer = (state=initialState, action)=>{
//     if(action.type==="ADD_AGE"){
//         return{
//             ...state,
//             age:action.payload
//         }
//     }else{
//         return state
//     }
// }
export const  userReducer  = createReducer(initialState,(builder)=>{
   builder.addCase("ADD_AGE", (state, action)=>{
       state.age=action.payload
   })
})