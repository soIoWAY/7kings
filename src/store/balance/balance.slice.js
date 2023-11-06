import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
}

export const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        updateBalance: (state) => {
            state.balance += 100
        }
    }
})

export const {actions, reducer} = balanceSlice;