import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterProvider } from './context/Counter.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterProvider>
            <App />
        </CounterProvider>
    </React.StrictMode>,
)
