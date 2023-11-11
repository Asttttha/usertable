import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions";
const userSlice = createSlice({
    name: "users",
    initialState:[],
    reducers:{
        addUser(state, action){
            state.push(action.payload)
        },
        removeUser(state, action){
            // console.log("hii"+ action.payload)
            // state.pop(action.payload)
            state.splice(action.payload, 1)
        },
        // deleteUsers(state, action){
        //    return [] 
        //     // console.log("hii"+action.payload)
        // },

    

        
    },

    extraReducers(builder){
        builder.addCase(deleteUsers,()=>{
            return []
        })
    }
})

console.log(userSlice.actions)
export default userSlice.reducer
export const { addUser, removeUser,} = userSlice.actions
