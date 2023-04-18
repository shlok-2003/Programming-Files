//? DOMContentLoaded - the browser fully loaded HTML ans completed the DOM tree. However, it hasn't loaded external resources like 
//? stylesheet and images. In this event, you can start selecting DOM nodes or initialize the interface.

//? load - the browser fully loaded the HTML and also external resources like images and stylesheets. When you leave the page, 
//? the following events fire in sequence.

//? In simple words: 
//? DOMContentLoad triggers an event when the DOM tree is created and still the heavy files like img and videos are being downloaded
//? Whereas load triggers an event when all the content of the page is loaded.

//? We can add DOMContentLoaded by .addEventListener('DOMContentLoaded', __function-name__); 
//? We can add DOMContentLoaded by .addEventListener('load', __function-name__); 