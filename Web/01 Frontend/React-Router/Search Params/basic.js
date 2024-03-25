import { useSearchParam } from "react-router-dom"

const [searchParams, setSearchParams] = useSearchParam()    //? useSearchParam returns an array, which is destructured in two values

console.log(searchParams)

//! to get the whole query parameter, we can use toString() function
console.log(searchParams.toString())

//! To get a particular query, we can use .get("__query-name__")
console.log(searchParams.get("type"))       //? It gives null if query is not present

//? To set the params, we can use 
setSearchParams( {"__query-name__": "__query-value__"} )        //? {  } represents an object 