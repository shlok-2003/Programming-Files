import { BrowserRouter } from "react-router-dom"

//? We import Browser Router as the parent component, i.e It is an provider. It is needed to used other child components of router.
//? After this, we are able to use other components like "Routes, Route", etc 

//! <BrowserRouter window> defaults to using the current document's defaultView, but it may also be used to track changes to another 
//! window's URL, in an <iframe>.

import { Routes, Route } from "React-router-dom"

//? Route is a closed tag component which takes path and element attributes

import { Link } from "react-router-dom"

//? A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> 
//? renders an accessible <a> element with a real href that points to the resource it's linking to. This means that things like 
//? right-clicking a <Link> work as you'd expect. You can use <Link reloadDocument> to skip client side routing and let the browser 
//? handle the transition normally (as if it were an <a href>).
//! You can imagine Link component as anchor tag in html
//? It takes "to" attributes which has the url link where you want to navigate after clicking on the component.
