import React, {useEffect, useState} from 'react'
import './Counter.css'


const Counter = () => {
    const [maxValue, setMaxValue] = useState<number>(
        () => Number(localStorage.getItem('maxValue')) || 5
    )
    const [startValue, setStartValue] = useState<number>(
        () => Number(localStorage.getItem('startValue')) || 0
    )
    const [count, setCount] = useState<number>(
        () => Number(localStorage.getItem('count')) || 0
    )

    useEffect(() => {
        localStorage.setItem('maxValue', String(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('startValue', String(startValue))
    }, [startValue])

    useEffect(() => {
        localStorage.setItem('count', String(count))
    }, [count])

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

    const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value)
        setMaxValue(newValue)
        if (newValue < startValue) {
            setStartValue(newValue)
            setCount(newValue)
        }
    }

    const handleStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value)
        setStartValue(newValue)
        setCount(newValue)
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