import { useContext } from 'react'
import { CounterContext } from './context/Counter';
import Counter from './Counter'
import './App.css'

function App() {
    const counterState = useContext(CounterContext);
    console.log('counterState: ', counterState);
    
    return (
        <div className='App'>
            <h1>Count is { counterState.count }</h1>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
    );
}

export default App
