import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './Reducer'

const store = configureStore(
   {
    reducer:{
        allHabits:habitReducer,
    },
   }
)
export default store;