import React from 'react'
import ReactDOM from 'react-dom'

let element = <h1>Hello World</h1>
//? We are writing the JSX file - JavaScript XML here. We are importing React so that it is converted in JavaScript understood by 
//? the web browser.
console.log(element)        //! Print it in console

//? What react does is it creates a virtual DOM. This means it creates the new Element and it will compare it with the real DOM, and 
//? it will make changes
ReactDOM.render(element, document.getElementById('root'))

//? We now render it with ReactDOM.render() where the first parameter is the element you want to add to the DOM, and the second 
//? parameter is the reference to real world DOM(id of the element of index.html)