let element = document.getElementById('intro');

//? we can add inline style to this element by .style.cssText = "__css-styling__"
element.style.cssText = "background-color: red;"

//! But it has a limitation as it removes all of the previous inline styles in the element.
//? To keep the previous styles intact and also add new inline styles, we can
element.style.cssText += "font-size: xx-large;"

//? You can view the effect in the console of the website

//? We can add style also by using setAttribute('style', '__css-styling__')


//? We can add styles also by .style.__css-style-name__ = "__value__". It also adds the styling in the inline styling section