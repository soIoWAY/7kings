import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    wins: 0,
    loses: 0
}

export const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        updateWins: (state) => {
            state.wins += 1
        },
        updateLoses: (state) => {
            state.loses += 1
        }
    }
})

export const {actions, reducer} = statsSlice;