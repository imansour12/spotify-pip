import React, { useState, useEffect } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(1);
    }, []);

    const addNumber = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const subtractNumber = () => {
        setCount((prevCount) => prevCount - 1);
    };

    try {
        return (
            <div>
                <div onClick={subtractNumber}>-</div>
                <button>{count}</button>
                <div onClick={addNumber}>+</div>
            </div>
        );
    } catch (error) {
        console.error("Error rendering Picture in Picture", error);
        return <></>;
    }
};

export default Counter;