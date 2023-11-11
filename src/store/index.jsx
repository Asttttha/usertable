import { configureStore } from "@reduxjs/toolkit";
// import {userSlice} from "./slice?s/UserSlice"
import UserSlice from "./slices/UserSlice";

const store = configureStore({
    reducer: {
        users: UserSlice,
    },
})

export default store