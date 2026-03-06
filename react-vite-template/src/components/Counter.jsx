import { useState } from "react";
import Button from "./Button";

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount((prev) => prev + 1)
    }
    
    return (
        <div className="counter">
            <Button onClick={handleClick}>{count}</Button>
        </div>
    )
}