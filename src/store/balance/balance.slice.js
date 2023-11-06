import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    balance: 100,
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