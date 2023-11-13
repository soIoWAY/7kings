import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    stats: {
        wins: 0,
        loses: 0
    }
}

export const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        updateWins: (state) => {
            state.stats.wins += 1
        },
        updateLoses: (state) => {
            state.stats.loses += 1
        }
    }
})

export const {actions, reducer} = statsSlice;