import { useContext } from "react";
import { CounterContext } from "../context/Counter";

export default function Counter() {
    const counter = useContext(CounterContext);
    
    return (
        <div className="btn">
            <button onClick={() => counter?.setCount((prev) => prev + 1)}>
                Increment
            </button>
            <button onClick={() => counter?.setCount((prev) => prev - 1)}>
                Decrement
            </button>
        </div>
    );
}
