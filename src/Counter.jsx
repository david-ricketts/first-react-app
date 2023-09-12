import { useState } from "react";

export default function Counter() {
    console.log("RENDERED!!!");
    const [count, setCount] = useState(0);
    console.log(`num: ${num}`);
    const addOne = () => {
        setCount(count + 1);
    };
    const setToTen = () => {
        setCount(10);
    };
    const addThree = () => {
        setCount((currentCount) => currentCount + 1);
        console.log(count);
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
    };
    return (
        <div>
            <p>The count is {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>Set To 10</button>
        </div>

    )
}