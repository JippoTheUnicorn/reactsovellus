import React from "react";
import { useState } from "react";

export const Buttons = () => {
    const [count, setCount] = useState(0);

    function countClicks() {
        setCount(count + (1));
    }
    function resetCount() {
        setCount(0);
    }

    return (
        <div>
            <button onClick={countClicks}>Clicked: {count} times</button>
            <button onClick={resetCount}>Clear count</button>
        </div>
    )
}