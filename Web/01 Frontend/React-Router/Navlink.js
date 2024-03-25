//! Navlink is the props given by the React Router which is very similar to Link to render classes and styles with a returnable 
//! function. 


//? The returnable function has an object passed by react router. It has a property of isActive which is a boolean value for if the nav
//? is active or not

<Navlink 
    to="/to-your-link"
    //? Using class -> className={({isActive}) => isActive ? "my-styles" : "some-other-styles")
>
    //! Text
</Navlink>