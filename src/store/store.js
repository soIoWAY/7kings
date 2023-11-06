import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as statsReducer} from "./stats/stats.slice.js";
import {reducer as balanceReducer} from "./balance/balance.slice.js"

const reducers = combineReducers({
    stats: statsReducer,
    balance: balanceReducer,
})

export const store = configureStore({
    reducer: reducers,
})
