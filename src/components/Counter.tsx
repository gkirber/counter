import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../styles/Counter.css'
import {AppDispatch, RootState} from '../app/store'
import {increment, reset, setCount, setMaxValue, setStartValue} from '../features/counterSlice'

const Counter = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { maxValue, startValue, count } = useSelector((state: RootState) => state.counter)

    const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValue(Number(e.target.value)))
    }

    const handleStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValue(Number(e.target.value)))
    }

    return (
        <div className="container">
            <div className="box">
                <div>
                    <label className="label">Max Value: </label>
                    <input type="text" value={maxValue || ''} onChange={handleMaxValueChange} />
                </div>
                <div>
                    <label className="label">Start Value: </label>
                    <input type="text" value={startValue || ''} onChange={handleStartValueChange} />
                </div>
                <button className="button" onClick={() => dispatch(setCount())}>Set</button>
            </div>

            <div className="box">
                <div className="counter-display">{count}</div>
                <button className="button" onClick={() => dispatch(increment())} disabled={count >= maxValue}>
                    Increment
                </button>
                <button className="button" onClick={() => dispatch(reset())} disabled={count === startValue}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Counter
