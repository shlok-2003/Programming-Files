import React from "react"

export default class App extends React.Component {
    /**
     * If you can't use class fields in your class components
     * for some reason, then you'll need to make use of the
     * class' `constructor` method to initialize your state object.
     * The first line of the constructor method should be a call
     * to `super()` like you see below, and then you can add your
     * state variable as a property attached to `this`
     */
    constructor() {
        super()     // we use this keyword to first call the class of the parent and then render its own component. This helps in 
                    // connecting the parent class with child classes
        this.state = {
            goOut: "Yes"
        }
        this.toggleGoOut = this.toggleGoOut.bind(this)      // used to bind this. with the function to avoid using arrow function
    }
    
    /**
     * If you can't use arrow functions for your class methods,
     * you'll need to make sure to `bind` them inside the 
     * constructor above.
     */
    
    toggleGoOut() {
        this.setState(prevState => {
            return {
                goOut: prevState.goOut === "Yes" ? "No" : "Yes"
            }
        })
    }
    
    render() {
        return (
            <div className="state">
                <h1 className="state--title">Should I go out tonight?</h1>
                <div className="state--value" onClick={this.toggleGoOut}>
                    <h1>{this.state.goOut}</h1>
                </div>
            </div>
        )
    }
}
