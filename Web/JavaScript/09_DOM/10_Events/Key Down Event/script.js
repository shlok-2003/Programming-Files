//? .addEventListener('keydown', __function-name__)
//? .addEventListener('keyup', __function-name__)

window.addEventListener('keydown', checkKey)

function checkKey(key_pressed) {
    console.log(key_pressed.key)
}

//? With key events, we get extra parameter which is the information related key pressed. You can check which key is pressed

window.addEventListener('keyup', checkKey_alert)  //? When the key is pressed and released, event occurs
function checkKey_alert(key_pressed) {
    alert(key_pressed.key)
}