//? .addEventListener('scroll', __function-name__)
// * window.addEventListener('scroll', function() {
// *    console.log('scrolling..')
// * })

//? To detect whether we are scrolling up or down, we use wheel event. It has a parameter which has info related to the scrolling

// * window.addEventListener('wheel', function(scrolling_info){
// *     //! It has two properties: .deltaX or .deltaY, which are used to measure the scrolling in X and Y directions respectively
// *     if(scrolling_info.deltaY > 0)           //? Means scrolling down
// *         console.log('Scrolling down')
// *     else if(scrolling_info.deltaY < 0)      //? Means scrolling up
// *         console.log('Scrolling up')
// *})

//? If we want to measure how much pixels has been scrolled we can do it by scroll event

//? We will be using .pageYoffset or .pageXOffset property.

window.addEventListener('scroll', function() {
    if(this.window.pageYOffset > 150)
        this.document.body.style.backgroundColor = "red"
    else
        this.document.body.style.backgroundColor = "white"
})