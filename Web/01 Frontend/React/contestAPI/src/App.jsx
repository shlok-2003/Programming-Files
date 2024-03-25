import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './context/Counter';
import { useContext } from 'react';

export default function App() {
    const counter = useContext(CounterContext);

    return (
        <div className="container">
            <div>Count is {counter?.count}</div>

            <div className="button">
                <Counter />
                <Counter />
                <Counter />
                <Counter />
            </div>
        </div>
    );
}
