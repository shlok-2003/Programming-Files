import React, { Component } from 'react'

class Counter extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>Hello World</h1>
                <button className="btn btn-dark">Increment</button>
                <span className="badge badge-primary m-2">g</span>
            </div>
        );
    }
}

export default Counter;