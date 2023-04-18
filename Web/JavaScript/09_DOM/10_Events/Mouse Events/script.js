//? .addEventListener('contextmenu', __function-name__) -> it is used for events which should occur on right click.
//? .addEventListener('dblclick', __function-name__) -> it is used for events which should occur on double click.

document.getElementById('click').addEventListener('click', function() {
    alert('Click Event')
})

document.getElementById('right-click').addEventListener('contextmenu', function() {
    alert('Right Click Event')
})

document.getElementById('dbl-click').addEventListener('dblclick', function() {
    alert('Double Click Event')
})

document.getElementById('mouse-down').addEventListener('mousedown', function() {
    alert('Occurs on pressing the mouse key')
})

document.getElementById('mouse-up').addEventListener('mouseup', function() {
    alert('Occurs when leaving the mouse key after pressing it')
})

document.getElementById('mouse-over').addEventListener('mouseover', function() {
    alert('Occurs when hovering on button')
})

document.getElementById('mouse-out').addEventListener('mouseout', function() {
    alert('Occurs when hovering and then moving out the mouse from the element')
})
