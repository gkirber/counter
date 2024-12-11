import React, {useState} from 'react';

const Counter = () => {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)

    return (
        <div>
            <h1>Counter Component</h1>
        </div>
    )
}

export default Counter