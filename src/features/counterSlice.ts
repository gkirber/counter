import {createAction, createReducer} from '@reduxjs/toolkit'

// Дії (actions)
export const setMaxValue = createAction<number>('counter/setMaxValue')
export const setStartValue = createAction<number>('counter/setStartValue')
export const setCount = createAction('counter/setCount')
export const increment = createAction('counter/increment')
export const reset = createAction('counter/reset')

// Початковий стан
const initialState = {
    maxValue: 5,
    startValue: 0,
    count: 0,
}

// Ред'юсер
const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setMaxValue, (state, action) => {
            state.maxValue = action.payload
        })
        .addCase(setStartValue, (state, action) => {
            state.startValue = action.payload
        })
        .addCase(setCount, (state) => {
            state.count = state.startValue
        })
        .addCase(increment, (state) => {
            if (state.count < state.maxValue) {
                state.count += 1
            }
        })
        .addCase(reset, (state) => {
            state.count = state.startValue
        })
})

export default counterReducer
