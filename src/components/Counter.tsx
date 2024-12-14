import React, {useState} from 'react'
import './Counter.css'


const Counter = () => {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0)

    const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        if (value >= 0) setMaxValue(value)
    }

    const handleStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        if (value >= 0 && value < maxValue) setStartValue(value)
    }

    const handleSetValues = () => {
        if (startValue < maxValue) {
            setCount(startValue)
        } else {
            alert('Start value must be less than Max value!')
        }
    }

    const handleIncrement = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const handleReset = () => {
        setCount(startValue)
    }


    return (
        <div className="container">
            <div className="box">
                <div>
                    <label className="label">Max Value: </label>
                    <input
                        type="text"
                        value={maxValue || ''}
                        onChange={handleMaxValueChange}
                    />
                </div>
                <div>
                    <label className="label">Start Value: </label>
                    <input
                        type="text"
                        value={startValue || ''}
                        onChange={handleStartValueChange}
                    />
                </div>
                <button className="button" onClick={handleSetValues}>Set</button>
            </div>

            <div className="box">
                <div className="counter-display">{count}</div>
                <button className="button" onClick={handleIncrement} disabled={count >= maxValue}>
                    Increment
                </button>
                <button className="button" onClick={handleReset} disabled={count === startValue}>Reset</button>
            </div>
        </div>
    )
}

export default Counter