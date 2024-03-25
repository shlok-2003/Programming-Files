import { useContext } from "react";
import { CounterContext } from "./context/Counter";

const Counter = () => {
    const state = useContext(CounterContext);
    
    return (
        <div>
            <button onClick={() => state.setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => state.setCount(prevState => prevState - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;