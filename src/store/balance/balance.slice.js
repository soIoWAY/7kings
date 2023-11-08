import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    balance: 300,
}

export const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        updateBalance: (state, action) => {
            state.balance += action.payload
        },
        cashOutBalance: (state, action) => {
            state.balance -= action.payload
        }
    }
})

export const {actions, reducer} = balanceSlice;