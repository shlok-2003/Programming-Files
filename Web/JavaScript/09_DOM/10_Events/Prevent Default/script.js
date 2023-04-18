//? Consider a link. Now if we click on it once, then it will redirect us to some another website. But what if we wanted that this 
//? should happen if and only if, we clicked the button twice. This could have created chaos. 
//! But we can resolve it by using .preventDefault

//? Suppose, on clicking the href tag, we dont want to redirect to another website. We can do it by
let anchor = document.getElementById('anchor')

anchor.addEventListener('click', function(event) {
    document.write('Link clicked....')
    event.preventDefault();
})